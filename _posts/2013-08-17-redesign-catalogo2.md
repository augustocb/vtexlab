---
layout: post
type: release-note
title: 'O catalogo esta com cara nova. Take a look'
author: 'leandrooriente'
description: 'Lorem markdownum lapillo, accipitrem detulit omnia oravit effreno est utar
comaeque pacis est insania!'
tags: css
---

## Checkout
- Remoção da validação do telefone na API quando a compra é fechada com pessoa jurídica
- Correção de pequenos bugs na exibição de preços na API e dos dados de frete
- Correção da data de atualização do pedido e do carrinho que estava sempre igual a data de criação
- API envia uma forma de pagamento padrão selecionada na criação do carrinho ou carregamento do perfil, evitando chamadas desnecessárias da tela ao servidor
- Reestruturação das chamadas para obter as formas de pagamento e parcelamento, sendo chamadas apenas quando há mudança de preço no carrinho e não a cada request. Isso provoca um pequeno ganho de performance no carrinho
- Uso de cache para as formas de pagamento
- Integração total do Checkout com a parte de métricas do catálogo.
- Correção de bugs nos valores dos totalizadores que estavam provocando problemas nas integrações
- Atualização do client do gateway (1.1.1) e logger (6.13.4)


## Fulfillment
- Remoção da validação do telefone na API quando a compra é fechada com pessoa jurídica
- Correção de pequenos bugs na exibição de preços na API e dos dados de frete
- Correção da data de atualização do pedido que estava sempre igual a data de criação
- Correção de bugs nos valores dos totalizadores que estavam provocando problemas nas integrações
- Atualização do client do LM (4.0.1) e logger (6.13.4)