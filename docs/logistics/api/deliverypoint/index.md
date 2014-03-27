---
layout: logistics
title: deliverypoint
category: logistics-api
---

#deliverypoint


| Descrição     | Recurso     |
| ------------- |:------------|
| Consulta todas os pontos de entrega| [GET /api/logistics/pvt/configuration/deliverypoint](#consulta-todas-os-pontos-de-entrega) |
| Consulta ponto de entrega| [GET /api/logistics/pvt/configuration/deliverypoint/{deliverypointId}](#consulta-ponto-de-entrega) |
| Salva um ponto de entrega| [POST /api/logistics/pvt/configuration/deliverypoint](#salva-um-ponto-de-entrega) |
| Exclui um ponto de entrega| [DELETE /api/logistics/pvt/configuration/deliverypoint/{deliveryPointId}/remove](#exclui-um-ponto-de-entrega) |

###Consulta todas os pontos de entrega

Obtém todos os pontos de entrega

```
GET /api/logistics/pvt/configuration/deliverypoint
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
[
  {
    "id": "Id474572c5-f481-40d2-84d9-d6a13e4384db",
    "name": "9574ab69-9fc6-4107-959c-f965a7aba2d2",
    "zipCode": 24600,
    "latitude": 660.0,
    "longitude": 6187.0
  },
  {
    "id": "Ida18cf4f2-93a1-492a-aeef-588176740655",
    "name": "df4ea77b-855a-4d99-b4ed-5759ec31ee1b",
    "zipCode": 15233,
    "latitude": 31524.0,
    "longitude": 31606.0
  },
  {
    "id": "Id5b11ae47-60ea-4d49-a08a-91d28ee0fc40",
    "name": "36cbd918-76a3-4741-8d33-66a14401b694",
    "zipCode": 22847,
    "latitude": 27609.0,
    "longitude": 11261.0
  }
]
```
---

###Consulta ponto de entrega

Obtém um ponto de entrega com base no seu identificador único

```
GET /api/logistics/pvt/configuration/deliverypoint/{deliverypointId}
```



####Exemplo
```json
"c972ab1b-4dc1-434f-91f7-d4c7763d4805"
```


####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único |
| name (*requerido*)| string     | Nome/Descrição da loja |
| zipCode (*requerido*)| int     | Cep da loja |
| latitude | decimal     | Latitude |
| longitude | decimal     | Longitude |


####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
{
  "id": "Id16e2bc3d-14dd-48e6-a2db-aa21250aa1dc",
  "name": "5efd51c8-402f-414c-8f45-4ec51f474609",
  "zipCode": 3303,
  "latitude": 20964.0,
  "longitude": 17029.0
}
```
---

###Salva um ponto de entrega

Cadastra/atualiza um ponto de entrega

```
POST /api/logistics/pvt/configuration/deliverypoint
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id    | string     | **Requerido**.Identificador único |
| name    | string     | **Requerido**.Nome/Descrição da loja |
| zipCode    | int     | **Requerido**.Cep da loja |
| latitude    | decimal     | Latitude |
| longitude    | decimal     | Longitude |


####Exemplo
```json
{
  "id": "Id8bc54150-f070-469d-9716-05e9ee649d6f",
  "name": "9e44c77d-5618-4663-b5b5-51603b074394",
  "zipCode": 20405,
  "latitude": 30665.0,
  "longitude": 22085.0
}
```




####Response

<pre class="headers">
Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
</pre>

```json
false
```
---

###Exclui um ponto de entrega

Exclui um ponto de entrega com base no seu identificador único

```
DELETE /api/logistics/pvt/configuration/deliverypoint/{deliveryPointId}/remove
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
true
```
---

