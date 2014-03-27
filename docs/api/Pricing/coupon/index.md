---
layout: api
title: coupon
category: api-Pricing
---

#coupon


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/rnb/pvt/archive/coupon/{id}](#arquivar-um-cupom)  | Arquivar um cupom|
| [POST /api/rnb/pvt/unarchive/coupon/{id}](#desarquivar-um-cupom)  | Desarquivar um cupom|
| [GET /api/rnb/pvt/coupon](#retornar-todos-cupons)  | Retornar todos cupons|
| [GET /api/rnb/pvt/archive/coupon](#retorna-todos-cupons-arquivados)  | Retorna todos cupons arquivados|
| [GET /api/rnb/pvt/coupon/{id}](#retona-um-cupom-pelo-id)  | Retona um cupom pelo id|
| [POST /api/rnb/pvt/coupon](#salva-um-cupom)  | Salva um cupom|
| [GET /api/rnb/pub/validateCoupon/{coupon}/{profileId}](#validar-um-cupom)  | Validar um cupom|

##Arquivar um cupom

####URL do Recurso:
```http
POST /api/rnb/pvt/archive/coupon/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
"d22146eb-76c3-42d0-83c7-cf778c1b365d"
```
####Status codes: `204 NoContent` 

---

##Desarquivar um cupom

####URL do Recurso:
```http
POST /api/rnb/pvt/unarchive/coupon/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
"d22146eb-76c3-42d0-83c7-cf778c1b365d"
```
####Status codes: `204 NoContent` 

---

##Retornar todos cupons

####URL do Recurso:
```http
GET /api/rnb/pvt/coupon HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": "d22146eb-76c3-42d0-83c7-cf778c1b365d",
    "utmSource": "FESTA",
    "utmCampaign": "RIOSUL",
    "couponCode": "NATAL",
    "isArchived": true
  },
  {
    "id": "d22146eb-76c3-42d0-83c7-cf778c1b3679",
    "utmSource": "FESTA-2",
    "utmCampaign": "RIOSUL-2",
    "couponCode": "NATAL-2",
    "isArchived": true
  }
]
```
####Status codes: `200 OK` 

---

##Retorna todos cupons arquivados

####URL do Recurso:
```http
GET /api/rnb/pvt/archive/coupon HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": "d22146eb-76c3-42d0-83c7-cf778c1b365d",
    "utmSource": "FESTA",
    "utmCampaign": "RIOSUL",
    "couponCode": "NATAL",
    "isArchived": true
  },
  {
    "id": "d22146eb-76c3-42d0-83c7-cf778c1b3679",
    "utmSource": "FESTA-2",
    "utmCampaign": "RIOSUL-2",
    "couponCode": "NATAL-2",
    "isArchived": true
  }
]
```
####Status codes: `200 OK` 

---

##Retona um cupom pelo id

####URL do Recurso:
```http
GET /api/rnb/pvt/coupon/{id} HTTP/1.1
```

####Exemplo de requisição:
```json
"d22146eb-76c3-42d0-83c7-cf778c1b365d"
```
####Exemplo de retorno:
```json
{
  "id": "d22146eb-76c3-42d0-83c7-cf778c1b365d",
  "utmSource": "FESTA",
  "utmCampaign": "RIOSUL",
  "couponCode": "NATAL",
  "isArchived": true
}
```
####Status codes: `200 OK` 

---

##Salva um cupom

####URL do Recurso:
```http
POST /api/rnb/pvt/coupon HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "id": "d22146eb-76c3-42d0-83c7-cf778c1b365d",
  "utmSource": "FESTA",
  "utmCampaign": "RIOSUL",
  "couponCode": "NATAL",
  "isArchived": true
}
```
####Exemplo de retorno:
```json
"Saved!"
```
####Status codes: `200 OK` 

---

##Validar um cupom

####URL do Recurso:
```http
GET /api/rnb/pub/validateCoupon/{coupon}/{profileId} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "StatusName": "Available",
  "Status": 2
}
```
####Status codes: `200 OK` 

---

