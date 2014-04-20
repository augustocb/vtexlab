# products Generator is a Jekyll plugin that generates a data/products.yml file by
# traversing all of the available pages.
require 'yaml'
require 'pathname'

module Jekyll
	class Product
		attr_accessor :name
		attr_accessor :documentation
		attr_accessor :versions
    attr_accessor :title
	end
  
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

    productFile = File.new(File.join(Pathname(__FILE__).dirname.parent, "_data/products.yml"),"w")
		productFile.puts YAML.dump(getListOfProducts(@products))
		productFile.close
	  end

    def include_docType(products, page)
    	if products.has_key?(page.data['application']) == true
    		@product = products[page.data['application']]

        @product.documentation[page.data['docType']] << page.url
      end
    end

    def include_version(products, page)
      if products.has_key?(page.data['application']) == true
        if page.data['version'].nil? == false
          @versions = products[page.data['application']].versions[page.data['docType']]
          if @versions.include?(page.data['version']) == false
            @versions.push page.data['version']
          end
        end
    	end
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

          if page.data['title'].nil? == false
            @product = products[page.data['application']]
            @product.title = page.data['title']
            products[page.data['application']] = @product
          end
        end
      end
    end

	  def create_product(name)
        @product = Product.new
        @product.name = name
        @product.documentation = Hash.new {|h,k| h[k]=[]}
        @product.versions = Hash.new { |h,k| h[k]=[]  }
        return @product
    end

  end
end