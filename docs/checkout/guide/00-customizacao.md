---
layout: checkout
title: Customização
category: checkout-guide
---

#Customização

O checkout já vem com uma interface com o usuário básica, desenvolvida a partir do [Twitter Bootstrap 2.3.2](http://getbootstrap.com/2.3.2/). A customização dessa UI pode ser feita utilizando dois recursos:

## Inserção de conteúdo HTML no topo e no rodapé
Deve ser feita utilizando o Portal Admin Beta (_http://[DOMINIO]/admin/portal/_). Os templates disponíveis são:

**Páginas de Carrinho e Formulário de compra**

* checkout-header (área externa)
* checkout-footer (área externa)

**Página de Compra confirmada**

* orderplaced-header (área externa)
* orderplaced-footer (área externa)
* orderplaced-top (área interna)
* orderplaced-bottom (área interna)

## Alteração do arquivo _checkout-custom.css_
Deve ser feita utilizando o Portal Admin (_http://[DOMINIO]/admin/a/_). As regras de CSS criadas neste arquivo poderão sobrescrever regras de outros arquivos.
