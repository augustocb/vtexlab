---
layout: oms
title: Feed
category: oms-api
---

#feed

<table class="table">
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="#obter-feed-de-status-de-pedido">GET /api/oms/pvt/feed/orders/status</a></td>
      <td>Obter feed de status de pedido</td>
    </tr>
    <tr>
      <td><a href="#confirmar-recebimento-de-items-do-feed-de-status-do-pedido.">POST /api/oms/pvt/feed/orders/status/confirm</a></td>
      <td>Confirmar recebimento de items do feed de status do pedido</td>
    </tr>
  </tbody>
</table>

###Obter feed de status de pedido
Obtem uma lista (estilo feed) com a atualização de status de pedido.

```
GET /api/oms/pvt/feed/orders/status
```

####Response
<pre class="headers">
Status: 200 Ok
</pre>
```json
[
  {
    "orderId": "405471212255-01",
    "status": "approve-payment",
    "commitToken": "Marketplace##{\"Receipt\":\"+eXJYhj5rDrYJVKzrKywtGizy7tIyLyKu7epkGL2PQG2PVTLXe4KqFMz7w2QErLd6h8QPQlucswf3UwuSlPJx91tF3S38RiOWDsPvUG5lY3KKEkIc3lueyjIJXJccIO5R4NljmtDKZDCq1+VVPQpBmuepOTAH0wnr2oHBtT1iLhR1EAWhTyoQWwQmkYQLTvfauv9lLvVnp65br3WQ3JSJAFJ6EM5bBXA/9jTZmWyDnUhMgQdU0VcXZN7MCePG6x+ay2hQarGFoLyUPOqsTHqne5Ivaim3LHzW3B7Pai+dqE=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"3b96ccf3-4211-4c39-8a0f-a22550fa2111\",\"LastSendOverwrite\":null}"
  },
  {
    "orderId": "405471212255-01",
    "status": "payment-approved",
    "commitToken": "Marketplace##{\"Receipt\":\"+eXJYhj5rDrYJVKzrKywtGizy7tIyLyKN9X02H8v6Je2PVTLXe4KqLOxPnb3MaAnE5rKYaGhO48f3UwuSlPJx91tF3S38RiOWDsPvUG5lY3KKEkIc3lueyjIJXJccIO5R4NljmtDKZDCq1+VVPQpBmuepOTAH0wnr2oHBtT1iLhR1EAWhTyoQWwQmkYQLTvfauv9lLvVnp5j83q30UOyOP7ecvmWd/F/DVbSLRHwQFe6HFsXrWzwoya9wGOwABeGay2hQarGFoKgW6S8dC2OK+5Ivaim3LHzW3B7Pai+dqE=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"436f136a-628e-4c51-a491-e1fdb95a7773\",\"LastSendOverwrite\":null}"
  },
  {
    "orderId": "405471212255-01",
    "status": "authorize-fulfillment",
    "commitToken": "Fulfillment##{\"Receipt\":\"+eXJYhj5rDr5UqFwq7jp2Gizy7tIyLyKZL8nsUys9SjFMpcjmMzKYb0iEG6qS595jqgV22jyQyRF/0nm+GKP+T+Ccau4q1NZSQK4V33yi8mT5/+4UpjB73tW2DXNUqlJOtMXARrHsdHeaU2CJCpPLL+yAM+k8jkFWCdtppQr1qMKjjAm4blB2oICoUvvRwS0xv7I35kS1/uV6ZNfG7XxzIL73xpGnvb44wYLIlHHcyzQdYGw8gayboITTTdWaz1p2YSyPEnWn78FbhWojnPD0d9nm3NEteb0CaZfd2weymg=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"eab38ee6-67ff-4053-ae11-697dc51e9e47\",\"LastSendOverwrite\":null}"
  }
]
```
---

###Confirmar recebimento de items do feed de status do pedido
Confirma o recebimento de items do feed de status do pedido.

```
POST /api/oms/pvt/feed/orders/status/confirm
```

####Response
<pre class="headers">
Status: 200 Ok
</pre>
```json
[
  {
    "commitToken": "Marketplace##{\"Receipt\":\"+eXJYhj5rDqHa28+XUcfebDO4pve3TvMpPlW0ivc5STyE/40J6wxooXgBF8LZ9CdhZkFJnMYBVDwPwQtNEoZQrVtErDB2Yq2zs16QqsJuYxSrQtBfl9rMfmkO5orB9oDHSpvwL6DjDzcuJeQBBNxono/m4F6BloJEsk9BmuTmPaRI+7xsrN5Oeg8NPUoNSnsT983JPr1B+Y+TbbFjC1R8ZkvFHGVfti1QbhOwmYWTHPG08YMqla+Qwh7kUONLBXPqporF/CcqJo5YVTSu2uBcCuXkUo+OH9uUTn6hHkUROo=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"0dc05b6b-48a5-4f03-975a-a69fb6550aaa\",\"LastSendOverwrite\":null}"
  }
]
```

---

