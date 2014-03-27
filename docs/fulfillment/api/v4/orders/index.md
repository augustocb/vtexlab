---
layout: fulfillment
title: orders
category: fulfillment-api
---

#orders


| Descrição     | Recurso     |
| ------------- |:------------|
| Recebe pedidos do marketplace.| [POST /api/fulfillment/pvt/orders](#recebe-pedidos-do-marketplace.) |
| Cancela pedido.| [POST /api/fulfillment/pvt/orders/{id}/cancel](#cancela-pedido.) |
| Autoriza o andamento do pedido.| [POST /api/fulfillment/pvt/orders/{orderId}/fulfill](#autoriza-o-andamento-do-pedido.) |

###Recebe pedidos do marketplace.

Permite ao serviço de Fulfillment de um seller receber pedidos do marketplace.

```
POST /api/fulfillment/pvt/orders
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| marketplaceOrderId    | string     | Número do pedido no marketplace |
| marketplaceServicesEndpoint    | string     | URL do servico que o marketplace disponibiliza ao seller |
| marketplacePaymentValue    | int     | Valor que o marketPlace informa que pagará ao seller `multiplicado por 100` |
| items    | array     | Lista de itens do pedido |
| [items].id    | string     | Sku do item |
| [items].quantity    | int     | Quantidade solicitada do item |
| [items].seller    | string     | Identificador do seller |
| [items].commission    | int     | Valor do commisionamento percentual `multiplicado por 100` |
| [items].freightCommission    | int     | Comissão original do frete `multiplicada por 100` |
| [items].price    | int     | Preço do item `multiplicado por 100` |
| [items].bundleItems    | array     | Itens de serviço selecionados |
| [[items].bundleItems].id    | string     | Sku do item |
| [[items].bundleItems].name    | string     | Nome do item |
| [[items].bundleItems].price    | int     | Preço do item `multiplicado por 100` |
| [items].itemAttachment    | object     | Anexos de um item (ex.: mensagem para presente). `campo a ser especificado` |
| [items].itemAttachment.content    | array     | Define uma chave com respectivo conteúdo para o itemAttachment |
| [items].priceTags    | array     | Modificadores do preço do item `campo a ser especificado` |
| [[items].priceTags].name    | string     |  |
| [[items].priceTags].value    | int     |  |
| [[items].priceTags].isPercentual    | bool     |  |
| [items].measurementUnit    | string     | Unidade de Medida do Sku. `campo a ser especificado` |
| [items].unitMultiplier    | decimal     | Fator de Multiplicação. `campo a ser especificado` |
| clientProfileData    | object     | Dados do cliente |
| clientProfileData.id    | string     |  |
| clientProfileData.email    | string     | E-mail |
| clientProfileData.firstName    | string     | Primeiro nome |
| clientProfileData.lastName    | string     | Sobrenome |
| clientProfileData.documentType    | string     | Tipo do Documento |
| clientProfileData.document    | string     | Número do documento |
| clientProfileData.phone    | string     | Número do telefone |
| clientProfileData.corporateName    | string     | Nome da empresa. `requerido` se cliente corporativo |
| clientProfileData.tradeName    | string     | Nome fantasia da empresa. `requerido` se cliente corporativo |
| clientProfileData.corporateDocument    | string     | Número do documento. `requerido` se cliente corporativo (ex.:CNPJ) |
| clientProfileData.stateInscription    | string     | Inscricão estadual (em caso de cliente corporativo) |
| clientProfileData.corporatePhone    | string     | Número do telefone da empresa |
| clientProfileData.isCorporate    | bool     | Indica se o cliente é corporativo |
| shippingData    | object     | Dados de entrega |
| shippingData.id    | string     |  |
| shippingData.address    | object     | Dados do endereço de entrega |
| shippingData.address.addressType    | string     | Tipo do endereço `["residential" ou "commercial"]` |
| shippingData.address.receiverName    | string     | Nome do responsável por receber os itens |
| shippingData.address.addressId    | string     | Identificador do endereço no profile do cliente |
| shippingData.address.postalCode    | string     | Código postal (ex.:CEP) |
| shippingData.address.city    | string     | Nome da cidade |
| shippingData.address.state    | string     | Sigla da unidade federativa ou estado |
| shippingData.address.country    | string     | Sigla do país |
| shippingData.address.street    | string     | Nome da rua |
| shippingData.address.number    | string     | Número do logradouro |
| shippingData.address.neighborhood    | string     | Nome do bairro |
| shippingData.address.complement    | string     | Complemento do endereço |
| shippingData.address.reference    | string     | Ponto de referência |
| shippingData.logisticsInfo    | array     | Informaçoes sobre a entrega |
| [shippingData.logisticsInfo].itemIndex    | int     | Índice do item no array de items. Cada item será referênciado nessa lista |
| [shippingData.logisticsInfo].selectedSla    | string     | Tipo de entrega escolhida |
| [shippingData.logisticsInfo].lockTTL    | string     | Tempo de espera da reserva no sistema de logistica. `d = days``bd = business days` |
| [shippingData.logisticsInfo].shippingEstimate    | string     | Estimativa de tempo para entrega `d = days``bd = business days` |
| [shippingData.logisticsInfo].price    | int     | Preço do frete `multiplicado por 100` |
| [shippingData.logisticsInfo].deliveryWindow    | object     | Dados de entrega agendada |
| [shippingData.logisticsInfo].deliveryWindow.startDateUtc    | DateTimeOffset     | Inicio da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.endDateUtc    | DateTimeOffset     | Final da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.price    | int     | Valor da taxa da entrega agendada `multiplicado por 100`. O valor total da entrega agendada é o valor base somado ao valor desse campo |
| openTextField    | object     | `campo a ser especificado` |
| openTextField.id    | string     |  |
| openTextField.value    | string     | Observacao sobre carrinho |


####Exemplo
```json
[
  {
    "marketplaceOrderId": "790511422",
    "marketplaceServicesEndpoint": "https://marketplace.vtexcommerce.com.br/api/oms/",
    "marketplacePaymentValue": 18766,
    "items": [
      {
        "id": "764",
        "quantity": 1,
        "seller": "1",
        "commission": 39,
        "freightCommission": 209,
        "price": 2990,
        "bundleItems": [
          {
            "id": "Garantia estendida",
            "name": "Garantida adicional de 1 ano",
            "price": 149
          }
        ],
        "itemAttachment": {
          "content": {}
        },
        "priceTags": []
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "joseantoniogs001@hotmail.com",
      "firstName": "Jose Antonio",
      "lastName": "Geraldo Dos Santos",
      "documentType": "cpf",
      "document": "12345678922",
      "phone": "21987651234",
      "corporateName": "Jose Antonio Geraldo Dos Santos",
      "tradeName": "Jose Antonio Geraldo Dos Santos",
      "corporateDocument": "03007331000141",
      "stateInscription": "isento",
      "corporatePhone": "6133021121",
      "isCorporate": true
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "residential",
        "receiverName": "Jose Antonio Geraldo Dos Santos",
        "addressId": "Local Entrega",
        "postalCode": "73252900",
        "city": "Brasilia",
        "state": "DF",
        "country": "BRA",
        "street": "Condominio RK Conjunto Antares quadra V ",
        "number": "24",
        "neighborhood": "Bairro",
        "complement": "sobradinho I distrito Federal",
        "reference": "perto da padaria"
      },
      "logisticsInfo": [
        {
          "itemIndex": 1,
          "selectedSla": "Normal",
          "lockTTL": "7d",
          "shippingEstimate": "7d",
          "price": 1251,
          "deliveryWindow": {
            "startDateUtc": "2015-12-28T10:18:04.8864988-02:00",
            "endDateUtc": "2015-04-18T03:49:17.8588675-03:00",
            "price": 1745
          }
        }
      ]
    }
  }
]
```


####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| orderId | string     | Número do pedido |
| followUpEmail | string     | E-mail para contado com a loja (seller) |
| items | array     | Lista de itens do pedido |
| [items].id | string     | Sku do item |
| [items].quantity | int     | Quantidade solicitada do item |
| [items].seller | string     | Identificador do seller |
| [items].commission | int     | Valor do commisionamento percentual multiplicado por 100 |
| [items].freightCommission | int     | Obtém/Atribui a comissão original do frete multiplicada por 100 |
| [items].price | int     | Preço do item multiplicado por 100 |
| [items].bundleItems | array     | Obtém/Atribui os itens de serviço selecionados |
| [[items].bundleItems].id | string     | Sku do item |
| [[items].bundleItems].name | string     | Nome do item |
| [[items].bundleItems].price | int     | Preço do item `multiplicado por 100` |
| [items].priceTags | array     | Modificadores do preço do item `campo a ser especificado` |
| [[items].priceTags].name | string     |  |
| [[items].priceTags].value | int     |  |
| [[items].priceTags].isPercentual | bool     |  |
| [items].measurementUnit | string     | Unidade de Medida do Sku. `campo a ser especificado` |
| [items].unitMultiplier | decimal     | Fator de Multiplicação. `campo a ser especificado` |
| clientProfileData | object     | Dados do cliente |
| clientProfileData.id | string     |  |
| clientProfileData.email | string     | E-mail |
| clientProfileData.firstName | string     | Primeiro nome |
| clientProfileData.lastName | string     | Sobrenome |
| clientProfileData.documentType | string     | Tipo do Documento |
| clientProfileData.document | string     | Número do documento |
| clientProfileData.phone | string     | Número do telefone |
| clientProfileData.corporateName | string     | Nome da empresa. `requerido` se cliente corporativo |
| clientProfileData.tradeName | string     | Nome fantasia da empresa. `requerido` se cliente corporativo |
| clientProfileData.corporateDocument | string     | Número do documento. `requerido` se cliente corporativo (ex.:CNPJ) |
| clientProfileData.stateInscription | string     | Inscricão estadual (em caso de cliente corporativo) |
| clientProfileData.corporatePhone | string     | Número do telefone da empresa |
| clientProfileData.isCorporate | bool     | Indica se o cliente é corporativo |
| shippingData | object     | Dados de entrega |
| shippingData.id | string     |  |
| shippingData.address | object     | Dados do endereço de entrega |
| shippingData.address.addressType | string     | Tipo do endereço `["residential" ou "commercial"]` |
| shippingData.address.receiverName | string     | Nome do responsável por receber os itens |
| shippingData.address.addressId | string     | Identificador do endereço no profile do cliente |
| shippingData.address.postalCode | string     | Código postal (ex.:CEP) |
| shippingData.address.city | string     | Nome da cidade |
| shippingData.address.state | string     | Sigla da unidade federativa ou estado |
| shippingData.address.country | string     | Sigla do país |
| shippingData.address.street | string     | Nome da rua |
| shippingData.address.number | string     | Número do logradouro |
| shippingData.address.neighborhood | string     | Nome do bairro |
| shippingData.address.complement | string     | Complemento do endereço |
| shippingData.address.reference | string     | Ponto de referência |
| shippingData.logisticsInfo | array     | Informaçoes sobre a entrega |
| [shippingData.logisticsInfo].itemIndex | int     | Índice do item no array de items. Cada item será referênciado nessa lista |
| [shippingData.logisticsInfo].selectedSla | string     | Tipo de entrega escolhida |
| [shippingData.logisticsInfo].lockTTL | string     | Tempo de espera da reserva no sistema de logistica. `d = days``bd = business days` |
| [shippingData.logisticsInfo].shippingEstimate | string     | Estimativa de tempo para entrega `d = days``bd = business days` |
| [shippingData.logisticsInfo].price | int     | Preço do frete `multiplicado por 100` |
| [shippingData.logisticsInfo].deliveryWindow | object     | Dados de entrega agendada |
| [shippingData.logisticsInfo].deliveryWindow.startDateUtc | DateTimeOffset     | Inicio da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.endDateUtc | DateTimeOffset     | Final da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.price | int     | Valor da taxa da entrega agendada `multiplicado por 100`. O valor total da entrega agendada é o valor base somado ao valor desse campo |


####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  {
    "marketplaceOrderId": "790511422",
    "orderId": "ML-790511422",
    "followUpEmail": "conversationtracker+658e24b721924c159df2052142530a9f@ct.vtex.com.br",
    "items": [
      {
        "id": "764",
        "quantity": 1,
        "seller": "1",
        "commission": 10,
        "freightCommission": 10,
        "price": 17990,
        "bundleItems": [
          {
            "id": "Garantia estendida",
            "name": "Garantida adicional de 1 ano",
            "price": 149
          }
        ],
        "priceTags": []
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "conversationtracker+519a47ee8b0448ef84bbe508a1e0454e@ct.vtex.com.br",
      "firstName": "Jose Antonio",
      "lastName": "Geraldo Dos Santos",
      "documentType": "cpf",
      "document": "12345678912",
      "phone": "6133021121",
      "corporateName": "Jose Antonio Geraldo Dos Santos",
      "tradeName": "Jose Antonio Geraldo Dos Santos",
      "corporateDocument": "03007331000141",
      "stateInscription": "isento",
      "corporatePhone": "6133021121",
      "isCorporate": true
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "residential",
        "receiverName": "Jose Antonio Geraldo Dos Santos",
        "addressId": "Local Entrega",
        "postalCode": "73252900",
        "city": "Brasilia",
        "state": "DF",
        "country": "BRA",
        "street": "Condominio RK Conjunto Antares quadra V ",
        "number": "24",
        "neighborhood": "Bairro",
        "complement": "sobradinho I distrito Federal",
        "reference": "perto da padaria"
      },
      "logisticsInfo": [
        {
          "itemIndex": 1,
          "selectedSla": "Normal",
          "lockTTL": "6d",
          "shippingEstimate": "4d",
          "price": 1251,
          "deliveryWindow": {
            "startDateUtc": "2015-12-28T10:18:04.8864988-02:00",
            "endDateUtc": "2015-04-18T03:49:17.8588675-03:00",
            "price": 1745
          }
        }
      ]
    }
  }
]
```
---

###Cancela pedido.

Permite o cancelamento de um pedido enviado ao serviço de Fulfillment.

```
POST /api/fulfillment/pvt/orders/{id}/cancel
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| marketplaceOrderId    | string     | Número do pedido no marketPlace |


####Exemplo
```json
{
  "marketplaceOrderId": "406860954915-01"
}
```


####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| orderId | string     | Número do pedido |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| receipt | string     | Token de cancelamento do pedido |
| date | date     | Data de cancelamento do pedido |
| isCancelled | bool     | Flag que indica se o pedido foi completamente cancelado |


####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
{
  "orderId": "wlm-406860954915-01",
  "marketplaceOrderId": "406860954915-01",
  "receipt": "71ab35bc-53c9-4c03-a84e-0229e154c9da",
  "date": "2014-01-29T14:21:24.5419998Z",
  "isCancelled": true
}
```
---

###Autoriza o andamento do pedido.

Permite que o Marketplace autorize o serviço de Fulfillment que o pedido pode prosseguir. Esta
notificação indica que o Marketplace está pronto para cumprir com os compromissos
comerciais relacionados ao pedido.

```
POST /api/fulfillment/pvt/orders/{orderId}/fulfill
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| marketplaceOrderId    | string     | Número do pedido no marketPlace |


####Exemplo
```json
{
  "marketplaceOrderId": "S32-93092746789"
}
```


####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| orderId | string     | Número do pedido |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| receipt | string     | Token de autorização do pedido |
| date | date     | Data de autorização do pedido |


####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
{
  "orderId": "268878329",
  "marketplaceOrderId": "S32-93092746789",
  "receipt": "D65033AC44F247FBA44A6E62980FA649",
  "date": "2012-12-07T11:27:45"
}
```
---

