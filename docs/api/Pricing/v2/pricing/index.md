---
layout: api
title: pricing
category: api-Pricing
---

#pricing


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/pricing/pvt/price-sheet/{idSku}/{storeId}](#lista-price-sheets-pelo-id-do-sku-e-id-do-sales-channel)  | Lista price sheets pelo id do sku e id do sales channel|
| [GET /api/pricing/pvt/price-sheet/{idSku}](#lista-price-sheets-pelo-sku)  | Lista price sheets pelo sku|
| [POST /api/pricing/pvt/price-sheet](#salva-uma-lista-de-price-sheet)  | Salva uma lista de price sheet|
| [GET /api/pricing/pvt/price-sheet/all/{page}/{pageSize}](#lista-os-price-sheets-paginados)  | Lista os price sheets paginados|
| [GET /api/pricing/pvt/price-sheet/get/one/{id}](#retorna-um-price-sheet-pelo-id)  | Retorna um price sheet pelo id|

##Lista price sheets pelo id do sku e id do sales channel

####URL do Recurso:
```http
GET /api/pricing/pvt/price-sheet/{idSku}/{storeId} HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "Id": 348060,
    "itemId": 344029,
    "salesChannel": 1,
    "price": 200.0,
    "listPrice": 101.0,
    "source": "augusto_pierzynski",
    "validFrom": "2013-09-30T16:35:37.433",
    "validTo": "2113-09-30T16:35:37.433"
  }
]
```
####Status codes: `200 OK` 

---

##Lista price sheets pelo sku

####URL do Recurso:
```http
GET /api/pricing/pvt/price-sheet/{idSku} HTTP/1.1
```

####Exemplo de requisição:
```json
344029
```
####Exemplo de retorno:
```json
[
  {
    "Id": 348020,
    "itemId": 344029,
    "salesChannel": 13,
    "price": 601.0,
    "listPrice": 650.0,
    "validFrom": "2013-11-02T00:00:00",
    "validTo": "2014-02-06T00:00:00"
  },
  {
    "Id": 348041,
    "itemId": 344029,
    "salesChannel": 2,
    "price": 200.0,
    "listPrice": 101.0,
    "source": "augusto_pierzynski",
    "validFrom": "2013-09-30T16:35:37.433",
    "validTo": "2113-09-30T16:35:37.433"
  },
  {
    "Id": 348060,
    "itemId": 344029,
    "salesChannel": 1,
    "price": 200.0,
    "listPrice": 101.0,
    "source": "augusto_pierzynski",
    "validFrom": "2013-09-30T16:35:37.433",
    "validTo": "2113-09-30T16:35:37.433"
  }
]
```
####Status codes: `200 OK` 

---

##Salva uma lista de price sheet

####URL do Recurso:
```http
POST /api/pricing/pvt/price-sheet HTTP/1.1
```

####Exemplo de requisição:
```json
[
  {
    "Id": 244101,
    "itemId": 11,
    "salesChannel": 1,
    "price": 241.0,
    "listPrice": 239.0,
    "validFrom": "2013-12-05T17:00:03.103",
    "validTo": "2113-12-05T17:00:03.103"
  },
  {
    "Id": 244102,
    "itemId": 2000014472,
    "salesChannel": 1,
    "price": 2.5,
    "listPrice": 15.0,
    "validFrom": "2011-03-04T00:00:00",
    "validTo": "2015-03-28T00:00:00"
  }
]
```
####Exemplo de retorno:
```json
"Done!!!"
```
####Status codes: `204 NoContent` 

---

##Lista os price sheets paginados

####URL do Recurso:
```http
GET /api/pricing/pvt/price-sheet/all/{page}/{pageSize} HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "Id": 244101,
    "itemId": 11,
    "salesChannel": 1,
    "price": 241.0,
    "listPrice": 239.0,
    "validFrom": "2013-12-05T17:00:03.103",
    "validTo": "2113-12-05T17:00:03.103"
  },
  {
    "Id": 244102,
    "itemId": 2000014472,
    "salesChannel": 1,
    "price": 2.5,
    "listPrice": 15.0,
    "validFrom": "2011-03-04T00:00:00",
    "validTo": "2015-03-28T00:00:00"
  }
]
```
####Status codes: `200 OK` 

---

##Retorna um price sheet pelo id

####URL do Recurso:
```http
GET /api/pricing/pvt/price-sheet/get/one/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
344029
```
####Exemplo de retorno:
```json
{
  "Id": 348020,
  "itemId": 344029,
  "salesChannel": 13,
  "price": 601.0,
  "listPrice": 650.0,
  "validFrom": "2013-11-02T00:00:00",
  "validTo": "2014-02-06T00:00:00"
}
```
####Status codes: `200 OK` 

---

