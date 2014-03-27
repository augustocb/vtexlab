# VTEX Docs
##
O **VTEX Docs** é o site de documentação da VTEX - Powered by GitHub Page

## Tabela de conteúdo

* [Instalação](#instalação)
	* [Pré-Requisitos](#pré-requisitos)
	* [Processo de instalação](#processo-de-instalação)
* [Use localmente](#use-localmente)
* [Padrões](#padrões)

##Instalação (Windows)

###Pré-Requisitos
1. [Ruby](http://rubyinstaller.org/downloads/) `>= v1.9.3`
2. [Ruby Gems](http://rubygems.org/pages/download/) `>= v2.1.11`
3. [Ruby Development Kit](http://rubyinstaller.org/downloads/) `>= v1.9.3`
4. [Python](http://www.python.org/getit/) `>= v2.7.6`
5. [Jekyll](http://jekyllrb.com/) `>= v1.0.0`

###Processo de instalação
1. Faça o _download_ e instale o **Ruby** em [rubyinstaller.org](http://rubyinstaller.org/downloads/)

2. Faça o _download_ e instale o **RubyGems** em [rubygems.org](http://rubygems.org/pages/download/)

3. Faça o _download_ e instale o **Ruby DevKit** em [rubygems.org](http://rubyinstaller.org/downloads/)

	3.1 Adicione ao `$PATH` o diretório do RubyDevKit `"C:devkit\mingw\bin`	


4. Faça o _download_ e instale o **Python** em [python.org](http://www.python.org/getit/)

	4.1 Adicione ao `$PATH` o diretório

5. Digite no terminal
	```bash
		$ gem install jekyll
	```

##Use Localmente

Digite no terminal

```bash
	$ jekyll serve --baseurl=
```

 Acesse **localhost:4000** para visualizar o **preview** das suas publicações.
 Todas as alteraçõe que forem `commitadas` podem ser visualizadas em [vtex.lab.com.br](vtex.lab.com.br)

##Padrões

Para escrever um texto de **overview** (não é públicado pelo Scribe). Você deve adicionar o arquivo `index.md` no diretório `pt-br\api\[applicationName]\index.md`com o seguinte cabeçalho:
```
---
layout: api
title: Visão Geral
category: api-[appName]
tags: "overview"
---
```

**Exemplo de appName:** "portal", "oms" , "checkout" e etc.


### Copyright (C) 2014 [Vtex](http://www.vtex.com.br)