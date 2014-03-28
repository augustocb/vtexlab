---
layout: page
title: templates
category: cms-api
---

#templates

<table class="table">
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#obter-lista-de-nomes-de-templates">GET /api/portal/pvt/sites/{siteId}/templates</a></td>
      <td>Obter lista de nomes de templates</td>
    </tr>
    <tr>
      <td><a href="#obter-detalhes-de-um-template">GET /api/portal/pvt/sites/{siteId}/templates/{name}</a></td>
      <td>Obter detalhes de um template</td>
    </tr>
    <tr>
      <td><a href="#criar-um-template">POST /api/portal/pvt/sites/{siteId}/templates</a></td>
      <td>Criar um template</td>
    </tr>
    <tr>
      <td><a href="#atualizar-um-template">PUT /api/portal/pvt/sites/{siteId}/templates/{name}</a></td>
      <td>Atualizar um template</td>
    </tr>
    <tr>
      <td><a href="#excluir-um-template">DELETE /api/portal/pvt/sites/{siteId}/templates/{name}</a></td>
      <td>Excluir um template</td>
    </tr>
  </tbody>
</table>


###Obter lista de nomes de templates

```
GET /api/portal/pvt/sites/{siteId}/templates
```

####Response
<pre class="headers">
Status: 200 OK
</pre>
```json
[
  "template-um",
  "template-dois"
]
```
---

###Obter detalhes de um template

```
GET /api/portal/pvt/sites/{siteId}/templates/{name}
```

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound
</pre>
```json
{
  "name": "template-um",
  "body": "Conteúdo do template"
}
```
---

###Criar um template

```
POST /api/portal/pvt/sites/{siteId}/templates
```

####Exemplo
```json
{
  "name": "novo-template",
  "body": "<h1>Novo template</h1>"
}
```
####Response
<pre class="headers">
Status: 200 OK, 400 BadRequest, 409 Conflict
</pre>
```json
{
  "name": "novo-template",
  "body": "<h1>Novo template</h1>"
}
```
---

###Atualizar um template

```
PUT /api/portal/pvt/sites/{siteId}/templates/{name}
```

####Exemplo
```json
{
  "name": "template-existente",
  "body": "<h1>Novo conteúdo</h1>"
}
```

####Response

<pre class="headers">
Status: 200 OK, 201 Created, 400 BadRequest
</pre>
```json
{
  "name": "template-existente",
  "body": "<h1>Novo conteúdo</h1>"
}
```
---

###Excluir um template
```
DELETE /api/portal/pvt/sites/{siteId}/templates/{name} HTTP/1.1
```
####Response
<pre class="headers">
Status: 204 NoContent, 404 NotFound
</pre>
<pre></pre>
---

