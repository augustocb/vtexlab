# products Generator is a Jekyll plugin that generates a data/products.yml file by
# traversing all of the available pages.
require 'yaml'

module Jekyll
	class Product
		attr_accessor :name
		attr_accessor :documentation
		attr_accessor :versions
	end

  puts Dir.pwd
  
  class ProductsGenerator < Generator

    # Goes through pages and posts and generates sitemap.xml file
    #
    # Returns nothing
    def generate(site)
    @products = Hash.new
    site.pages.each do |page|
      include_product(@products, page)
      include_docType(@products, page)
      include_version(@products, page)
    end

		productFile = File.new('_data/products.yml', 'w')
		productFile.puts YAML.dump(getListOfProducts(@products))
		productFile.close
	end

    def include_docType(products, page)
    	if products.has_key?(page.data['application']) == true
    		@product = products[page.data['application']]
    		if @product.documentation.include?(page.data['docType']) == false
    			@product.documentation.push page.data['docType']
    		end
    	end
    end

    def include_version(products, page)
    	if products.has_key?(page.data['application']) == true
    		if page.data['docType'].eql?("api")
    			@version = get_version_from(page)
  				if products[page.data['application']].versions.include?(@version) == false
    				products[page.data['application']].versions.push @version
    			end
    		end
    	end
    end

    def get_version_from(page)
    	version = page.url.split('/')
    	return version[4]
    end

  	def getListOfProducts(products)
  		@list = Array.new
  		products.each do |key, value|
  			@list.push value
  		end
  		return @list
  	end

    def include_product(products, page)
		if products.has_key?(page.data['application']) == false &&
			page.data['application'].nil? == false

			if page.data['application'].length > 0
				products[page.data['application']] = create_product(page.data['application'])
			end
		end
    end

	def create_product(name)
		@product = Product.new
		@product.name = name
		@product.documentation = Array.new
		@product.versions = Array.new
		return @product
    end

  end
end