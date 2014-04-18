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
				create_FilePath(path)

				File.open("out.txt", "w") do |f|     
					f.write(data_you_want_to_write)
				end
				#include_frontMatter(file, json)
				
				
				#print("---->>>>>", File.join(Pathname(__FILE__).dirname.parent, get_docPath(json)),"\n")
			end
		end

		def get_docPath(json)
			return "docs/#{json['product']}/api/#{json['version']}/#{json['resource']}/index.md"
		end

		def create_FilePath(filePath)
			path = Pathname.new(filePath)
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
		end

		def include_description(file)
			#for docFile in docFiles
			#	file = createFile(docFile.path)
			#	include_frontMatter(file)
			#	include_description(file)


						# <div class="api-container">
			#	<div class="api-block">
			#	<div class="api-description">
			#	<h1 class="doc-title">{{ page.title }}</h1>     
			#	</div>
			#
			#	</div>
			#
			#	<div class="api-block">
			#	<div class="api-description">
				## Consulta quantidade em estoque2
			#	{: #consulta-quantidade-em-estoque .slug-text }
			#	Obtém o balanço de estoque de uma coleção de itens
			#	POST /api/logistics/pvt/inventory/warehouseitems/getbalance
			#	{: .api-route 
		end

	end
end

