---
layout: api
title: inventory
category: api-logistics
---

#inventory


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/logistics/pvt/inventory/itemsbalance](#consulta-estoque)  | Consulta estoque|
| [POST /api/logistics/pvt/inventory/warehouseitembalances](#atualiza-estoque)  | Atualiza estoque|

##Consulta estoque
Obtém o balanço de estoque de uma coleção de itens

####URL do Recurso:
```http
POST /api/logistics/pvt/inventory/itemsbalance HTTP/1.1
```

####Parâmetros de requisição:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único do item |
| groupItemId | string     | Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos |
| quantity (*requerido*)| int     | Quantidade total do item |
| price (*requerido*)| decimal     | Preço do item |
| modal | string     | Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado, |
| additionalHandlingTime | TimeSpan     | Tempo para manipulação do item. É acrescido ao tempo final da entrega |
| dimension (*requerido*)| object     | Dimensões do item |
| dimension.weight | decimal     | Peso |
| dimension.height | decimal     | Altura |
| dimension.width | decimal     | Largura |
| dimension.length | decimal     | Comprimento |
| dimension.cubicweight | decimal     | Peso cúbico |
| kitItem | array     | Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit |
| [kitItem].id (*requerido*)| string     | Identificador único do item |
| [kitItem].groupItemId | string     | Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos |
| [kitItem].quantity (*requerido*)| int     | Quantidade total do item |
| [kitItem].price (*requerido*)| decimal     | Preço do item |
| [kitItem].modal | string     | Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado, |
| [kitItem].additionalHandlingTime | TimeSpan     | Tempo para manipulação do item. É acrescido ao tempo final da entrega |
| [kitItem].dimension (*requerido*)| object     | Dimensões do item |
| [kitItem].dimension.weight | decimal     | Peso |
| [kitItem].dimension.height | decimal     | Altura |
| [kitItem].dimension.width | decimal     | Largura |
| [kitItem].dimension.length | decimal     | Comprimento |
| [kitItem].dimension.cubicweight | decimal     | Peso cúbico |
| [kitItem].kitItem | array     | Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit |
####Exemplo de requisição:
```json
[
  {
    "id": "1234",
    "dimension": {},
    "kitItem": []
  },
  {
    "id": "2852",
    "dimension": {},
    "kitItem": [
      {
        "id": "5555",
        "dimension": {},
        "kitItem": []
      },
      {
        "id": "5556",
        "dimension": {},
        "kitItem": []
      },
      {
        "id": "6951",
        "dimension": {},
        "kitItem": []
      }
    ]
  }
]
```
####Exemplo de retorno:
```json
[
  {
    "itemId": "1234",
    "salesChannel": "1"
  },
  {
    "itemId": "1234",
    "salesChannel": "2"
  },
  {
    "itemId": "1234",
    "quantity": 15,
    "salesChannel": "3"
  },
  {
    "itemId": "2852",
    "quantity": 9992,
    "salesChannel": "1"
  },
  {
    "itemId": "2852",
    "salesChannel": "2"
  },
  {
    "itemId": "2852",
    "salesChannel": "3"
  }
]
```
####Status codes: `200 OK` `400 BadRequest` `500 InternalServerError` 

---

##Atualiza estoque
Atualiza a quantidade em estoque de uma coleção de itens

####URL do Recurso:
```http
POST /api/logistics/pvt/inventory/warehouseitembalances HTTP/1.1
```

####Parâmetros de requisição:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| wareHouseId (*requerido*)| string     | Identificador do estoque |
| itemId (*requerido*)| string     | Identificador do item |
| quantity (*requerido*)| int     | Quantidade a ser estocada |
| dateUtcOnBalanceSystem | DateTimeOffset     | Data da última atualização |
####Exemplo de requisição:
```json
[
  {
    "wareHouseId": "1",
    "itemId": "12",
    "quantity": 100
  },
  {
    "wareHouseId": "1",
    "itemId": "45",
    "quantity": 8
  },
  {
    "wareHouseId": "2",
    "itemId": "45"
  }
]
```
####Exemplo de retorno:
```json
false
```
####Status codes: `200 OK` `400 BadRequest` `500 InternalServerError` 

---

