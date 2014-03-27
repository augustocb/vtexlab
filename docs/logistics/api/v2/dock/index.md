---
layout: logistics
title: dock
category: logistics-api
---

#dock


| Descrição     | Recurso     |
| ------------- |:------------|
| Consultar todas as docas| [GET /api/logistics/pvt/configuration/docks](#consultar-todas-as-docas) |
| Consultar doca| [GET /api/logistics/pvt/configuration/docks/{dockId}](#consultar-doca) |
| Salvar uma doca| [POST /api/logistics/pvt/configuration/docks](#salvar-uma-doca) |
| Excluir doca| [POST /api/logistics/pvt/configuration/docks/{dockId}/remove](#excluir-doca) |

###Consultar todas as docas

Obtém todas as docas cadastradas

```
GET /api/logistics/pvt/configuration/docks
```





####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único. Não pode ser alterado |
| name (*requerido*)| string     | Nome/descrição da doca. |
| priority | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels | array     | Canais de venda associados à doca |
| freightTableIds | array     | Ids das transportadoras associadas à doca |


####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
null
```
---

###Consultar doca

Obtém uma doca com base no seu identificador único

```
GET /api/logistics/pvt/configuration/docks/{dockId}
```





####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     | Identificador único. Não pode ser alterado |
| name (*requerido*)| string     | Nome/descrição da doca. |
| priority | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels | array     | Canais de venda associados à doca |
| freightTableIds | array     | Ids das transportadoras associadas à doca |


####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
null
```
---

###Salvar uma doca

Cadastra/atualiza uma doca

```
POST /api/logistics/pvt/configuration/docks
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id    | string     | **Requerido**.Identificador único. Não pode ser alterado |
| name    | string     | **Requerido**.Nome/descrição da doca. |
| priority    | int     | Valor que define a ordem de priorização da doca no cálculo de SLA. Quanto menor o valor, mais prioritária é a doca |
| dockTimeFake    | TimeSpan     | Tempo para manuseio na doca |
| timeFakeOverhead    | TimeSpan     | Tempo utilizado no desempate no cálculo de SLA. Quanto maior o valor, menos prioritária é a doca |
| salesChannels    | array     | Canais de venda associados à doca |
| freightTableIds    | array     | Ids das transportadoras associadas à doca |


####Exemplo
```json
null
```




####Response

<pre class="headers">
Status: `200 OK` `400 BadRequest` `500 InternalServerError` 
</pre>

```json
false
```
---

###Excluir doca

Exclui uma doca com base no seu identificador único

```
POST /api/logistics/pvt/configuration/docks/{dockId}/remove
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
true
```
---

