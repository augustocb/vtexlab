---
layout: docs
title: Warehouse item
category: cms-guide
application: CMS
docType: api
---

<div class="api-container">


<div class="api-block">

<div class="api-description">

<h1 class="doc-title">{{ page.title }}</h1>     

</div>

</div>

<div class="api-block">

<div class="api-description">

## Consulta quantidade em estoque
{: #consulta-quantidade-em-estoque .slug-text }

Obtém o balanço de estoque de uma coleção de itens

POST /api/logistics/pvt/inventory/warehouseitems/getbalance
{: .api-route }

### Parâmetros

<table class="doc-api-table">
  <thead>
    <tr>
      <th class="text-right">Nome</th>
      <th class="text-left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">id</strong>
      </td>
      <td>
        <strong class="api-table-type">string</strong>
        <span class="api-table-description">Requerido. Identificador único do item</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">groupItemId</strong>
      </td>
      <td>
        <strong class="api-table-type">string</strong>
        <span class="api-table-description">Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">quantity</strong>
      </td>
      <td>
        <strong class="api-table-type">int</strong>
        <span class="api-table-description">Requerido. Quantidade total do item</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">price</strong>
      </td>
      <td>
        <strong class="api-table-type">decimal</strong>
        <span class="api-table-description">Requerido. Preço do item</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">modal</strong>
      </td>
      <td>
        <strong class="api-table-type">DateTimeOffset</strong>
        <span class="api-table-description">Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado.</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">additionalHandlingTime</strong>
      </td>
      <td>
        <strong class="api-table-type">TimeSpam</strong>
        <span class="api-table-description">Tempo para manipulação do item. É acrescido ao tempo final da entrega</span>
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong class="api-table-title">kitItem</strong>
      </td>
      <td>
        <strong class="api-table-type">array</strong>
        <span class="api-table-description">Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit</span>
      </td>
    </tr>
    <tr class="doc-api-table-child">
      <td colspan="2">
        
        <div class="arrow-up"></div>
        
        <table class="doc-api-table">
            <tr>
              <td class="text-right">
                <strong class="api-table-title">id</strong>
              </td>
              <td>
                <strong class="api-table-type">string</strong>
                <span class="api-table-description">Requerido. Identificador único do item</span>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <strong class="api-table-title">groupItemId</strong>
              </td>
              <td>
                <strong class="api-table-type">string</strong>
                <span class="api-table-description">Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos</span>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <strong class="api-table-title">quantity</strong>
              </td>
              <td>
                <strong class="api-table-type">int</strong>
                <span class="api-table-description">Requerido. Quantidade total do item</span>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <strong class="api-table-title">price</strong>
              </td>
              <td>
                <strong class="api-table-type">decimal</strong>
                <span class="api-table-description">Requerido. Preço do item</span>
              </td>
            </tr>
            <tr class="doc-api-table-child">
              <td colspan="2">

                <div class="arrow-up"></div>

                <table class="doc-api-table">
                    <tr>
                      <td class="text-right">
                        <strong class="api-table-title">id</strong>
                      </td>
                      <td>
                        <strong class="api-table-type">string</strong>
                        <span class="api-table-description">Requerido. Identificador único do item</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong class="api-table-title">groupItemId</strong>
                      </td>
                      <td>
                        <strong class="api-table-type">string</strong>
                        <span class="api-table-description">Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong class="api-table-title">quantity</strong>
                      </td>
                      <td>
                        <strong class="api-table-type">int</strong>
                        <span class="api-table-description">Requerido. Quantidade total do item</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong class="api-table-title">price</strong>
                      </td>
                      <td>
                        <strong class="api-table-type">decimal</strong>
                        <span class="api-table-description">Requerido. Preço do item</span>
                      </td>
                    </tr>
                    <tr class="doc-api-table-child">
                      <td colspan="2">

                        <div class="arrow-up"></div>

                        <table class="doc-api-table">
                            <tr>
                              <td class="text-right">
                                <strong class="api-table-title">id</strong>
                              </td>
                              <td>
                                <strong class="api-table-type">string</strong>
                                <span class="api-table-description">Requerido. Identificador único do item</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-right">
                                <strong class="api-table-title">groupItemId</strong>
                              </td>
                              <td>
                                <strong class="api-table-type">string</strong>
                                <span class="api-table-description">Identificador de agrupamento do item. Itens com o mesmo groupItemId devem ser entregues juntos</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-right">
                                <strong class="api-table-title">quantity</strong>
                              </td>
                              <td>
                                <strong class="api-table-type">int</strong>
                                <span class="api-table-description">Requerido. Quantidade total do item</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-right">
                                <strong class="api-table-title">price</strong>
                              </td>
                              <td>
                                <strong class="api-table-type">decimal</strong>
                                <span class="api-table-description">Requerido. Preço do item</span>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-right">
                                <strong class="api-table-title">modal</strong>
                              </td>
                              <td>
                                <strong class="api-table-type">DateTimeOffset</strong>
                                <span class="api-table-description">Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado.</span>
                              </td>
                            </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong class="api-table-title">modal</strong>
                      </td>
                      <td>
                        <strong class="api-table-type">DateTimeOffset</strong>
                        <span class="api-table-description">Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado.</span>
                      </td>
                    </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <strong class="api-table-title">modal</strong>
              </td>
              <td>
                <strong class="api-table-type">DateTimeOffset</strong>
                <span class="api-table-description">Categorização de entrega em que se enquadra o item. Pode ser Líquido, Químico ou Refrigerado.</span>
              </td>
            </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>


<!-- | Nome           | Tipo         |
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
| **[kitItem]**.kitItem  <br> *Coleção de outros itens que compõem este item. Ocorre nos casos em que o item é um kit* | array   | -->

</div>

<div class="api-example">

Exemple request
{: .resource-title }

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

Exemplo Response
{: .resource-title }

Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
{: .resources-status }

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
{: .resource-detail }

Exemplo
{: .resource-title }

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

Response
{: .resource-title }

Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
{: .resources-status }

{% highlight json %}
true
{% endhighlight %}    

</div>

</div>

</div>