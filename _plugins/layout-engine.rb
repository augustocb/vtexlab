# products Generator is a Jekyll plugin that generates
# a api/{application}/{version}/{resource}/index.md file from VTEX REST API metadata

require 'pathname'
require 'json'

module Jekyll
	class LayoutEngine < Generator
		def generate(site)
			docFiles = parse_filesToArray("vtexlab-docs/**/*")
			docFiles.each do |json|
				path = File.join(Pathname(__FILE__).dirname.parent, get_docPath(json))
				create_filePath(path)

				File.open(path, "w") do |file|
					include_frontMatter(file, json)
					include_title(file, json)
					include_content(file, json)
					include_footer(file)
				end
			end
		end

		def get_docPath(json)
			return "docs/#{json['product']}/#{json['documentation']}/#{json['version']}/#{json['resource']}/index.md"
		end

		def create_filePath(filePath)
			path = Pathname.new(filePath).parent
			if FileTest.exist?(path) == false
				FileUtils.mkdir_p path
			end
		end

		def parse_filesToArray(directory)
			dirName = Pathname(__FILE__).dirname.parent
			path = File.join(Pathname(dirName).parent, directory)

			docFiles = Array.new
			Dir.glob(path).each do |filePath|

				if Pathname(filePath).file? == true
					if File.extname(filePath) == ".json"
						file = File.open(filePath, "rb")
						json = JSON.parse(file.read)
						docFiles.push json
						file.close
					end
				end
			end

			return docFiles
		end

		def include_frontMatter(file, json)
			file.write("---\n")
			file.write("layout: docs\n")
			file.write("title: #{json['resource']}\n")
			file.write("application: #{json['product']}\n")
			file.write("docType: #{json['documentation']}\n")
			file.write("version: #{json['version']}\n")
			file.write("---\n\n")
		end

		def include_title(file, json)
			file.write("<div class=\"api-container\">\n\n")
			file.write("<div class=\"api-block\">\n\n")
			file.write("<div class=\"api-description\">\n\n\n")
			file.write("<h1 class=\"doc-title\">{{ page.title }}</h1>\n")
			file.write("</div>\n\n")
			file.write("</div>\n\n")
		end

		def include_content(file, json)
			json['methods'].each do |method|
				file.write("<div class=\"api-block\">\n")
				include_description(file, method)
				include_example(file, method)
				file.write("</div>\n\n")
			end
		end

		def include_description(file, method)
			file.write("<div class=\"api-description\">\n")
			file.write("## #{method['title']}\n")
			title = format_title(method['title'])
			file.write("{: ##{title} .slug-text }\n\n")
			file.write("#{method['description']}\n\n")

			file.write("#{method['verb'].upcase}  #{method['route']['template']}\n")
			file.write("{: .api-route }\n\n")

			include_parameters(file, method)
			file.write("</div>\n\n")
		end

		def include_parameters(file, method)
			if method['route']['parameters'].nil? == false
				file.write("\n<h2>Parametros</h2>\n")
				set_parameter_header(file)
				inject_parameter(method['route']['parameters'], file)
				file.write("</tbody>\n")
				file.write("</table>\n\n")
			end

			if method['arguments'].nil? == false
				file.write("\n<h2>Argumentos</h2>\n")
				set_parameter_header(file)
				inject_parameter(method['arguments'], file)
				file.write("</tbody>\n")
				file.write("</table>\n\n")
			end

			if method['attributes'].nil? == false
				file.write("\n<h2>Atributos</h2>\n")
				set_parameter_header(file)
				inject_parameter(method['attributes'], file)
				file.write("</tbody>\n")
				file.write("</table>\n\n")
			end
		end

		def set_parameter_header(file)
			file.write("<table class=\"doc-api-table\">\n")
			file.write("<thead>\n")
			file.write("<tr>\n")
			file.write("<th class=\"text-right\">Nome</th>\n")
			file.write("<th class=\"text-left\">Tipo</th>\n")
			file.write("</tr>\n")
			file.write("</thead>\n")
			file.write("<tbody>\n")
		end

		def inject_parameter(parameters, file)
			parameters.each do |param|
				parameter(param, file)
			end
		end

		def parameter(param, file)
			parameter = has_child(param)
			if parameter != nil
				insert_parameter(file, param)
				injectChildParameter(file, parameter)
			else
				insert_parameter(file, param)
			end
		end

		def has_child(param)
			if param[1]['parameters'].nil? == false
				return param[1]['parameters']
			end
			if param[1]['arguments'].nil? == false
				return param[1]['arguments']
			end
			if param[1]['attributes'].nil? == false
				return param[1]['attributes']
			end
			return nil
		end

		def insert_parameter(file, parameter)
			file.write("<tr>\n")
			file.write("<td class=\"text-right\">\n")
			file.write("<strong class=\"api-table-title\">#{parameter[0]}</strong>\n")
			file.write("</td>\n")

			file.write("<td>\n")
			file.write("<strong class=\"api-table-type\">#{parameter[1]['type']}</strong>\n")

			if parameter[1]['required'] == true
				file.write("<span class=\"api-table-description\">Requerido. #{parameter[1]['description']}</span>\n")
			else
				file.write("<span class=\"api-table-description\">#{parameter[1]['description']}</span>\n")
			end
			file.write("</td>\n")
			file.write("</tr>\n")
		end

		def injectChildParameter(file, parameters)
			file.write("<tr class=\"doc-api-table-child\">\n")
			file.write("<td colspan=\"2\">\n\n")
			file.write("<div class=\"arrow-up\"></div>\n\n")
			file.write("<table class=\"doc-api-table\">\n")

			parameters.each do |param|
				parameter(param, file)
			end

			file.write("</table>\n")
			file.write("</td>\n")
			file.write("</tr>\n")
		end

		def include_example(file, method)
			file.write("<div class=\"api-example\">\n")
			file.write("Example Request\n")
			file.write("{: .resource-title }\n")

			example = JSON.pretty_generate(method['example']['request'])
			file.write("{% highlight json %}\n")
			file.write("#{example}\n")
			file.write("{% endhighlight %}\n")

			file.write("Example Response\n")
			file.write("{: .resource-title }\n")

			response = JSON.pretty_generate(method['example']['response'])
			file.write("{% highlight json %}\n")
			file.write("#{response}\n\n")
			file.write("{% endhighlight %}\n")

			file.write("</div>\n\n")
		end

		def include_footer(file)
			file.write("</div>\n")
		end

		def format_title(title)
			return title.downcase.gsub! " ", "-"
		end
	end
end