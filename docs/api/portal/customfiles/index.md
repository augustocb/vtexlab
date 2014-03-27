---
layout: api
title: customfiles
category: api-portal
---

#customfiles


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/portal/pvt/sites/{siteId}/files](#obter-nomes-dos-arquivos)  | Obter nomes dos arquivos|
| [GET /api/portal/pvt/sites/{siteId}/files/{path}](#obter-um-arquivo)  | Obter um arquivo|
| [PUT /api/portal/pvt/sites/{siteId}/files/{path}](#salvar-um-arquivo)  | Salvar um arquivo|
| [DELETE /api/portal/pvt/sites/{siteId}/files/{path}](#excluir-um-arquivo)  | Excluir um arquivo|

##Obter nomes dos arquivos

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/files HTTP/1.1
```

####Exemplo de retorno:
```json
[
  "meu-estilo.css",
  "alguma-coisa.js",
  "outra-coisa.js"
]
```
####Status codes: `200 OK` 

---

##Obter um arquivo

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/files/{path} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "path": "alguma-coisa.js",
  "text": "window.alert('Hello World!');"
}
```
####Status codes: `200 OK` `404 NotFound` 

---

##Salvar um arquivo

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{siteId}/files/{path} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "path": "alguma-coisa.js",
  "text": "console.log('Hello World!');"
}
```
####Exemplo de retorno:
```json
{
  "path": "alguma-coisa.js",
  "text": "console.log('Hello World!');"
}
```
####Status codes: `200 OK` `201 Created` `400 BadRequest` `409 Conflict` 

---

##Excluir um arquivo

####URL do Recurso:
```http
DELETE /api/portal/pvt/sites/{siteId}/files/{path} HTTP/1.1
```

####Status codes: `204 NoContent` 

---

