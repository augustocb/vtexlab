---
layout: api
title: orderforms
category: api-fulfillment
---

#orderforms


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/fulfillment/pvt/orderForms/simulation](#permite-simular-um-carrinho-de-produtos)  | Permite simular um carrinho de produtos|

##Permite simular um carrinho de produtos
Permite simular um carrinho de produtos afim de obter informações como preços, slas de
entrega, balanço de estoque e países onde os itens estão diponíveis.

####URL do Recurso:
```http
POST /api/fulfillment/pvt/orderForms/simulation HTTP/1.1
```

####Parâmetros de requisição:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| items | array     | Itens a serem simulados |
| [items].id | string     | Sku do item |
| [items].quantity | int     | Quantidade solicitada do item |
| [items].seller | string     | Identificador do seller |
| postalCode | string     | Código postal (xx.: CEP, ZipCode) |
| country | string     | Sigla do país. |
| selectedSla | string     | Forma da entrega |
####Exemplo de requisição:
```json
{
  "items": [
    {
      "id": "30433",
      "quantity": 1,
      "seller": "1"
    }
  ],
  "postalCode": "22220-070",
  "country": "BRA",
  "selectedSla": "Entrega Agendada"
}
```
####Parâmetros de retorno:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| items | array     | Lista de itens com os dados da simulação |
| [items].id | string     | Sku do item |
| [items].requestIndex | int     | Índice do item no request da simulação |
| [items].quantity | int     | Quantidade solicitada do item |
| [items].seller | string     | Identificador do seller |
| [items].priceValidUntil | date     | Validade do preco |
| [items].price | int     | Preço do item `multiplicado por 100` |
| [items].listPrice | int     | Preço original do item `multiplicado por 100` |
| [items].offerings | array     | Ofertas que estão disponíveis para o item |
| [[items].offerings].type | string     | Tipo referente à oferta |
| [[items].offerings].id | string     | Identificador da oferta |
| [[items].offerings].name | string     | Nome da oferta |
| [[items].offerings].price | int     | Valor da oferta `multiplicado por 100` |
| [items].priceTags | array     | Modificadores de preço `campo a ser especificado` |
| [[items].priceTags].name | string     |  |
| [[items].priceTags].value | int     |  |
| [[items].priceTags].isPercentual | bool     |  |
| [items].measurementUnit | string     | Unidade de Medida do Sku |
| [items].unitMultiplier | decimal     | Fator de Multiplicação |
| postalCode | string     | Código postal (ex.: CEP, ZipCode) |
| country | string     | Sigla do país |
| logisticsInfo | array     | Dadas de Entrega |
| [logisticsInfo].itemIndex | int     | Índice do item no array de itens |
| [logisticsInfo].stockBalance | int     | Saldo do estoque |
| [logisticsInfo].quantity | int     | Quantidade do item |
| [logisticsInfo].shipsTo | array     | Lista de siglas dos países aos quais a entrega é feita |
| [logisticsInfo].slas | array     | Formas de entrega |
| [[logisticsInfo].slas].id | string     | Identificador da forma de entrega |
| [[logisticsInfo].slas].name | string     | Nome da forma de entrega |
| [[logisticsInfo].slas].deliveryIds | array     | Dados adicionais de entrega |
| [[[logisticsInfo].slas].deliveryIds].courierId | string     | Identificador da transportadora |
| [[[logisticsInfo].slas].deliveryIds].warehouseId | string     | Identidicador do centro de distribuição |
| [[[logisticsInfo].slas].deliveryIds].dockId | string     | Identificador da doca |
| [[[logisticsInfo].slas].deliveryIds].courierName | string     | Nome da transportadora |
| [[[logisticsInfo].slas].deliveryIds].quantity | int     | Quantidade de itens que saem dessa doca |
| [[logisticsInfo].slas].shippingEstimate | string     | Estimativa de tempo para entrega. `d = days``bd = business days` |
| [[logisticsInfo].slas].availableDeliveryWindows | array     | Janelas de entrega disponíveis |
| [[[logisticsInfo].slas].availableDeliveryWindows].startDateUtc | DateTimeOffset     | Inicio da janela de entrega |
| [[[logisticsInfo].slas].availableDeliveryWindows].endDateUtc | DateTimeOffset     | Final da janela de entrega |
| [[[logisticsInfo].slas].availableDeliveryWindows].price | int     | Valor da taxa da entrega agendada `multiplicado por 100`. O valor total da entrega agendada é o valor base somado ao valor desse campo |
| [[logisticsInfo].slas].price | int     | Valor sugerido para entrega `multiplicado por 100` |
####Exemplo de retorno:
```json
{
  "items": [
    {
      "id": "30433",
      "quantity": 1,
      "seller": "1",
      "priceValidUntil": "2051-05-31T10:30:00",
      "price": 24800,
      "listPrice": 37900,
      "offerings": [
        {
          "type": "desconto",
          "id": "1213",
          "name": "30% off",
          "price": 1000
        }
      ],
      "priceTags": [],
      "measurementUnit": "un",
      "unitMultiplier": 1.0
    }
  ],
  "postalCode": "22220-070",
  "country": "BRA",
  "logisticsInfo": [
    {
      "stockBalance": 4695,
      "quantity": 1,
      "shipsTo": [
        "BRA",
        "COL"
      ],
      "slas": [
        {
          "id": "Expressa",
          "name": "Expressa",
          "deliveryIds": [
            {
              "courierId": "55",
              "warehouseId": "1_1",
              "dockId": "1_1_1",
              "courierName": "Sedex",
              "quantity": 1
            }
          ],
          "shippingEstimate": "4d",
          "availableDeliveryWindows": [
            {
              "startDateUtc": "2014-08-05T13:30:00-03:00",
              "endDateUtc": "2014-04-22T15:30:00-03:00",
              "price": 2500
            },
            {
              "startDateUtc": "2014-08-05T15:30:00-03:00",
              "endDateUtc": "2014-04-22T17:00:00-03:00",
              "price": 3000
            },
            {
              "startDateUtc": "2014-08-05T17:00:00-03:00",
              "endDateUtc": "2014-04-22T19:00:00-03:00",
              "price": 3500
            }
          ],
          "price": 4950
        },
        {
          "id": "normal",
          "name": "normal",
          "deliveryIds": [
            {
              "courierId": "1a574b3",
              "warehouseId": "1_1",
              "dockId": "1_1_1",
              "courierName": "Mundo",
              "quantity": 1
            }
          ],
          "shippingEstimate": "4d",
          "availableDeliveryWindows": [],
          "price": 279
        }
      ]
    }
  ]
}
```
####Status codes: `200 OK` 

---

