---
layout: docs
title: sites
category: cms-api
---

#sites

<table class="table">
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#obter-lista-de-sites">GET /api/portal/pvt/sites</a></td>
      <td>Obter lista de sites</td>
    </tr>
    <tr>
      <td><a href="#obter-um-site">GET /api/portal/pvt/sites/{id}</a></td>
      <td>Obter um site</td>
    </tr>
    <tr>
      <td><a href="#criar-um-site">POST /api/portal/pvt/sites</a></td>
      <td>Criar um site</td>
    </tr>
    <tr>
      <td><a href="#atualizar-um-site">PUT /api/portal/pvt/sites/{id}</a></td>
      <td>Atualizar um site</td>
    </tr>
    <tr>
      <td><a href="#excluir-um-site">DELETE /api/portal/pvt/sites/{id}</a></td>
      <td>Excluir um site</td>
    </tr>
  </tbody>
</table>

###Obter lista de sites

```
GET /api/portal/pvt/sites
```

####Response
<pre class="headers">
Status: 200 OK
</pre>
```json
[
  {
    "id": "some-site",
    "title": "Some Site",
    "siteName": "store1"
  },
  {
    "id": "another-site",
    "title": "Another Site",
    "siteName": "store2"
  }
]
```

---

###Obter um site

```
GET /api/portal/pvt/sites/{id}
```

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound
</pre>
```json
{
  "id": "some-site",
  "title": "Some Site",
  "siteName": "store1"
}
```
---

##Criar um site

```
POST /api/portal/pvt/sites
```

####Exemplo

```json
{
  "title": "First Site",
  "siteName": "firstsite"
}
```
####Response
<pre class="headers">
Status: 200 OK, 400 BadRequest, 409 Conflict
</pre>
```json
{
  "id": "first-site",
  "title": "First Site",
  "siteName": "firstsite"
}
```

---

###Atualizar um site

```
PUT /api/portal/pvt/sites/{id}
```

####Exemplo
```json
{
  "title": "Changed Site",
  "siteName": "othersite"
}
```

####Response
<pre class="headers">
Status: 200 OK, 201 Created, 400 BadRequest
</pre>
```json
{
  "id": "first-site",
  "title": "Changed Site",
  "siteName": "othersite"
}
```

---

###Excluir um site

```
DELETE /api/portal/pvt/sites/{id}
```

####Response
<pre class="headers">
Status: 204 NoContent, 404 NotFound
</pre>
<pre>
</pre> 
---

