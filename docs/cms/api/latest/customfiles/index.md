---
layout: docs
title: customfiles
category: cms-api
application: CMS
docType: api
---

#customfiles

<table class="table">
	<thead>
		<tr>
			<th>Recurso</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="#obter-nomes-dos-arquivos">GET /api/portal/pvt/sites/{siteId}/files</a></td>
			<td>Obter nomes dos arquivos</td>
		</tr>
		<tr>
			<td><a href="#obter-um-arquivo">GET /api/portal/pvt/sites/{siteId}/files/{path}</a></td>
			<td>Obter um arquivo</td>
		</tr>
		<tr>
			<td><a href="#salvar-um-arquivo">PUT /api/portal/pvt/sites/{siteId}/files/{path}</a></td>
			<td>Salvar um arquivo</td>
		</tr>
		<tr>
			<td><a href="#excluir-um-arquivo">DELETE /api/portal/pvt/sites/{siteId}/files/{path}</a></td>
			<td>Excluir um arquivo</td>
		</tr>
	</tbody>
</table>


###Obter nomes dos arquivos

```
GET /api/portal/pvt/sites/{siteId}/files
```

####Response
<pre class="headers">
Status: 200 OK
</pre>
```json
[
  "meu-estilo.css",
  "alguma-coisa.js",
  "outra-coisa.js"
]
```
---

###Obter um arquivo

```
GET /api/portal/pvt/sites/{siteId}/files/{path}
```

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound
</pre>
```json
{
  "path": "alguma-coisa.js",
  "text": "window.alert('Hello World!');"
}
``` 

---

###Salvar um arquivo

```
PUT /api/portal/pvt/sites/{siteId}/files/{path}
```

####Exemplo
```json
{
  "path": "alguma-coisa.js",
  "text": "console.log('Hello World!');"
}
```
####Response
<pre class="headers">
Status: 200 OK, 201 Created, 400 BadRequest, 409 Conflict 
</pre>
```json
{
  "path": "alguma-coisa.js",
  "text": "console.log('Hello World!');"
}
```
---

###Excluir um arquivo

```
DELETE /api/portal/pvt/sites/{siteId}/files/{path}
```

####Response
<pre class="headers">
Status: 204 NoContent
</pre>
<pre>
</pre>
---

