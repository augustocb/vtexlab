---
layout: api
title: sites
category: api-portal
---

#sites


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/portal/pvt/sites](#obter-lista-de-sites)  | Obter lista de sites|
| [GET /api/portal/pvt/sites/{id}](#obter-um-site)  | Obter um site|
| [POST /api/portal/pvt/sites](#criar-um-site)  | Criar um site|
| [PUT /api/portal/pvt/sites/{id}](#atualizar-um-site)  | Atualizar um site|
| [DELETE /api/portal/pvt/sites/{id}](#excluir-um-site)  | Excluir um site|

##Obter lista de sites

####URL do Recurso:
```http
GET /api/portal/pvt/sites HTTP/1.1
```

####Exemplo de retorno:
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
####Status codes: `200 OK` 

---

##Obter um site

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{id} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "id": "some-site",
  "title": "Some Site",
  "siteName": "store1"
}
```
####Status codes: `200 OK` `404 NotFound` 

---

##Criar um site

####URL do Recurso:
```http
POST /api/portal/pvt/sites HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "title": "First Site",
  "siteName": "firstsite"
}
```
####Exemplo de retorno:
```json
{
  "id": "first-site",
  "title": "First Site",
  "siteName": "firstsite"
}
```
####Status codes: `200 OK` `400 BadRequest` `409 Conflict` 

---

##Atualizar um site

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "title": "Changed Site",
  "siteName": "othersite"
}
```
####Exemplo de retorno:
```json
{
  "id": "first-site",
  "title": "Changed Site",
  "siteName": "othersite"
}
```
####Status codes: `200 OK` `201 Created` `400 BadRequest` 

---

##Excluir um site

####URL do Recurso:
```http
DELETE /api/portal/pvt/sites/{id} HTTP/1.1
```

####Status codes: `204 NoContent` `404 NotFound` 

---

