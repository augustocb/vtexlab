---
layout: logistics
title: warehouse
category: logistics-api
---

#warehouse


| Descrição     | Recurso     |
| ------------- |:------------|
| Consultar todas os estoques| [GET /api/logistics/pvt/configuration/warehouses](#consultar-todas-os-estoques) |
| Consultar estoque| [GET /api/logistics/pvt/configuration/warehouses/{wareHouseId}](#consultar-estoque) |
| Salvar um estoque| [POST /api/logistics/pvt/configuration/warehouses](#salvar-um-estoque) |
| Excluir estoque| [POST /api/logistics/pvt/configuration/warehouses/{wareHouseId}/remove](#excluir-estoque) |

###Consultar todas os estoques

Obtém todos os estoques já cadastrados

```
GET /api/logistics/pvt/configuration/warehouses
```







####Response

<pre class="headers">
Status: `200 OK` `500 InternalServerError` 
</pre>

```json
[
  {
    "id": "f4d4edd9-16be-4e2d-9d63-89feaff26bb4",
    "name": "ecf11835-c853-43a2-a3e0-8b22ffc284c5",
    "warehouseDocks": [
      {
        "dockId": "DockId8d1fb905-afc3-4491-a523-a6d9decc7efc",
        "time": "00:00:00.0023376",
        "cost": 306.0
      },
      {
        "dockId": "DockId686c3bfa-24c4-4bfa-95af-4c8cd3227f61",
        "time": "00:00:00.0007114",
        "cost": 307.0
      },
      {
        "dockId": "DockId9713d6b3-cd81-4286-b9db-a577ad28b68d",
        "time": "00:00:00.0025551",
        "cost": 308.0
      }
    ]
  },
  {
    "id": "1266b772-2b8d-42f3-ae0f-df1537e18fa3",
    "name": "5f9fd73e-86f1-450c-a4e4-c4827e4c94bd",
    "warehouseDocks": [
      {
        "dockId": "DockId9b1330d4-7ba3-4046-aa91-90624d0e96a8",
        "time": "00:00:00.0016649",
        "cost": 309.0
      },
      {
        "dockId": "DockId17883b79-00a0-494e-bfc0-04fc93414388",
        "time": "00:00:00.0017286",
        "cost": 310.0
      },
      {
        "dockId": "DockId3313a181-6da5-4f92-b295-2cf83d01e817",
        "time": "00:00:00.0030342",
        "cost": 311.0
      }
    ]
  },
  {
    "id": "1fa80e2d-6f5d-4e3f-af6d-5f86b63b3eb2",
    "name": "3b249f66-ce3a-49ee-aec0-e7a4f28f47b1",
    "warehouseDocks": [
      {
        "dockId": "DockId40b0ef43-6b94-4e81-813f-b978f4106bc0",
        "time": "00:00:00.0028790",
        "cost": 312.0
      },
      {
        "dockId": "DockId278c3d90-2d19-47f0-9485-22cdffc98c25",
        "time": "00:00:00.0016712",
        "cost": 313.0
      },
      {
        "dockId": "DockId2bfe4dad-031c-4159-a155-e92f93659a16",
        "time": "00:00:00.0010486",
        "cost": 314.0
      }
    ]
  }
]
```
---

###Consultar estoque

Obtém um estoque com base em seu identificador único

```
GET /api/logistics/pvt/configuration/warehouses/{wareHouseId}
```



####Exemplo
```json
"4a8ea515-ed06-4fd6-92fe-5f43526216b6"
```


####Parâmetros de retorno
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id (*requerido*)| string     |  |
| slaType (*requerido*)| string     |  |
| name (*requerido*)| string     |  |
| scheduledDelivery | bool     |  |
| maxRangeDelivery | int     |  |
| dayOfWeekForDelivery | array     |  |
| [dayOfWeekForDelivery].dayOfWeek | DayOfWeek     |  |
| [dayOfWeekForDelivery].deliveryRanges | array     |  |
| [[dayOfWeekForDelivery].deliveryRanges].startTime | TimeSpan     |  |
| [[dayOfWeekForDelivery].deliveryRanges].endTime | TimeSpan     |  |
| [[dayOfWeekForDelivery].deliveryRanges].listPrice | decimal     |  |
| dayOfWeekBlockeds | array     |  |
| freightValue | array     |  |
| [freightValue].zipCodeStart | int     |  |
| [freightValue].zipCodeEnd | int     |  |
| [freightValue].weightStart | decimal     |  |
| [freightValue].weightEnd | decimal     |  |
| [freightValue].absoluteMoneyCost | decimal     |  |
| [freightValue].pricePercent | decimal     |  |
| [freightValue].pricePercentByWeight | decimal     |  |
| [freightValue].maxVolume | decimal     |  |
| [freightValue].timeCost | TimeSpan     |  |
| [freightValue].country | string     |  |
| [freightValue].operationType | object     | Utilizado pelo ko para identificar a operação a ser realizada no registro |
| [freightValue].restrictedFreights | array     |  |
| [[freightValue].restrictedFreights].zipCodeStart | int     |  |
| [[freightValue].restrictedFreights].zipCodeEnd | int     |  |
| [[freightValue].restrictedFreights].overTime | int     |  |
| [[freightValue].restrictedFreights].message | string     |  |
| factorCubicWeight | decimal     |  |
| freightTableProcessStatus | object     |  |
| freightTableValueError | string     |  |
| modals | array     |  |
| undefinedModals | bool     |  |
| deliveryOnWeekends | bool     |  |
| carrierSchedule | array     |  |
| [carrierSchedule].dayOfWeek | DayOfWeek     |  |
| [carrierSchedule].timeLimit | TimeSpan     |  |
| maxDimension | object     |  |
| maxDimension.weight | decimal     | Peso |
| maxDimension.height | decimal     | Altura |
| maxDimension.width | decimal     | Largura |
| maxDimension.length | decimal     | Comprimento |
| maxDimension.cubicweight | decimal     | Peso cúbico |
| maxDimension.maxSumDimension | decimal     |  |


####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
{
  "id": "eb773a05-77b4-4866-8725-a986167b4a40",
  "name": "0c53a4c0-605c-44f8-9b7a-b497351721ea",
  "warehouseDocks": [
    {
      "dockId": "DockId90e19df8-7ad4-4c95-8426-437dfa60e019",
      "time": "00:00:00.0031666",
      "cost": 315.0
    },
    {
      "dockId": "DockIdd6a22141-e720-4c28-afd3-491628f4651d",
      "time": "00:00:00.0020811",
      "cost": 316.0
    },
    {
      "dockId": "DockId1b1801e2-b814-4742-85ad-f35ca5175586",
      "time": "00:00:00.0022972",
      "cost": 317.0
    }
  ]
}
```
---

###Salvar um estoque

Cadastra/atualiza um estoque

```
POST /api/logistics/pvt/configuration/warehouses
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id    | string     | **Requerido**. |
| name    | string     | **Requerido**. |
| warehouseDocks    | array     |  |
| [warehouseDocks].dockId    | string     | **Requerido**. |
| [warehouseDocks].time    | TimeSpan     | **Requerido**. |
| [warehouseDocks].cost    | decimal     |  |


####Exemplo
```json
{
  "id": "78d5baea-1c10-47b4-a07d-1eb9340157ac",
  "name": "2faf5191-851f-4976-a520-9760dafc90a5",
  "warehouseDocks": [
    {
      "dockId": "DockId5fe5377e-1045-4131-aab3-b43bc7575c57",
      "time": "00:00:00.0030892",
      "cost": 318.0
    },
    {
      "dockId": "DockId45d9f425-2fda-4d39-9645-5b20f91b06e6",
      "time": "00:00:00.0024638",
      "cost": 319.0
    },
    {
      "dockId": "DockId42b042f7-aeb8-418d-a8c3-0edafb18b083",
      "time": "00:00:00.0031398",
      "cost": 320.0
    }
  ]
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

###Excluir estoque

Exclui um estoque com base em seu identificador único

```
POST /api/logistics/pvt/configuration/warehouses/{wareHouseId}/remove
```



####Exemplo
```json
"81b52562-739b-4f7c-8f84-124275baae0e"
```




####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
true
```
---

