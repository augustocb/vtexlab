---
layout: api
title: orders
category: api-fulfillment
---

#orders


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/fulfillment/pvt/orders](#recebe-pedidos-do-marketplace.)  | Recebe pedidos do marketplace.|
| [POST /api/fulfillment/pvt/orders/{id}/cancel](#cancela-pedido.)  | Cancela pedido.|
| [POST /api/fulfillment/pvt/orders/{orderId}/fulfill](#autoriza-o-andamento-do-pedido.)  | Autoriza o andamento do pedido.|

##Recebe pedidos do marketplace.
Permite ao serviço de Fulfillment de um seller receber pedidos do marketplace.

####URL do Recurso:
```http
POST /api/fulfillment/pvt/orders HTTP/1.1
```

####Parâmetros de requisição:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| marketplaceServicesEndpoint | string     | URL do servico que o marketplace disponibiliza ao seller |
| marketplacePaymentValue | int     | Valor que o marketPlace informa que pagará ao seller `multiplicado por 100` |
| items | array     | Lista de itens do pedido |
| [items].id | string     | Sku do item |
| [items].quantity | int     | Quantidade solicitada do item |
| [items].seller | string     | Identificador do seller |
| [items].lockId | string     | Número de reserva do item |
| [items].commission | int     | Valor do commisionamento percentual `multiplicado por 100` |
| [items].freightCommission | int     | Comissão original do frete `multiplicada por 100` |
| [items].price | int     | Preço do item `multiplicado por 100` |
| [items].bundleItems | array     | Itens de serviço selecionados |
| [[items].bundleItems].id | string     | Sku do item |
| [[items].bundleItems].name | string     | Nome do item |
| [[items].bundleItems].price | int     | Preço do item `multiplicado por 100` |
| [items].itemAttachment | object     | Anexos de um item (ex.: mensagem para presente) |
| [items].itemAttachment.content | array     | Define uma chave com respectivo conteúdo para o itemAttachment |
| [items].priceTags | array     | PriceTags do item |
| [[items].priceTags].name | string     |  |
| [[items].priceTags].value | int     |  |
| [[items].priceTags].isPercentual | bool     |  |
| [items].measurementUnit | string     | Unidade de Medida do Sku |
| [items].unitMultiplier | decimal     | Fator de Multiplicação |
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
| shippingData.address.addressType | string     | Tipo do endereço `0 = comercial``1 = residencial` |
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
| [shippingData.logisticsInfo].courierName | string     | Nome da Transportadora |
| [shippingData.logisticsInfo].lockTTL | string     | Tempo de espera da reserva no sistema de logistica. `d = days``bd = business days` |
| [shippingData.logisticsInfo].shippingEstimate | string     | Estimativa de tempo para entrega `d = days``bd = business days` |
| [shippingData.logisticsInfo].price | int     | Preço do frete `multiplicado por 100` |
| [shippingData.logisticsInfo].deliveryWindow | object     | Dados de entrega agendada |
| [shippingData.logisticsInfo].deliveryWindow.startDateUtc | DateTimeOffset     | Inicio da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.endDateUtc | DateTimeOffset     | Final da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.price | int     | Valor da taxa da entrega agendada `multiplicado por 100`. O valor total da entrega agendada é o valor base somado ao valor desse campo |
| properties | array     | `Ignorar: atributo obsoleto` |
| [properties].name | string     |  |
| [properties].value | Object     |  |
####Exemplo de requisição:
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
        "complement": "sobradinho I distrito Federal"
      },
      "logisticsInfo": [
        {
          "selectedSla": "Normal",
          "lockTTL": "7d",
          "shippingEstimate": "7d",
          "price": 1251
        }
      ]
    },
    "properties": []
  }
]
```
####Parâmetros de retorno:
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
| [items].priceTags | array     | PriceTags do item |
| [[items].priceTags].name | string     |  |
| [[items].priceTags].value | int     |  |
| [[items].priceTags].isPercentual | bool     |  |
| [items].measurementUnit | string     | Unidade de Medida do Sku |
| [items].unitMultiplier | decimal     | Fator de Multiplicação |
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
| shippingData.address.addressType | string     | Tipo do endereço `0 = comercial``1 = residencial` |
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
| [shippingData.logisticsInfo].courierName | string     | Nome da Transportadora |
| [shippingData.logisticsInfo].lockTTL | string     | Tempo de espera da reserva no sistema de logistica. `d = days``bd = business days` |
| [shippingData.logisticsInfo].shippingEstimate | string     | Estimativa de tempo para entrega `d = days``bd = business days` |
| [shippingData.logisticsInfo].price | int     | Preço do frete `multiplicado por 100` |
| [shippingData.logisticsInfo].deliveryWindow | object     | Dados de entrega agendada |
| [shippingData.logisticsInfo].deliveryWindow.startDateUtc | DateTimeOffset     | Inicio da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.endDateUtc | DateTimeOffset     | Final da janela de entrega |
| [shippingData.logisticsInfo].deliveryWindow.price | int     | Valor da taxa da entrega agendada `multiplicado por 100`. O valor total da entrega agendada é o valor base somado ao valor desse campo |
####Exemplo de retorno:
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
        "price": 17990,
        "bundleItems": [
          {
            "id": "Garantia estendida",
            "name": "Garantida adicional de 1 ano",
            "price": 149
          }
        ],
        "priceTags": [],
        "measurementUnit": "un",
        "unitMultiplier": 1.0
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "conversationtracker+519a47ee8b0448ef84bbe508a1e0454e@ct.vtex.com.br",
      "firstName": "Jose Antonio",
      "lastName": "Geraldo Dos Santos",
      "document": "",
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
        "complement": "sobradinho I distrito Federal"
      },
      "logisticsInfo": [
        {
          "selectedSla": "Normal",
          "courierName": "Correios",
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
####Status codes: `200 OK` 

---

##Cancela pedido.
Permite o cancelamento de um pedido enviado ao serviço de Fulfillment.

####URL do Recurso:
```http
POST /api/fulfillment/pvt/orders/{id}/cancel HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "marketplaceOrderId": "406860954915-01"
}
```
####Parâmetros de retorno:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| orderId | string     | Número do pedido |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| receipt | string     | Token de cancelamento do pedido |
| date | date     | Data de cancelamento do pedido |
| isCancelled | bool     | Flag que indica se o pedido foi completamente cancelado |
####Exemplo de retorno:
```json
{
  "orderId": "wlm-406860954915-01",
  "marketplaceOrderId": "406860954915-01",
  "receipt": "71ab35bc-53c9-4c03-a84e-0229e154c9da",
  "date": "2014-01-29T14:21:24.5419998Z",
  "isCancelled": true
}
```
####Status codes: `200 OK` 

---

##Autoriza o andamento do pedido.
Permite que o Marketplace autorize o serviço de Fulfillment que o pedido pode prosseguir. Esta
notificação indica que o Marketplace está pronto para cumprir com os compromissos
comerciais relacionados ao pedido.

####URL do Recurso:
```http
POST /api/fulfillment/pvt/orders/{orderId}/fulfill HTTP/1.1
```

####Parâmetros de retorno:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| orderId | string     | Número do pedido |
| marketplaceOrderId | string     | Número do pedido no marketplace |
| receipt | string     | Token de autorização do pedido |
| date | date     | Data de autorização do pedido |
####Exemplo de retorno:
```json
{
  "orderId": "268878329",
  "marketplaceOrderId": "S32-93092746789",
  "receipt": "D65033AC44F247FBA44A6E62980FA649",
  "date": "2012-12-07T11:27:45"
}
```
####Status codes: `200 OK` 

---

