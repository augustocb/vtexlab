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
			return "docs/#{json['product']}/#{json['docType']}/#{json['version']}/#{json['resource']}/index.md"
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
			file.write("docType: #{json['docType']}\n")
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

			file.write("#{method['verb'].upcase}  #{method['route']}\n")
			file.write("{: .api-route }\n\n")

			include_parameters(file, method)
			file.write("</div>\n\n")
		end

		def include_parameters(file, method)
			file.write("### Parametros\n\n")
			file.write("<table class=\"doc-api-table\">\n")
			file.write("<thead>\n")
			file.write("<tr>\n")
			file.write("<th class=\"text-right\">Nome</th>\n")
			file.write("<th class=\"text-left\">Tipo</th>\n")
			file.write("</tr>\n")
			file.write("</thead>\n")
			file.write("<tbody>\n")

			method['parameters'].each do |param|
				parameter(file, param)
			end

			file.write("</tbody>\n")
			file.write("</table>\n\n")
		end

		def include_example(file, method)
			file.write("<div class=\"api-example\">\n\n")
			file.write("Example Request\n")
			file.write("{: .resource-title }\n\n")

			example = JSON.pretty_generate(method['example'])
			file.write("{% highlight json %}\n")
			file.write("#{example}\n\n")
			file.write("{% endhighlight %}\n\n")

			file.write("Example Response\n")
			file.write("{: .resource-title }\n\n")

			response = JSON.pretty_generate(method['response'])
			file.write("{% highlight json %}\n")
			file.write("#{response}\n\n")
			file.write("{% endhighlight %}\n")

			file.write("</div>\n\n")
		end

		def include_footer(file)
			file.write("</div>\n")
		end

		def parameter(file, parameter)
			if parameter['children'].nil? == true
				inject_parameter(file, parameter)
			else
				inject_parameter(file, parameter)
				injectChildParameter(file, parameter)
			end
		end

		def inject_parameter(file, parameter)
			file.write("<tr>\n")
			file.write("<td class=\"text-right\">\n")
			file.write("<strong class=\"api-table-title\">#{parameter['name']}</strong>\n")
			file.write("</td>\n")

			file.write("<td>\n")
			file.write("<strong class=\"api-table-type\">#{parameter['type']}</strong>\n")

			if parameter['required'] == true
				file.write("<span class=\"api-table-description\">Requerido. #{parameter['description']}</span>\n")
			else
				file.write("<span class=\"api-table-description\">#{parameter['description']}</span>\n")
			end
			file.write("</td>\n")
			file.write("</tr>\n")
		end

		def injectChildParameter(file, parameters)
			file.write("<tr class=\"doc-api-table-child\">\n")
			file.write("<td colspan=\"2\">\n\n")
			file.write("<div class=\"arrow-up\"></div>\n\n")
			file.write("<table class=\"doc-api-table\">\n")

			parameters['children'].each do |child|
				parameter(file, child)
			end

			file.write("</table>\n")
			file.write("</td>\n")
			file.write("</tr>\n")
		end

		def format_title(title)
			return title.downcase.gsub! " ", "-"
		end
	end
end