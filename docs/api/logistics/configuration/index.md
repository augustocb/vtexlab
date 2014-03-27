---
layout: api
title: configuration
category: api-logistics
---

#configuration

| Recurso       | Descrição     |
| ------------- |:--------------|
| [POST /api/logistics/pvt/configuration/docks](#salva-uma-doca)  | Salva uma doca|
| [GET /api/logistics/pvt/configuration/docks](#obtém-todas-as-docas)  | Obtém todas as docas|
| [GET /api/logistics/pvt/configuration/docks/{dockId}](#obtém-doca-pelo-id)  | Obtém doca pelo Id|
| [POST /api/logistics/pvt/configuration/docks/{dockId}/remove](#exclui-doca-pelo-id)  | Exclui doca pelo Id|

###Salva uma doca
Cadastra/atualiza uma doca

```
POST /api/logistics/pvt/configuration/docks
```

####Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único. Não pode ser alterado |
| name (*requerido*)| string     | Nome/descrição da doca. |
| priority | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels | array     | Canais de venda associados à doca |
| salesChannel | string     | Obsoleto. Utilizar o campo SalesChannels |
| freightTableIds | array     | Ids das transportadoras associadas à doca |

####Exemplo
```json
{
  "id": "133c26c",
  "name": "Doca SP (Barueri)",
  "salesChannels": [
    "1",
    "2",
    "3"
  ],
  "freightTableIds": [
    "185",
    "16df4b9",
    "190",
    "229",
    "214",
    "215",
    "212",
    "230",
    "213",
    "1792d0e",
    "218",
    "401",
    "406",
    "300",
    "400",
    "191c282",
    "10c74a4",
    "325",
    "326",
    "327",
    "323",
    "228",
    "228_1",
    "324"
  ]
}
```
####Response
```json
false
```
####Status codes: `200 OK` `400 BadRequest` `500 InternalServerError` 

---

##Obtém todas as docas
Obtém todas as docas cadastradas

####URL do Recurso:
```http
GET /api/logistics/pvt/configuration/docks HTTP/1.1
```

####Parâmetros de retorno:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único. Não pode ser alterado |
| name (*requerido*)| string     | Nome/descrição da doca. |
| priority | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels | array     | Canais de venda associados à doca |
| salesChannel | string     | Obsoleto. Utilizar o campo SalesChannels |
| freightTableIds | array     | Ids das transportadoras associadas à doca |
####Exemplo de retorno:
```json
[
  {
    "id": "133c26c",
    "name": "Doca SP (Barueri)",
    "salesChannels": [
      "1",
      "2",
      "3"
    ],
    "freightTableIds": [
      "185",
      "16df4b9",
      "190",
      "229",
      "214",
      "215",
      "212",
      "230",
      "213",
      "1792d0e",
      "218",
      "401",
      "406",
      "300",
      "400",
      "191c282",
      "10c74a4",
      "325",
      "326",
      "327",
      "323",
      "228",
      "228_1",
      "324"
    ]
  },
  {
    "id": "1",
    "name": "Doca SP (Curtume)",
    "salesChannels": [
      "1",
      "2",
      "3"
    ],
    "freightTableIds": [
      "214",
      "185",
      "190",
      "218",
      "229",
      "230",
      "215",
      "212",
      "213",
      "16df4b9",
      "1792d0e",
      "401",
      "406",
      "300",
      "400",
      "191c282",
      "10c74a4",
      "325",
      "326",
      "327",
      "323",
      "228",
      "324",
      "228_1"
    ]
  }
]
```
####Status codes: `200 OK` `404 NotFound` `500 InternalServerError` 

---

##Obtém doca pelo Id
Obtém uma doca com base no seu identificador único

####URL do Recurso:
```http
GET /api/logistics/pvt/configuration/docks/{dockId} HTTP/1.1
```

####Parâmetros de retorno:
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único. Não pode ser alterado |
| name (*requerido*)| string     | Nome/descrição da doca. |
| priority | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels | array     | Canais de venda associados à doca |
| salesChannel | string     | Obsoleto. Utilizar o campo SalesChannels |
| freightTableIds | array     | Ids das transportadoras associadas à doca |
####Exemplo de retorno:
```json
{
  "id": "133c26c",
  "name": "Doca SP (Barueri)",
  "salesChannels": [
    "1",
    "2",
    "3"
  ],
  "freightTableIds": [
    "185",
    "16df4b9",
    "190",
    "229",
    "214",
    "215",
    "212",
    "230",
    "213",
    "1792d0e",
    "218",
    "401",
    "406",
    "300",
    "400",
    "191c282",
    "10c74a4",
    "325",
    "326",
    "327",
    "323",
    "228",
    "228_1",
    "324"
  ]
}
```
####Status codes: `200 OK` `404 NotFound` `500 InternalServerError` 

---

##Exclui doca pelo Id
Exclui uma doca com base no seu identificador único

####URL do Recurso:
```http
POST /api/logistics/pvt/configuration/docks/{dockId}/remove HTTP/1.1
```

####Exemplo de retorno:
```json
true
```
####Status codes: `200 OK` `404 NotFound` `500 InternalServerError` 

---

