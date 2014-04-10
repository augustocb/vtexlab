---
layout: guide
title: Handlers de pedido
category: oms-guide
---

<div id='o-que-e-google-tag-manager' class='docs-block'>

OMS Order Handler
=====================

##Visão Geral


**_Handler_** de pedidos é uma forma de estender a plataforma **_Smart Checkout_** de forma que um pedido, ou melhor, os itens do pedido possam ser manipulados de forma individual e customizada
Neste documento, você vai entender como é  funcionamento do _pipeline_ de handler e qual deve ser o comportamento um _handler extension_ para tratar os itens de pedidos da forma que mais lhe for conveniente.
Este documento pressupõe que você tenha um conhecimento básico de como se integrar com a API do **_Smart Checkout_**, principalmente a API do **OMS**.

**NOTA:**
É importante notar que o _pipeline_ só sera executado após a aprovação do pagamento do pedido

### <i class="icon-file"></i> _Handler Pipeline_

O maior poder da extensibilidade de handler é quando ele está em um contexto de pipeline, ou seja, onde se tem mais de um handler para tratamento de itens. 
A plataforma irá chamar a executação de um handler na forma de um pipeline na ordem definida para cada handler no setup da loja no Smart Checkout.

### <i class="icon-cog"></i> Configuração

TODO

### <i class="icon-refresh"></i> Fluxo de execução do _Pipeline_

O início da execução do pipeline acontece no momento que o pedido chega no status _handling_. Neste momento será postado um objeto (que chamamos de _HandlerRequest_) para o primeiro _handler_ do _pipelline_. 

O fluxo de execução do _pipeline_ ocorre como se segue abaixo:


 1. **_Call Handler_**: O pipeline server irá postar o objeto _HandlerRequest_ no _endpoint_ do _handler_. O objeto contêm o número do pedido, endpoint do _pipeline_ para _callback_, _LockId_ e um objeto chamado de _packings_. O objeto "_packings_" é composto por uma lista de “caixas abertas” que contêm inicialmente os itens do pedido original.
 
 2. **Processamento do _Handler_**: Basicamente o _handler_ pode executar 4 diferentes ações ao receber o request:
    - Devolver o(s) pacote(s): O _handler_ verificar que nenhum item é de seu interesse, então ele devolve o pacote para o _pipeline_.
    - Fechar o(s) pacote(s): O _handler_ verificar que todo os items é de seu interesse, então ele fecha o pacote  e devolve-o ao pipeline. Fechar o pacote é simplesmente setar o status de um _Packing_ para _CLOSED_.
    - Modificar o(s) pacote(s): O _Handler_ pode modificar os itens que compõe um pacote, deixando-o aberto ou fechado.
    - Criar novo(s) pacote(s): O _Handler_ pode requisitar ao _pipeline_ que crie uma novo "Pacote Vazia". Com o pacote em mãos o handler pode executar todas as operações descritas anteriormente.

 3. **Confirmando a execução do _Handler_**:  O último passo do handler é confirmar o processamento do _HandlerRequest_. A confirmação é simplesmente a devolução das da lista de _packing (packings)_ para o _pipeline_ através de um _POST_ com o objeto  _HandlerResponse_ no endereço de _callback_ do pipeline. Além das packings o objeto _HandlerResponse_ deverá conter o _lockId_. Tanto as _packings_  quanto o _lockId_ são fornecdos junto ao _HandlerRequest_.

 4. **Passando para o proximo _Handler_**:  O passos acima se repetem para cada handller configurado no _pipeline_ desde que ainda restem “Pacotes abertos” (alguma _packing_ com status _OPENED_).

 5. **Reexecutando o _Pipeline_**:  Caso o último handler do _pipeline_ ainda devolva  algum “Pacote aberta” (alguma packing com status _OPENED_) a execução do _pipeline_ volta ao seu inicio. Esse ciclo se repete até que todos os “pacotes” estejam fechadas.

## Recebendo pedidos através de um Handler

O primeiro passo é implentar um serviço com interface _REST_. O _pipeline server_ enviará uma solicitação _POST_ para a URL configurada para a loja, conforme descrito na seção [_configuração_](#Configuração), com um objeto _HandlerRequest_ conforme exemplo a seguir: 

**Observação:**
 
Tanto a URL do handler (`http://api.anystore.com.br/orders/digital-handler`) quando a URL do pipeline server (`http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore`) são endereços fictícios.

#### Exemplo de Request
**Request URL:**
*POST* 

`http://api.anystore.com.br/orders/digital-handler` 

*Request POST Body*

{% highlight json %}
{
  "orderId": "v609192bdev-01",
  "plpEndpoint": "http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore",
  "packings": [
    {
      "sequence": 609192,
	  "state": "OPENED",
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "2389945",
          "productId": "9429046",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Celular Desbloqueado LG A290 Tri Chip Branco, Câmera 1.3 MP, MP3 Player, Rádio FM, Fone de Ouvido, Cartão de 2GB",
          "refId": "celular",
          "price": 19900,
          "listPrice": 19900,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "2389945",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 19900,
          "isGift": false
        }
      ],
      "date": "2014-01-27T18:19:21.3100023Z"
    }
  ],
  "lockId": "5e052d87-2742-4b6a-8ca7-47f2a9b527d7"
}
{% endhighlight %}

*Response: N/A*

Quando a requisição for bem sucedida, o código de resposta HTTP deverá ser **2xx (sucesso)**.

O segundo passo é  fazer o processamento do itens e executar uma das ações possíveis de acordo com o que foi descrito no fluxo de processamento do _pipeline_:

####  _Devolver o(s) pacote (s)_
Caso o handler verifique que nenhum item recebido deva ser manipulado por ele, é obrigatório que ele devolva os pacotes ao _pipeline server_. Para isto baste enviar um PUT para plpEndpoint com um objeto *packingList*.

- <b>`packingList`</b> Objeto similar os packingList do _HandlerRequest_ porém sem os campos *orderId* e *plpEndpoint*.

##### Exemplo de Request
######Request URL:
*PUT* `http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore` 

*Request PUT Body*

{% highlight json %}
{
  "packingList": [
    {
      "state": "CLOSED",
      "sequence": 609192,
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "2389945",
          "productId": "9429046",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Celular Desbloqueado LG A290 Tri Chip Branco, Câmera 1.3 MP, MP3 Player, Rádio FM, Fone de Ouvido, Cartão de 2GB",
          "refId": "celular",
          "price": 19900,
          "listPrice": 19900,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "2389945",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "defaultPicker": null,
          "handlerSequence": 0,
          "handling": false,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 19900,
          "isGift": false
        }
      ],
      "date": "2014-01-27T18:19:21.3100023Z"
    }
  ],
  "lockId": "5e052d87-2742-4b6a-8ca7-47f2a9b527d7"
}
{% endhighlight %}

*Response: N/A*

####  _Fechando o(s) pacote (s) aberto (s)_
Caso o handler verifique que todos os itens recebido é de seu interesse, ou seja deva ser processado por ele, a coisa a fazer após o processamento é fechar os pacotes. Para isto simplesmente atribua o valor **CLOSED** ao atributo _"state"_ de cada pacote e enviar uma solicitação de atualização junto ao _pipeline server_ como no exemplo abaixo.

##### Exemplo de Request
######Request URL:
*PUT* `http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore` 

*Request PUT Body*

{% highlight json %}
{
  "orderId": "v609192bdev-01",
  "plpEndpoint": "http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore",
  "packings": [
    {
      "sequence": 609192,
	  "state": "CLOSED",
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "2389945",
          "productId": "9429046",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Celular Desbloqueado LG A290 Tri Chip Branco, Câmera 1.3 MP, MP3 Player, Rádio FM, Fone de Ouvido, Cartão de 2GB",
          "refId": "celular",
          "price": 19900,
          "listPrice": 19900,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "2389945",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 19900,
          "isGift": false
        }
      ],
      "date": "2014-01-27T18:19:21.3100023Z"
    }
  ],
  "lockId": "5e052d87-2742-4b6a-8ca7-47f2a9b527d7"
}
{% endhighlight %}
*Response: N/A*


####  _Modificar o (s) pacote (s)_
Caso o handler verifique que algum dos itens (mas não todos) de um ou mais pacotes é de sua responsabilidade, será necessário solicitar ao _pipeline server_ a criação de um ou mais pacotes VAZIOS de acordo com o que o handler desejar fazer com os itens.

#####  _Solicitar criação de pacote (s)_
> O retorno desse serviço é uma simples lista com números que o handler deverá atribuir ao ->_sequence_ o qual identifica unicamente cada pacote.
> No exemplo abaixo será solicitado a criação de um pacote (quantity = 1).


#### Exemplo de Request
##### Request URL:

*POST* `http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore` 

*Request POST Body*

{% highlight json %}
{
    "lockId" : "5e052d87-2742-4b6a-8ca7-47f2a9b527d7",
    "quantity" : 1
}
{% endhighlight %}

*Response:*

{% highlight json %}
[{1057182}]
{% endhighlight %}

#####  _Adicionar o (s) pacote (s) ao objeto packings_
> Para cada pacote solicitado, criar um objeto conforme modelo abaixo. Setar o _sequece_  e o _state_ e os _items_.
{% highlight json %}
{
      "state": "OPENED",
      "sequence": 1057182,
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "1234567",
          "productId": "9876543",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Capa de celular",
          "refId": "Capa celular",
          "price": 1,
          "listPrice": 1,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "3389948",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "defaultPicker": null,
          "handlerSequence": 0,
          "handling": false,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 1,
          "isGift": true
        }
      ]
    }
{% endhighlight %}

#####  _Comitar as mudanças (s)_
> No exemplo será enviado ao _pipeline server_ um pacote aberto e outro fechado.

#### Exemplo de Request
##### Request URL:

*PUT* `http://oms.vtexcommerce.com.br/api/oms/pvt/handlers/handler-teste/v609192bdev-01?an=anystore` 

*Request PUT Body*

{% highlight json %}
{
  "packingList": [
    {
      "state": "CLOSED",
      "sequence": 609192,
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "2389945",
          "productId": "9429046",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Celular Desbloqueado LG A290 Tri Chip Branco, Câmera 1.3 MP, MP3 Player, Rádio FM, Fone de Ouvido, Cartão de 2GB",
          "refId": "celular",
          "price": 19900,
          "listPrice": 19900,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "2389945",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "defaultPicker": null,
          "handlerSequence": 0,
          "handling": false,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 19900,
          "isGift": false
        }
      ],
      "date": "2014-01-27T18:19:21.3100023Z"
    },
    {
      "state": "OPENED",
      "sequence": 1057182,
      "items": [
        {
          "logisticsInfo": {
            "itemIndex": 0,
            "selectedSla": "testegravarfrete",
            "lockTTL": "9d",
            "price": 6000,
            "deliveryWindow": null,
            "deliveryCompany": "Brasil",
            "shippingEstimate": "9d",
            "shippingEstimateDate": "2014-02-05T16:18:01.0459475Z",
            "slas": [
              {
                "id": "testegravarfrete",
                "name": "testegravarfrete",
                "shippingEstimate": "9d",
                "deliveryWindow": null,
                "price": 6000
              }
            ],
            "shipsTo": [
              "BRA"
            ],
            "sellingPrice": 6000,
            "deliveryIds": [
              {
                "courierId": "07C1C262-F2D2-46D3-819B-AB9C80731F0D",
                "dockId": "FE9702EE-57D1-48BD-9B27-F7686754CB3D",
                "quantity": 1,
                "warehouseId": "B9906D37-E815-47EB-A74B-580203206562",
                "courierName": "Brasil"
              }
            ]
          },
          "id": "1234567",
          "productId": "9876543",
          "lockId": "00-v609192bdev-01",
          "quantity": 1,
          "seller": "1",
          "name": "Capa de celular",
          "refId": "Capa celular",
          "price": 1,
          "listPrice": 1,
          "priceTags": [],
          "imageUrl": "/arquivos/ids/168582-55-55/1584_1.jpg",
          "components": [],
          "bundleItems": [],
          "params": [],
          "offerings": [],
          "sellerSku": "3389948",
          "priceValidUntil": null,
          "commission": 0,
          "tax": 0,
          "preSaleDate": null,
          "defaultPicker": null,
          "handlerSequence": 0,
          "handling": false,
          "additionalInfo": {
            "brandName": "Marca Três",
            "brandId": "2000001",
            "categoriesIds": "/56/",
            "productClusterId": "173,182,190",
            "commercialConditionId": "1"
          },
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "sellingPrice": 1,
          "isGift": true
        }
      ]
    }
  ],
  "lockId": "5e052d87-2742-4b6a-8ca7-47f2a9b527d7"
}
{% endhighlight %}

*Response: N/A*

  [1]: /images/handlerPipeline.png
</div>