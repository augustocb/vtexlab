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

## Consulta quantidade em estoque2
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

POST /api/logistics/pvt/inventory/warehouseitems/setbalance
{: .api-route }

### Parâmetros

| Nome           | Tipo               |
| -------------:  |-------------- |
| wareHouseId  <br> *Identificador do estoque*  | string     |
| itemId <br> *Identificador do item*   | string      |
| quantity  <br> *Quantidade a ser estocada*  | int      |
| dateUtcOnBalanceSystem  <br> *Data da última atualização*   | DateTimeOffset      |    

</div>

<div class="api-example">

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

{% highlight json %}
true
{% endhighlight %}    

</div>

</div>

</div>