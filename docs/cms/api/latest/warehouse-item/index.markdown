---
layout: docs
title: Warehouse item
category: cms-guide
---

<div class="api-container">


<div class="api-block">

<div class="api-description">

<h1 class="doc-title">{{ page.title }}</h1>

| Descrição     | Recurso     |
| ------------- |:------------|
| Consulta quantidade em estoque| [POST /api/logistics/pvt/inventory/warehouseitems/getbalance](#consulta-quantidade-em-estoque) |
| Atualiza quantidade em estoque| [POST /api/logistics/pvt/inventory/warehouseitems/setbalance](#atualiza-quantidade-em-estoque) |        

</div>

</div>

<div class="api-block">

<div class="api-description">

## Consulta quantidade em estoque

Obtém o balanço de estoque de uma coleção de itens

### Parâmetros

| Nome           | Tipo         |
| -------------:  |-------------- |
| id <br> *Identificador único do item*    | string     |
| groupItemId <br> *Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos*   | string     |
| quantity <br> *Quantidade total do item*   | int     | 
| price <br> *Preço do item*   | decimal      |
| modal   <br> *Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado* | string    |
| additionalHandlingTime  <br>  *Tempo para manipulação do item. É acrescido ao tempo final da entrega*  | TimeSpan     |
| dimension <br> *Dimensões do item*   | object      |
| dimension.weight <br> *Peso*   | decimal      |
| dimension.height  <br> *Altura* | decimal      |
| dimension.width <br> *Largura*   | decimal      |
| dimension.length  <br> *Comprimento*  | decimal      |
| dimension.maxSumDimension    | decimal    |
| kitItem  <br> *Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit*  | array    |
| **[kitItem]**.id  <br> *Identificador único do item*  | string      |
| **[kitItem]**.groupItemId  <br> *Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos*   | string     |
| **[kitItem]**.quantity  <br> *Quantidade total do item*  | int      |
| **[kitItem]**.price <br> *Preço do item*   | decimal      |
| **[kitItem]**.modal <br> *Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado*   | string      |
| **[kitItem]**.additionalHandlingTime <br> *Tempo para manipulação do item. É acrescido ao tempo final da entrega*   | TimeSpan      |
| **[kitItem]**.dimension  <br> *Dimensões do item* | object      |
| **[kitItem]**.dimension.weight <br> *Peso*  | decimal  |
| **[kitItem]**.dimension.height <br> *Altura*   | decimal      |
| **[kitItem]**.dimension.width   <br> *Largura* | decimal      |
| **[kitItem]**.dimension.length <br> *Comprimento*   | decimal |
| **[kitItem]**.dimension.maxSumDimension   | decimal  |
| **[kitItem]**.kitItem  <br> *Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit* | array   |

</div>

<div class="api-example">

POST /api/logistics/pvt/inventory/warehouseitems/getbalance


#### Exemplo request

{% highlight json %}
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
{% endhighlight %}




#### Exemplo Response

    Status: `200 OK` `400 BadRequest` `500 InternalServerError` 

{% highlight json %}
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
{% endhighlight %}  

</div>

</div>

<div class="api-block">

<div class="api-description">

## Atualiza quantidade em estoque

Atualiza a quantidade em estoque de uma coleção de itens

### Parâmetros

| Nome           | Tipo               |
| -------------:  |-------------- |
| wareHouseId  <br> *Identificador do estoque*  | string     |
| itemId <br> *Identificador do item*   | string      |
| quantity  <br> *Quantidade a ser estocada*  | int      |
| dateUtcOnBalanceSystem  <br> *Data da última atualização*   | DateTimeOffset      |    

</div>

<div class="api-example">

POST /api/logistics/pvt/inventory/warehouseitems/setbalance

#### Exemplo
{% highlight json %}
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
{% endhighlight %}

#### Response

    Status: `200 OK` `400 BadRequest` `500 InternalServerError` 

{% highlight json %}
true
{% endhighlight %}    

</div>

</div>

</div>