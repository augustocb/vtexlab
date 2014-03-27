---
layout: oms
title: Visão Geral
category: oms-api
tags: "overview"
---

###OMS REST API

  

Este documento descreve os serviços para obter informações sobre pedidos realizados no Smart Checkout e/ou Order Hub (Fulfillment) da plataforma de _Marketplace_ VTEX.

A API é baseada em solicitações HTTP, onde é possível fazer consulta de pedidos, cancelar pedidos, enviar dados de nota fiscal e outras operação detalhas no decorrer do documento. O retorno das chamadas será no formato _JSON_ (Notação de objetos JavaScript).

### A quem se destina este documento?

Este documento destina-se a desenvolvedores de softwares de integração ou aplicativos de dispositivos móveis que desejam usar dados de pedidos realizados na plataforma de Marketplace da VTEX. 

### Login, Autorização e Permissões

Para qualquer operação de um serviço disponível nesta API, é necessário ter um Login (usuário cadastrado) no sitema VTEX ID. Ele representa uma identidade que é o núcleo das funções da API. Para obter um login, consulte o seu representante na VTEX.

- `VTEX ID`: É o serviço de Login da VTEX. Para maiores informação consulte a documentação  do VTEX ID. 
- `Autorização`: Para acessar os serviços disponíveis nesta API, garanta que a store (loja) que o usuário está sob "jurisdicão" tenha a Licença do OMS. Para mais informações sobre licenças e permissões, consulte a documentação do sistema VTEX License Manager. 
- `Permissões`: A API do OMS implementa conjunto de permissões que controlam o acesso de cada serviço. Garanta que o usúario usado nas requisições tenha a devida permissão para requisitar o serviço. Na documentação de cada serviço, está descrita a permissão que ele implementa. 
Access Token: Na maioria das vezes, que usa essa API é uma outra app, e neste caso o login será composto por uma chave e um token. Ambos são strings geradas no processo de criação o login/autorização. Elas representam as permissões concedas no contexto de uma store (loja). Toda requisição feita à API do OMS exigirá que o token seja passado no cabeçalho http com as seguintes chaves: _X-VTEX-API-AppKey_ e _X-VTEX-API-AppToken_.
