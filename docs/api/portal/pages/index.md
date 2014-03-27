---
layout: api
title: pages
category: api-portal
---

#pages


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/portal/pvt/sites/{siteId}/pages](#obter-lista-de-páginas)  | Obter lista de páginas|
| [GET /api/portal/pvt/sites/{siteId}/pages/{id}](#obter-detalhes-de-uma-página)  | Obter detalhes de uma página|
| [POST /api/portal/pvt/sites/{siteId}/pages](#criar-uma-página)  | Criar uma página|
| [PUT /api/portal/pvt/sites/{siteId}/pages/{id}](#atualizar-uma-página)  | Atualizar uma página|
| [DELETE /api/portal/pvt/sites/{siteId}/pages/{id}](#excluir-uma-página)  | Excluir uma página|

##Obter lista de páginas

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/pages HTTP/1.1
```

####Exemplo de retorno:
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
####Status codes: `200 OK` 

---

##Obter detalhes de uma página

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/pages/{id} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "id": "abc123",
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```
####Status codes: `200 OK` `404 NotFound` 

---

##Criar uma página

####URL do Recurso:
```http
POST /api/portal/pvt/sites/{siteId}/pages HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```
####Exemplo de retorno:
```json
{
  "id": "abc123",
  "path": "/checkout/",
  "requiredProtocol": "https",
  "template": "vtex-checkout"
}
```
####Status codes: `201 Created` `400 BadRequest` `409 Conflict` 

---

##Atualizar uma página

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{siteId}/pages/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "path": "/checkout/orderPlaced/",
  "requiredProtocol": "https",
  "template": "vtex-orderPlaced"
}
```
####Exemplo de retorno:
```json
{
  "id": "def456",
  "path": "/checkout/orderPlaced/",
  "requiredProtocol": "https",
  "template": "vtex-orderPlaced"
}
```
####Status codes: `200 OK` `201 Created` `400 BadRequest` `409 Conflict` 

---

##Excluir uma página

####URL do Recurso:
```http
DELETE /api/portal/pvt/sites/{siteId}/pages/{id} HTTP/1.1
```

####Status codes: `204 NoContent` `404 NotFound` 

---

