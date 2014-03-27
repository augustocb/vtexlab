---
layout: logistics
title: warehouseitem
category: logistics-api
---

#warehouseitem


| Descrição     | Recurso     |
| ------------- |:------------|
| Consulta estoque| [POST /api/logistics/pvt/inventory/warehouseitems/getbalance](#consulta-estoque) |
| Atualiza estoque| [POST /api/logistics/pvt/inventory/warehouseitems/setbalance](#atualiza-estoque) |

###Consulta estoque

Obtém o balanço de estoque de uma coleção de itens

```
POST /api/logistics/pvt/inventory/warehouseitems/getbalance
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id    | string     | **Requerido**.Identificador único do item |
| groupItemId    | string     | Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos |
| quantity    | int     | **Requerido**.Quantidade total do item |
| price    | decimal     | **Requerido**.Preço do item |
| modal    | string     | Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado, |
| additionalHandlingTime    | TimeSpan     | Tempo para manipulação do item. É acrescido ao tempo final da entrega |
| dimension    | object     | **Requerido**.Dimensões do item |
| dimension.weight    | decimal     | Peso |
| dimension.height    | decimal     | Altura |
| dimension.width    | decimal     | Largura |
| dimension.length    | decimal     | Comprimento |
| dimension.cubicweight    | decimal     | Peso cúbico |
| dimension.maxSumDimension    | decimal     |  |
| kitItem    | array     | Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit |
| [kitItem].id    | string     | **Requerido**.Identificador único do item |
| [kitItem].groupItemId    | string     | Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos |
| [kitItem].quantity    | int     | **Requerido**.Quantidade total do item |
| [kitItem].price    | decimal     | **Requerido**.Preço do item |
| [kitItem].modal    | string     | Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado, |
| [kitItem].additionalHandlingTime    | TimeSpan     | Tempo para manipulação do item. É acrescido ao tempo final da entrega |
| [kitItem].dimension    | object     | **Requerido**.Dimensões do item |
| [kitItem].dimension.weight    | decimal     | Peso |
| [kitItem].dimension.height    | decimal     | Altura |
| [kitItem].dimension.width    | decimal     | Largura |
| [kitItem].dimension.length    | decimal     | Comprimento |
| [kitItem].dimension.cubicweight    | decimal     | Peso cúbico |
| [kitItem].dimension.maxSumDimension    | decimal     |  |
| [kitItem].kitItem    | array     | Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit |


####Exemplo
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




####Response

<pre class="headers">
Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
</pre>

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
---

###Atualiza estoque

Atualiza a quantidade em estoque de uma coleção de itens

```
POST /api/logistics/pvt/inventory/warehouseitems/setbalance
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| wareHouseId    | string     | **Requerido**.Identificador do estoque |
| itemId    | string     | **Requerido**.Identificador do item |
| quantity    | int     | **Requerido**.Quantidade a ser estocada |
| dateUtcOnBalanceSystem    | DateTimeOffset     | Data da última atualização |


####Exemplo
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




####Response

<pre class="headers">
Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
</pre>

```json
false
```
---

