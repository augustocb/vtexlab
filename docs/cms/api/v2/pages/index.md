---
layout: page
title: pages
category: cms-api
---

#pages

<table class="table">
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#obter-lista-de-p%C3%A1ginas">GET /api/portal/pvt/sites/{siteId}/pages</a></td>
      <td>Obter lista de páginas</td>
    </tr>
    <tr>
      <td><a href="#obter-detalhes-de-uma-p%C3%A1gina">GET /api/portal/pvt/sites/{siteId}/pages/{id}</a></td>
      <td>Obter detalhes de uma página</td>
    </tr>
    <tr>
      <td><a href="#criar-uma-p%C3%A1gina">POST /api/portal/pvt/sites/{siteId}/pages</a></td>
      <td>Criar uma página</td>
    </tr>
    <tr>
      <td><a href="#atualizar-uma-p%C3%A1gina">PUT /api/portal/pvt/sites/{siteId}/pages/{id}</a></td>
      <td>Atualizar uma página</td>
    </tr>
    <tr>
      <td><a href="#excluir-uma-p%C3%A1gina">DELETE /api/portal/pvt/sites/{siteId}/pages/{id}</a></td>
      <td>Excluir uma página</td>
    </tr>
  </tbody>
</table>


###Obter lista de páginas

```
GET /api/portal/pvt/sites/{siteId}/pages
```

####Response
<pre class="headers">
Status: 200 OK
</pre>
```json
[
  {
    "id": "abc123",
    "path": "/checkout/",
    "requiredProtocol": "https",
    "template": "vtex-checkout"
  },
  {
    "id": "def456",
    "path": "/checkout/orderPlaced/",
    "requiredProtocol": "https",
    "template": "vtex-orderPlaced"
  }
]
```

---

###Obter detalhes de uma página

```
GET /api/portal/pvt/sites/{siteId}/pages/{id}
```

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound
</pre>
```json
{
  "id": "abc123",
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```

---

###Criar uma página

```
POST /api/portal/pvt/sites/{siteId}/pages
```

####Exemplo
```json
{
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```
####Response
<pre class="headers">
Status: 200 OK, 400 BadRequest, 409 Conflict
</pre>
```json
{
  "id": "abc123",
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```
---

###Atualizar uma página

```
PUT /api/portal/pvt/sites/{siteId}/pages/{id}
```

####Exemplo
```json
{
  "path": "/checkout/orderPlaced/",
  "requiredProtocol": "https",
  "template": "vtex-orderPlaced"
}
```
####Response
<pre class="headers">
Status: 200 OK, 201 Created, 400 BadRequest, 409 Conflict
</pre>
```json
{
  "id": "def456",
  "path": "/checkout/orderPlaced/",
  "requiredProtocol": "https",
  "template": "vtex-orderPlaced"
}
```
---

###Excluir uma página

```
DELETE /api/portal/pvt/sites/{siteId}/pages/{id}
```

####Response
<pre class="headers">
Status: 204 NoContent, 404 NotFound
</pre>
<pre>
</pre>

---

