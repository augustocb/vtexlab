---
layout: api
title: templates
category: api-portal
---

#templates


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/portal/pvt/sites/{siteId}/templates](#obter-lista-de-nomes-de-templates)  | Obter lista de nomes de templates|
| [GET /api/portal/pvt/sites/{siteId}/templates/{name}](#obter-detalhes-de-um-template)  | Obter detalhes de um template|
| [POST /api/portal/pvt/sites/{siteId}/templates](#criar-um-template)  | Criar um template|
| [PUT /api/portal/pvt/sites/{siteId}/templates/{name}](#atualizar-um-template)  | Atualizar um template|
| [DELETE /api/portal/pvt/sites/{siteId}/templates/{name}](#excluir-um-template)  | Excluir um template|

##Obter lista de nomes de templates

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/templates HTTP/1.1
```

####Exemplo de retorno:
```json
[
  "template-um",
  "template-dois"
]
```
####Status codes: `200 OK` 

---

##Obter detalhes de um template

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/templates/{name} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "name": "template-um",
  "body": "Conteúdo do template"
}
```
####Status codes: `200 OK` `404 NotFound` 

---

##Criar um template

####URL do Recurso:
```http
POST /api/portal/pvt/sites/{siteId}/templates HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "name": "novo-template",
  "body": "<h1>Novo template</h1>"
}
```
####Exemplo de retorno:
```json
{
  "name": "novo-template",
  "body": "<h1>Novo template</h1>"
}
```
####Status codes: `201 Created` `400 BadRequest` `409 Conflict` 

---

##Atualizar um template

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{siteId}/templates/{name} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "name": "template-existente",
  "body": "<h1>Novo conteúdo</h1>"
}
```
####Exemplo de retorno:
```json
{
  "name": "template-existente",
  "body": "<h1>Novo conteúdo</h1>"
}
```
####Status codes: `200 OK` `201 Created` `400 BadRequest` 

---

##Excluir um template

####URL do Recurso:
```http
DELETE /api/portal/pvt/sites/{siteId}/templates/{name} HTTP/1.1
```

####Status codes: `204 NoContent` `404 NotFound` 

---

