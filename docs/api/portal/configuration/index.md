---
layout: api
title: configuration
category: api-portal
---

#configuration


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/portal/pvt/sites/{siteId}/configuration](#obter-configurações-do-site)  | Obter configurações do site|
| [GET /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}](#obter-valor-de-uma-configuração)  | Obter valor de uma configuração|
| [PUT /api/portal/pvt/sites/{siteId}/configuration](#atualizar-as-configurações-do-site)  | Atualizar as configurações do site|
| [PUT /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}](#atualizar-o-valor-de-uma-configuração)  | Atualizar o valor de uma configuração|

##Obter configurações do site

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/configuration HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "tagManagerId": "GTM-1234"
}
```
####Status codes: `200 OK` 

---

##Obter valor de uma configuração

####URL do Recurso:
```http
GET /api/portal/pvt/sites/{siteId}/configuration/{configurationKey} HTTP/1.1
```

####Exemplo de retorno:
```json
"GTM-1234"
```
####Status codes: `200 OK` `404 NotFound` 

---

##Atualizar as configurações do site

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{siteId}/configuration HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "tagManagerId": "GTM-5678"
}
```
####Exemplo de retorno:
```json
{
  "tagManagerId": "TagManagerId569963d8-570a-45b4-884d-9a85a653dcc5"
}
```
####Status codes: `200 OK` `404 NotFound` 

---

##Atualizar o valor de uma configuração

####URL do Recurso:
```http
PUT /api/portal/pvt/sites/{siteId}/configuration/{configurationKey} HTTP/1.1
```

####Exemplo de requisição:
```json
"GTM-5678"
```
####Exemplo de retorno:
```json
"GTM-5678"
```
####Status codes: `204 NoContent` `404 NotFound` 

---

