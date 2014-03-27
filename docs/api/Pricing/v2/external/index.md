---
layout: api
title: external
category: api-Pricing
---

#external


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [GET /api/rnb/pvt/brands/{brandName}](#lista-as-marcas)  | Lista as marcas|
| [GET /api/rnb/pvt/collections](#lista-todas-as-coleções)  | Lista todas as coleções|
| [GET /api/rnb/pvt/collections/{name}](#lista-as-coleções-filtradas-por-um-nome)  | Lista as coleções filtradas por um nome|
| [GET /api/rnb/pvt/categories](#lista-todas-as-categorias)  | Lista todas as categorias|
| [GET /api/rnb/pvt/categories/{categoryName}](#lista-de-categorias-filtradas-por-um-nome)  | Lista de categorias filtradas por um nome|
| [GET /api/rnb/pvt/freights](#lista-de-tipos-de-frete)  | Lista de tipos de frete|
| [GET /api/rnb/pvt/freights/{freightName}](#lista-os-tipos-de-frete-filtrado-pelo-nome)  | Lista os tipos de frete filtrado pelo nome|
| [GET /api/rnb/pvt/paymentsystems](#lista-todas-as-formas-pagamentos)  | Lista todas as formas pagamentos|
| [GET /api/rnb/pvt/paymentsystems/{paymentName}](#lista-as-formas-de-pagamentos-filtradas-pelo-nome)  | Lista as formas de pagamentos filtradas pelo nome|
| [GET /api/rnb/pvt/products/{filter}/{page}/{pageSize}](#lista-todos-os-produtos)  | Lista todos os produtos|

##Lista as marcas

####URL do Recurso:
```http
GET /api/rnb/pvt/brands/{brandName} HTTP/1.1
```

####Exemplo de requisição:
```json
"a"
```
####Exemplo de retorno:
```json
[
  {
    "id": 1,
    "brandName": "Taiff"
  },
  {
    "id": 2,
    "brandName": "Ga.ma Italy"
  },
  {
    "id": 6,
    "brandName": "Arno"
  },
  {
    "id": 7,
    "brandName": "Brazil TV Shop"
  }
]
```
####Status codes: `200 OK` 

---

##Lista todas as coleções

####URL do Recurso:
```http
GET /api/rnb/pvt/collections HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": 8,
    "name": "Aces"
  },
  {
    "id": 137,
    "name": "Jogos"
  },
  {
    "id": 138,
    "name": "InformáticaAlteracao"
  },
  {
    "id": 139,
    "name": "Telefonia"
  },
  {
    "id": 140,
    "name": "Maquiagem"
  },
  {
    "id": 141,
    "name": "Esportes"
  }
]
```
####Status codes: `200 OK` 

---

##Lista as coleções filtradas por um nome

####URL do Recurso:
```http
GET /api/rnb/pvt/collections/{name} HTTP/1.1
```

####Exemplo de requisição:
```json
"Jogos"
```
####Exemplo de retorno:
```json
[
  {
    "id": 137,
    "name": "Jogos"
  }
]
```
####Status codes: `200 OK` 

---

##Lista todas as categorias

####URL do Recurso:
```http
GET /api/rnb/pvt/categories HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": 247,
    "name": "Informática"
  },
  {
    "id": 248,
    "name": "Informática | Apple"
  },
  {
    "id": 254,
    "name": "Informática | Notebooks"
  },
  {
    "id": 256,
    "name": "Informática | Computadores"
  },
  {
    "id": 259,
    "name": "Informática | Monitores"
  },
  {
    "id": 262,
    "name": "Informática | Projetores e Acessórios"
  }
]
```
####Status codes: `200 OK` 

---

##Lista de categorias filtradas por um nome

####URL do Recurso:
```http
GET /api/rnb/pvt/categories/{categoryName} HTTP/1.1
```

####Exemplo de requisição:
```json
"Apple"
```
####Exemplo de retorno:
```json
[
  {
    "id": 248,
    "name": "Informática | Apple"
  },
  {
    "id": 2799,
    "name": "Informática | Apple TV"
  },
  {
    "id": 249,
    "name": "Informática | Apple | iMac"
  },
  {
    "id": 250,
    "name": "Informática | Apple | Macbook Pro"
  },
  {
    "id": 252,
    "name": "Informática | Apple | Acessórios Apple"
  },
  {
    "id": 2886,
    "name": "Instrumentos Musicais | Apple Music"
  }
]
```
####Status codes: `200 OK` 

---

##Lista de tipos de frete

####URL do Recurso:
```http
GET /api/rnb/pvt/freights HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": "58",
    "freightName": "Entrega Agendada"
  },
  {
    "id": "59",
    "freightName": "Entrega Agendada 1"
  },
  {
    "id": "57",
    "freightName": "eSedex"
  },
  {
    "id": "1a574b3",
    "freightName": "Mundo"
  },
  {
    "id": "1bfbc01",
    "freightName": "outra transportadora com anexo e sem ID"
  },
  {
    "id": "56",
    "freightName": "PAC"
  },
  {
    "id": "1d207c1",
    "freightName": "salvando transportadora com anexo e sem ID 2"
  },
  {
    "id": "55",
    "freightName": "Sedex"
  },
  {
    "id": "E5757E1C-767E-47D0-BDF7-C7259DC53A4E",
    "freightName": "Segundo teste"
  },
  {
    "id": "174154e",
    "freightName": "testando"
  },
  {
    "id": "123333",
    "freightName": "teste frete"
  },
  {
    "id": "61",
    "freightName": "Teste Frete"
  }
]
```
####Status codes: `200 OK` 

---

##Lista os tipos de frete filtrado pelo nome

####URL do Recurso:
```http
GET /api/rnb/pvt/freights/{freightName} HTTP/1.1
```

####Exemplo de requisição:
```json
"Sedex"
```
####Exemplo de retorno:
```json
[
  {
    "id": "57",
    "freightName": "eSedex"
  },
  {
    "id": "55",
    "freightName": "Sedex"
  }
]
```
####Status codes: `200 OK` 

---

##Lista todas as formas pagamentos

####URL do Recurso:
```http
GET /api/rnb/pvt/paymentsystems HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "id": "1",
    "paymentSystemName": "American Express"
  },
  {
    "id": "2",
    "paymentSystemName": "Visa"
  },
  {
    "id": "3",
    "paymentSystemName": "Diners"
  },
  {
    "id": "4",
    "paymentSystemName": "Mastercard"
  },
  {
    "id": "5",
    "paymentSystemName": "Discover"
  },
  {
    "id": "6",
    "paymentSystemName": "Boleto Bancário"
  }
]
```
####Status codes: `200 OK` 

---

##Lista as formas de pagamentos filtradas pelo nome

####URL do Recurso:
```http
GET /api/rnb/pvt/paymentsystems/{paymentName} HTTP/1.1
```

####Exemplo de requisição:
```json
"Visa"
```
####Exemplo de retorno:
```json
[
  {
    "id": "2",
    "paymentSystemName": "Visa"
  },
  {
    "id": "10",
    "paymentSystemName": "Visa Electron"
  }
]
```
####Status codes: `200 OK` 

---

##Lista todos os produtos

####URL do Recurso:
```http
GET /api/rnb/pvt/products/{filter}/{page}/{pageSize} HTTP/1.1
```

####Exemplo de retorno:
```json
{
  "items": [
    {
      "id": "Ide2ea5f1b-e1c4-47b9-a7cb-29fecfb2c8c0",
      "name": "Namef1177c14-b9be-4bb2-8e87-fd724560b04f"
    },
    {
      "id": "Iddd893b72-7e6f-4174-a331-2694eb3ce02b",
      "name": "Nameaef89fc6-7c02-4b0e-a5dc-0233ac97d6fc"
    },
    {
      "id": "Id2d5990b5-dd0e-49c0-b567-f16237346970",
      "name": "Name21df9846-54a1-4af0-a2ba-a82211ea8263"
    }
  ],
  "paging": {
    "page": 53,
    "perPage": 192,
    "total": 109,
    "pages": 194
  }
}
```
####Status codes: `200 OK` 

---

