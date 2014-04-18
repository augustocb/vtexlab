# products Generator is a Jekyll plugin that generates
# a api/{application}/{version}/{resource}/index.md file from VTEX REST API metadata

require 'pathname'
require 'json'

module Jekyll
	class LayoutEngine < Generator
		def generate(site)
			docFiles = parse_filesToArray("vtexlab-docs/**/*")
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

		def include_frontMatter(file)
		end

		def include_description(file)
		end

	end
end

