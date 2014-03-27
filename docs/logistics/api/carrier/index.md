---
layout: logistics
title: carrier
category: logistics-api
---

#carrier


| Descrição     | Recurso     |
| ------------- |:------------|
| Consulta todas as transportadoras| [GET /api/logistics/pvt/configuration/carriers](#consulta-todas-as-transportadoras) |
| Consulta transportadora| [GET /api/logistics/pvt/configuration/carriers/{carrierId}](#consulta-transportadora) |
| Salva uma transportadora| [POST /api/logistics/pvt/configuration/carriers](#salva-uma-transportadora) |
| Exclui transportadora| [POST /api/logistics/pvt/configuration/carriers/{carrierId}/remove](#exclui-transportadora) |
| Consulta tipos de entrega| [GET /api/logistics/pvt/configuration/slatypes](#consulta-tipos-de-entrega) |
| Inclui bloqueio de agendadamento| [POST /api/logistics/pvt/configuration/carriers/{carrierId}/adddayofweekblocked](#inclui-bloqueio-de-agendadamento) |
| Consulta bloqueios de agendamentos| [GET /api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked](#consulta-bloqueios-de-agendamentos) |
| Remove bloqueio de agendamento| [POST /api/logistics/pvt/configuration/carriers/{carrierId}/removedayofweekblocked](#remove-bloqueio-de-agendamento) |

###Consulta todas as transportadoras

Obtém todas as transportadoras

```
GET /api/logistics/pvt/configuration/carriers
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
[
  {
    "id": "Id7ed46fc3-0189-46b1-a3f7-2122a353c4a2",
    "slaType": "SlaTypea23f60a5-41a0-462b-a0d8-f15e240071b7",
    "name": "Name80382031-ade2-4508-9d46-50c06b4b7164",
    "scheduledDelivery": true,
    "maxRangeDelivery": 239,
    "dayOfWeekForDelivery": [
      {
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000160",
            "endTime": "00:00:00.0000057",
            "listPrice": 111.0
          },
          {
            "startTime": "00:00:00.0000016",
            "endTime": "00:00:00.0000022",
            "listPrice": 112.0
          },
          {
            "startTime": "00:00:00.0000215",
            "endTime": "00:00:00.0000201",
            "listPrice": 113.0
          }
        ]
      },
      {
        "dayOfWeek": 1,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000200",
            "endTime": "00:00:00.0000117",
            "listPrice": 114.0
          },
          {
            "startTime": "00:00:00.0000042",
            "endTime": "00:00:00.0000171",
            "listPrice": 115.0
          },
          {
            "startTime": "00:00:00.0000128",
            "endTime": "00:00:00.0000192",
            "listPrice": 116.0
          }
        ]
      },
      {
        "dayOfWeek": 2,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000154",
            "endTime": "00:00:00.0000176",
            "listPrice": 117.0
          },
          {
            "startTime": "00:00:00.0000236",
            "endTime": "00:00:00.0000072",
            "listPrice": 118.0
          },
          {
            "startTime": "00:00:00.0000188",
            "endTime": "00:00:00.0000114",
            "listPrice": 119.0
          }
        ]
      }
    ],
    "dayOfWeekBlockeds": [
      "2016-02-24T00:35:15.6989633",
      "2014-11-04T01:26:46.5321893",
      "2013-02-26T06:35:30.1238088"
    ],
    "freightValue": [
      {
        "zipCodeStart": 120,
        "zipCodeEnd": 121,
        "weightStart": 122.0,
        "weightEnd": 123.0,
        "absoluteMoneyCost": 124.0,
        "pricePercent": 125.0,
        "pricePercentByWeight": 126.0,
        "maxVolume": 127.0,
        "timeCost": "00:00:00.0000144",
        "country": "Country402a9e04-d815-4e69-858c-0540142286bb",
        "restrictedFreights": [
          {
            "zipCodeStart": 24,
            "zipCodeEnd": 248,
            "overTime": 62,
            "message": "Messagece235518-3424-4ffc-9698-d8a59fb65dc7"
          },
          {
            "zipCodeStart": 120,
            "zipCodeEnd": 246,
            "overTime": 138,
            "message": "Messagec78ee207-7f09-49f2-b218-99ea08a4733e"
          },
          {
            "zipCodeStart": 150,
            "zipCodeEnd": 44,
            "overTime": 51,
            "message": "Messagefe6ae378-b672-4835-87f4-5d46d10ee775"
          }
        ]
      },
      {
        "zipCodeStart": 128,
        "zipCodeEnd": 129,
        "weightStart": 130.0,
        "weightEnd": 131.0,
        "absoluteMoneyCost": 132.0,
        "pricePercent": 133.0,
        "pricePercentByWeight": 134.0,
        "maxVolume": 135.0,
        "timeCost": "00:00:00.0000194",
        "country": "Country11f7913f-880c-45b2-8d84-a9601d251d33",
        "operationType": 1,
        "restrictedFreights": [
          {
            "zipCodeStart": 88,
            "zipCodeEnd": 175,
            "overTime": 168,
            "message": "Message021258cd-c50d-4b9d-a1f5-6879ef3bcaa7"
          },
          {
            "zipCodeStart": 46,
            "zipCodeEnd": 74,
            "overTime": 227,
            "message": "Messagec8e9bda7-94f8-4ef1-bd6e-041c54be2206"
          },
          {
            "zipCodeStart": 48,
            "zipCodeEnd": 143,
            "overTime": 1,
            "message": "Messagede6330aa-2dde-41b7-b108-f5141c112897"
          }
        ]
      },
      {
        "zipCodeStart": 136,
        "zipCodeEnd": 137,
        "weightStart": 138.0,
        "weightEnd": 139.0,
        "absoluteMoneyCost": 140.0,
        "pricePercent": 141.0,
        "pricePercentByWeight": 142.0,
        "maxVolume": 143.0,
        "timeCost": "00:00:00.0000198",
        "country": "Countrye34fbeb7-1948-4314-b0ff-af324ece3fc9",
        "operationType": 2,
        "restrictedFreights": [
          {
            "zipCodeStart": 105,
            "zipCodeEnd": 98,
            "overTime": 36,
            "message": "Message9aecdee9-0016-486e-9e31-30939351ac93"
          },
          {
            "zipCodeStart": 132,
            "zipCodeEnd": 6,
            "overTime": 178,
            "message": "Message58ffb647-dce7-4123-be18-bf5d1555eb7c"
          },
          {
            "zipCodeStart": 21,
            "zipCodeEnd": 186,
            "overTime": 205,
            "message": "Messagefd8a7d09-a236-430c-ab90-28976d36a3b4"
          }
        ]
      }
    ],
    "factorCubicWeight": 190.0,
    "freightTableValueError": "FreightTableValueError1d10a69a-c977-41db-a78e-6f6a79c31be7",
    "modals": [
      "f8f31f62-0f43-4bae-a686-6bb0101ff17c",
      "ae0f3890-eeb2-469c-8ec0-c14f0be2aac4",
      "fd22e7c1-12b8-4f4a-9856-aaf2ff9a4226"
    ],
    "deliveryOnWeekends": true,
    "carrierSchedule": [
      {
        "dayOfWeek": 3,
        "timeLimit": "00:00:00.0000207"
      },
      {
        "dayOfWeek": 4,
        "timeLimit": "00:00:00.0000004"
      },
      {
        "dayOfWeek": 5,
        "timeLimit": "00:00:00.0000101"
      }
    ],
    "maxDimension": {
      "weight": 144.0,
      "height": 145.0,
      "width": 146.0,
      "length": 147.0,
      "cubicweight": 148.0,
      "maxSumDimension": 149.0
    }
  },
  {
    "id": "Id19a617d2-e5f1-4d33-8ca1-1fcfb432747b",
    "slaType": "SlaTypeca0f1eba-e2f0-4b38-91f9-ba6a1e70dc94",
    "name": "Namea5f5af1e-51d4-4c7e-bb98-ba7bea6e8c3f",
    "maxRangeDelivery": 232,
    "dayOfWeekForDelivery": [
      {
        "dayOfWeek": 6,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000231",
            "endTime": "00:00:00.0000167",
            "listPrice": 150.0
          },
          {
            "startTime": "00:00:00.0000085",
            "endTime": "00:00:00.0000063",
            "listPrice": 151.0
          },
          {
            "startTime": "00:00:00.0000197",
            "endTime": "00:00:00.0000222",
            "listPrice": 152.0
          }
        ]
      },
      {
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000070",
            "endTime": "00:00:00.0000035",
            "listPrice": 153.0
          },
          {
            "startTime": "00:00:00.0000103",
            "endTime": "00:00:00.0000148",
            "listPrice": 154.0
          },
          {
            "startTime": "00:00:00.0000061",
            "endTime": "00:00:00.0000097",
            "listPrice": 155.0
          }
        ]
      },
      {
        "dayOfWeek": 1,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000007",
            "endTime": "00:00:00.0000252",
            "listPrice": 156.0
          },
          {
            "startTime": "00:00:00.0000019",
            "endTime": "00:00:00.0000247",
            "listPrice": 157.0
          },
          {
            "startTime": "00:00:00.0000204",
            "endTime": "00:00:00.0000002",
            "listPrice": 158.0
          }
        ]
      }
    ],
    "dayOfWeekBlockeds": [
      "2015-12-16T12:30:14.2971859",
      "2012-07-14T02:38:54.764273",
      "2012-05-20T23:38:03.3650402"
    ],
    "freightValue": [
      {
        "zipCodeStart": 159,
        "zipCodeEnd": 160,
        "weightStart": 161.0,
        "weightEnd": 162.0,
        "absoluteMoneyCost": 163.0,
        "pricePercent": 164.0,
        "pricePercentByWeight": 165.0,
        "maxVolume": 166.0,
        "timeCost": "00:00:00.0000163",
        "country": "Country4d12bdd8-ff60-4638-979b-13bd30d74fcb",
        "operationType": 3,
        "restrictedFreights": [
          {
            "zipCodeStart": 125,
            "zipCodeEnd": 140,
            "overTime": 133,
            "message": "Messageb5c27426-effc-4c82-8df7-0fe372c32d10"
          },
          {
            "zipCodeStart": 15,
            "zipCodeEnd": 177,
            "overTime": 78,
            "message": "Messageeeeda0d1-403d-47c8-8bb6-f15dd54cf911"
          },
          {
            "zipCodeStart": 241,
            "zipCodeEnd": 212,
            "overTime": 213,
            "message": "Message61dbf965-f2c5-4931-a02a-5cb8e7eb14e7"
          }
        ]
      },
      {
        "zipCodeStart": 167,
        "zipCodeEnd": 168,
        "weightStart": 169.0,
        "weightEnd": 170.0,
        "absoluteMoneyCost": 171.0,
        "pricePercent": 172.0,
        "pricePercentByWeight": 173.0,
        "maxVolume": 174.0,
        "timeCost": "00:00:00.0000090",
        "country": "Country810b3c8b-5739-40c2-9839-c7920a3608ea",
        "restrictedFreights": [
          {
            "zipCodeStart": 216,
            "zipCodeEnd": 196,
            "overTime": 108,
            "message": "Messagec374b103-0903-4168-a350-7c73eda155d2"
          },
          {
            "zipCodeStart": 211,
            "zipCodeEnd": 156,
            "overTime": 40,
            "message": "Message50a739b4-6e5e-46b1-ba56-a86fe1c9953d"
          },
          {
            "zipCodeStart": 153,
            "zipCodeEnd": 193,
            "overTime": 191,
            "message": "Message8beb658e-7550-4511-8f5f-dc40d72e1cb3"
          }
        ]
      },
      {
        "zipCodeStart": 175,
        "zipCodeEnd": 176,
        "weightStart": 177.0,
        "weightEnd": 178.0,
        "absoluteMoneyCost": 179.0,
        "pricePercent": 180.0,
        "pricePercentByWeight": 181.0,
        "maxVolume": 182.0,
        "timeCost": "00:00:00.0000218",
        "country": "Country74b46219-622a-43a4-9997-4b770c140bbd",
        "operationType": 1,
        "restrictedFreights": [
          {
            "zipCodeStart": 166,
            "zipCodeEnd": 253,
            "overTime": 179,
            "message": "Message24d53a62-7c0d-44da-99da-8939412552fa"
          },
          {
            "zipCodeStart": 82,
            "zipCodeEnd": 43,
            "overTime": 185,
            "message": "Message6e7f349a-2103-4e11-9844-c4873fbf507f"
          },
          {
            "zipCodeStart": 210,
            "zipCodeEnd": 107,
            "overTime": 170,
            "message": "Messagecfca151d-9c7c-4060-a5d4-81bd5ff0803d"
          }
        ]
      }
    ],
    "factorCubicWeight": 229.0,
    "freightTableProcessStatus": 1,
    "freightTableValueError": "FreightTableValueError72d0bc33-4a5d-4f1e-97c2-0fe7b71d6ba7",
    "modals": [
      "88167a1b-a8ec-4599-9162-f3590266df89",
      "9ac1a670-f862-4120-9f1a-6fc94aeeef63",
      "e72c5866-0ea8-4573-9fba-63996102c271"
    ],
    "undefinedModals": true,
    "carrierSchedule": [
      {
        "dayOfWeek": 2,
        "timeLimit": "00:00:00.0000066"
      },
      {
        "dayOfWeek": 3,
        "timeLimit": "00:00:00.0000135"
      },
      {
        "dayOfWeek": 4,
        "timeLimit": "00:00:00.0000230"
      }
    ],
    "maxDimension": {
      "weight": 183.0,
      "height": 184.0,
      "width": 185.0,
      "length": 186.0,
      "cubicweight": 187.0,
      "maxSumDimension": 188.0
    }
  },
  {
    "id": "Ideb13229b-7d13-4d3f-b223-28f70128bca6",
    "slaType": "SlaType1ffded16-2c43-4450-aa3c-d27cd73552e1",
    "name": "Name79dfb9b9-76bc-46de-8545-a72a40c7be41",
    "scheduledDelivery": true,
    "maxRangeDelivery": 162,
    "dayOfWeekForDelivery": [
      {
        "dayOfWeek": 5,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000237",
            "endTime": "00:00:00.0000025",
            "listPrice": 189.0
          },
          {
            "startTime": "00:00:00.0000234",
            "endTime": "00:00:00.0000081",
            "listPrice": 190.0
          },
          {
            "startTime": "00:00:00.0000235",
            "endTime": "00:00:00.0000091",
            "listPrice": 191.0
          }
        ]
      },
      {
        "dayOfWeek": 6,
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000249",
            "endTime": "00:00:00.0000076",
            "listPrice": 192.0
          },
          {
            "startTime": "00:00:00.0000250",
            "endTime": "00:00:00.0000106",
            "listPrice": 193.0
          },
          {
            "startTime": "00:00:00.0000041",
            "endTime": "00:00:00.0000055",
            "listPrice": 194.0
          }
        ]
      },
      {
        "deliveryRanges": [
          {
            "startTime": "00:00:00.0000199",
            "endTime": "00:00:00.0000149",
            "listPrice": 195.0
          },
          {
            "startTime": "00:00:00.0000147",
            "endTime": "00:00:00.0000071",
            "listPrice": 196.0
          },
          {
            "startTime": "00:00:00.0000033",
            "endTime": "00:00:00.0000221",
            "listPrice": 197.0
          }
        ]
      }
    ],
    "dayOfWeekBlockeds": [
      "2016-02-11T19:07:10.3653159",
      "2012-03-26T18:54:45.2097867",
      "2014-03-03T03:15:32.1453644"
    ],
    "freightValue": [
      {
        "zipCodeStart": 198,
        "zipCodeEnd": 199,
        "weightStart": 200.0,
        "weightEnd": 201.0,
        "absoluteMoneyCost": 202.0,
        "pricePercent": 203.0,
        "pricePercentByWeight": 204.0,
        "maxVolume": 205.0,
        "timeCost": "00:00:00.0000129",
        "country": "Countrydb493958-49e8-435e-adfe-df384a587438",
        "operationType": 2,
        "restrictedFreights": [
          {
            "zipCodeStart": 251,
            "zipCodeEnd": 172,
            "overTime": 11,
            "message": "Message6774ce03-8109-4a01-a35f-a9160d099b3b"
          },
          {
            "zipCodeStart": 141,
            "zipCodeEnd": 18,
            "overTime": 115,
            "message": "Message0ce5ab65-ab86-4c55-88f6-fa07fa9009d5"
          },
          {
            "zipCodeStart": 20,
            "zipCodeEnd": 32,
            "overTime": 136,
            "message": "Messaged3e1a3ae-6b22-49fc-9c96-88e42d430a09"
          }
        ]
      },
      {
        "zipCodeStart": 206,
        "zipCodeEnd": 207,
        "weightStart": 208.0,
        "weightEnd": 209.0,
        "absoluteMoneyCost": 210.0,
        "pricePercent": 211.0,
        "pricePercentByWeight": 212.0,
        "maxVolume": 213.0,
        "timeCost": "00:00:00.0000067",
        "country": "Countrye209c0e4-c3c0-4b56-ab98-3c4f7c10f0b6",
        "operationType": 3,
        "restrictedFreights": [
          {
            "zipCodeStart": 94,
            "zipCodeEnd": 100,
            "overTime": 121,
            "message": "Message57027d41-17db-4292-8876-e325614e32d6"
          },
          {
            "zipCodeStart": 49,
            "zipCodeEnd": 131,
            "overTime": 86,
            "message": "Messageccfc103e-08e5-4037-872a-ee32cb66560e"
          },
          {
            "zipCodeStart": 87,
            "zipCodeEnd": 254,
            "overTime": 80,
            "message": "Message93888abf-b139-4a31-8916-88b624ea7aff"
          }
        ]
      },
      {
        "zipCodeStart": 214,
        "zipCodeEnd": 215,
        "weightStart": 216.0,
        "weightEnd": 217.0,
        "absoluteMoneyCost": 218.0,
        "pricePercent": 219.0,
        "pricePercentByWeight": 220.0,
        "maxVolume": 221.0,
        "timeCost": "00:00:00.0011814",
        "country": "Country9be8d878-4353-4150-8024-a6f587aab87e",
        "restrictedFreights": [
          {
            "zipCodeStart": 28752,
            "zipCodeEnd": 7670,
            "overTime": 4387,
            "message": "Message15749bb2-82b4-4594-8c94-3ca8f33ff3ba"
          },
          {
            "zipCodeStart": 26280,
            "zipCodeEnd": 21055,
            "overTime": 6548,
            "message": "Message60a758ee-add4-452f-af1d-d3f28d8d0752"
          },
          {
            "zipCodeStart": 26971,
            "zipCodeEnd": 21485,
            "overTime": 7192,
            "message": "Messagec6d01695-49f8-41f6-a2c3-fb72cd3243bd"
          }
        ]
      }
    ],
    "factorCubicWeight": 23426.0,
    "freightTableProcessStatus": 2,
    "freightTableValueError": "FreightTableValueErroraeab6306-b149-486c-8547-10b340105010",
    "modals": [
      "99a806df-0755-458f-873b-1425b1962c44",
      "4a3396d7-dd16-4fa0-8ad5-e08d30630a4d",
      "bcb1c4fb-73d4-4cab-941c-12c3329eb3ff"
    ],
    "deliveryOnWeekends": true,
    "carrierSchedule": [
      {
        "dayOfWeek": 1,
        "timeLimit": "00:00:00.0020802"
      },
      {
        "dayOfWeek": 2,
        "timeLimit": "00:00:00.0003535"
      },
      {
        "dayOfWeek": 3,
        "timeLimit": "00:00:00.0028671"
      }
    ],
    "maxDimension": {
      "weight": 222.0,
      "height": 223.0,
      "width": 224.0,
      "length": 225.0,
      "cubicweight": 226.0,
      "maxSumDimension": 227.0
    }
  }
]
```
---

###Consulta transportadora

Obtém uma transportadora com base no seu identificador único

```
GET /api/logistics/pvt/configuration/carriers/{carrierId}
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
  "id": "Idee5bc955-c161-4e7e-9f31-cc5be078a9a2",
  "slaType": "SlaType3d5bf637-1dbc-4776-a7a9-d16cab8f8d66",
  "name": "Name9c1e5f1e-1c15-43d4-b766-911e3d7e549a",
  "maxRangeDelivery": 8027,
  "dayOfWeekForDelivery": [
    {
      "dayOfWeek": 4,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0010146",
          "endTime": "00:00:00.0007044",
          "listPrice": 228.0
        },
        {
          "startTime": "00:00:00.0030968",
          "endTime": "00:00:00.0012434",
          "listPrice": 229.0
        },
        {
          "startTime": "00:00:00.0024707",
          "endTime": "00:00:00.0002781",
          "listPrice": 230.0
        }
      ]
    },
    {
      "dayOfWeek": 5,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0012416",
          "endTime": "00:00:00.0015753",
          "listPrice": 231.0
        },
        {
          "startTime": "00:00:00.0003971",
          "endTime": "00:00:00.0030273",
          "listPrice": 232.0
        },
        {
          "startTime": "00:00:00.0025530",
          "endTime": "00:00:00.0014070",
          "listPrice": 233.0
        }
      ]
    },
    {
      "dayOfWeek": 6,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0016548",
          "endTime": "00:00:00.0020541",
          "listPrice": 234.0
        },
        {
          "startTime": "00:00:00.0025199",
          "endTime": "00:00:00.0019849",
          "listPrice": 235.0
        },
        {
          "startTime": "00:00:00.0013573",
          "endTime": "00:00:00.0029481",
          "listPrice": 236.0
        }
      ]
    }
  ],
  "dayOfWeekBlockeds": [
    "2012-06-21T02:21:43.102976",
    "2013-09-12T14:53:57.6646613",
    "2014-07-08T17:47:18.3292003"
  ],
  "freightValue": [
    {
      "zipCodeStart": 237,
      "zipCodeEnd": 238,
      "weightStart": 239.0,
      "weightEnd": 240.0,
      "absoluteMoneyCost": 241.0,
      "pricePercent": 242.0,
      "pricePercentByWeight": 243.0,
      "maxVolume": 244.0,
      "timeCost": "00:00:00.0021964",
      "country": "Countrye289a396-ee45-4da6-a7fa-52daa6824589",
      "operationType": 1,
      "restrictedFreights": [
        {
          "zipCodeStart": 27362,
          "zipCodeEnd": 6186,
          "overTime": 14101,
          "message": "Message6927e848-1122-4df6-9a0a-6ae980f1f8df"
        },
        {
          "zipCodeStart": 8476,
          "zipCodeEnd": 14608,
          "overTime": 24445,
          "message": "Message15e359a7-f4e6-4dfc-a3ee-ceaef1f30ab1"
        },
        {
          "zipCodeStart": 12072,
          "zipCodeEnd": 27544,
          "overTime": 7929,
          "message": "Message47773d1c-9e44-4383-8cea-b5cf2ee3cb7e"
        }
      ]
    },
    {
      "zipCodeStart": 245,
      "zipCodeEnd": 246,
      "weightStart": 247.0,
      "weightEnd": 248.0,
      "absoluteMoneyCost": 249.0,
      "pricePercent": 250.0,
      "pricePercentByWeight": 251.0,
      "maxVolume": 252.0,
      "timeCost": "00:00:00.0005810",
      "country": "Countryadd63b98-0704-48fd-b118-f74eed264f5d",
      "operationType": 2,
      "restrictedFreights": [
        {
          "zipCodeStart": 24795,
          "zipCodeEnd": 17714,
          "overTime": 19963,
          "message": "Message721b1e7b-d85c-4b5c-81c9-93562b1106a3"
        },
        {
          "zipCodeStart": 13978,
          "zipCodeEnd": 17650,
          "overTime": 15720,
          "message": "Message85120579-2194-40e0-9352-2f31e6631dd5"
        },
        {
          "zipCodeStart": 26101,
          "zipCodeEnd": 1254,
          "overTime": 12405,
          "message": "Messageb55663c3-1e68-4d95-ac3e-b62271c23d02"
        }
      ]
    },
    {
      "zipCodeStart": 253,
      "zipCodeEnd": 254,
      "weightStart": 255.0,
      "weightEnd": 256.0,
      "absoluteMoneyCost": 257.0,
      "pricePercent": 258.0,
      "pricePercentByWeight": 259.0,
      "maxVolume": 260.0,
      "timeCost": "00:00:00.0008139",
      "country": "Countrya3d8d183-11a0-4722-9ec8-81bdf8b9584e",
      "operationType": 3,
      "restrictedFreights": [
        {
          "zipCodeStart": 10965,
          "zipCodeEnd": 8328,
          "overTime": 6188,
          "message": "Message55b982a6-717d-4ac7-8b79-a87123854012"
        },
        {
          "zipCodeStart": 24322,
          "zipCodeEnd": 13383,
          "overTime": 25073,
          "message": "Messagea1e9070e-ad05-4762-854a-4946eca5debc"
        },
        {
          "zipCodeStart": 24192,
          "zipCodeEnd": 17543,
          "overTime": 29917,
          "message": "Message4e878c7e-0027-45bd-b8f9-c45abdff9818"
        }
      ]
    }
  ],
  "factorCubicWeight": 21103.0,
  "freightTableProcessStatus": 3,
  "freightTableValueError": "FreightTableValueError692c1f23-81b5-4a20-9f33-f922657b8fe2",
  "modals": [
    "57043dc5-91c9-456a-be50-cd8535bb0b3f",
    "62c2553f-14ab-4f47-9e6e-5cb77a719a64",
    "f57ee175-c886-4835-bbe2-39f761eef3d5"
  ],
  "undefinedModals": true,
  "carrierSchedule": [
    {
      "timeLimit": "00:00:00.0021157"
    },
    {
      "dayOfWeek": 1,
      "timeLimit": "00:00:00.0011986"
    },
    {
      "dayOfWeek": 2,
      "timeLimit": "00:00:00.0029592"
    }
  ],
  "maxDimension": {
    "weight": 261.0,
    "height": 262.0,
    "width": 263.0,
    "length": 264.0,
    "cubicweight": 265.0,
    "maxSumDimension": 266.0
  }
}
```
---

###Salva uma transportadora

Cadastra/atualiza uma transportadora

```
POST /api/logistics/pvt/configuration/carriers
```

###Parâmetros
| Nome           | Tipo           | Descrição     |
| -------------  |--------------  |-------------- |
| id    | string     | **Requerido**. |
| slaType    | string     | **Requerido**. |
| name    | string     | **Requerido**. |
| scheduledDelivery    | bool     |  |
| maxRangeDelivery    | int     |  |
| dayOfWeekForDelivery    | array     |  |
| [dayOfWeekForDelivery].dayOfWeek    | DayOfWeek     |  |
| [dayOfWeekForDelivery].deliveryRanges    | array     |  |
| [[dayOfWeekForDelivery].deliveryRanges].startTime    | TimeSpan     |  |
| [[dayOfWeekForDelivery].deliveryRanges].endTime    | TimeSpan     |  |
| [[dayOfWeekForDelivery].deliveryRanges].listPrice    | decimal     |  |
| dayOfWeekBlockeds    | array     |  |
| freightValue    | array     |  |
| [freightValue].zipCodeStart    | int     |  |
| [freightValue].zipCodeEnd    | int     |  |
| [freightValue].weightStart    | decimal     |  |
| [freightValue].weightEnd    | decimal     |  |
| [freightValue].absoluteMoneyCost    | decimal     |  |
| [freightValue].pricePercent    | decimal     |  |
| [freightValue].pricePercentByWeight    | decimal     |  |
| [freightValue].maxVolume    | decimal     |  |
| [freightValue].timeCost    | TimeSpan     |  |
| [freightValue].country    | string     |  |
| [freightValue].operationType    | object     | Utilizado pelo ko para identificar a operação a ser realizada no registro |
| [freightValue].restrictedFreights    | array     |  |
| [[freightValue].restrictedFreights].zipCodeStart    | int     |  |
| [[freightValue].restrictedFreights].zipCodeEnd    | int     |  |
| [[freightValue].restrictedFreights].overTime    | int     |  |
| [[freightValue].restrictedFreights].message    | string     |  |
| factorCubicWeight    | decimal     |  |
| freightTableProcessStatus    | object     |  |
| freightTableValueError    | string     |  |
| modals    | array     |  |
| undefinedModals    | bool     |  |
| deliveryOnWeekends    | bool     |  |
| carrierSchedule    | array     |  |
| [carrierSchedule].dayOfWeek    | DayOfWeek     |  |
| [carrierSchedule].timeLimit    | TimeSpan     |  |
| maxDimension    | object     |  |
| maxDimension.weight    | decimal     | Peso |
| maxDimension.height    | decimal     | Altura |
| maxDimension.width    | decimal     | Largura |
| maxDimension.length    | decimal     | Comprimento |
| maxDimension.cubicweight    | decimal     | Peso cúbico |
| maxDimension.maxSumDimension    | decimal     |  |


####Exemplo
```json
{
  "id": "Id09e09982-7437-4469-8961-a3d145076fbb",
  "slaType": "SlaType715b0383-bac1-4840-b2d4-81936702c346",
  "name": "Name508ab320-c55a-4a3e-bf3b-a9bc3f6ef172",
  "scheduledDelivery": true,
  "maxRangeDelivery": 21304,
  "dayOfWeekForDelivery": [
    {
      "dayOfWeek": 3,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0031148",
          "endTime": "00:00:00.0015142",
          "listPrice": 267.0
        },
        {
          "startTime": "00:00:00.0012296",
          "endTime": "00:00:00.0030832",
          "listPrice": 268.0
        },
        {
          "startTime": "00:00:00.0018632",
          "endTime": "00:00:00.0014399",
          "listPrice": 269.0
        }
      ]
    },
    {
      "dayOfWeek": 4,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0002816",
          "endTime": "00:00:00.0025413",
          "listPrice": 270.0
        },
        {
          "startTime": "00:00:00.0028240",
          "endTime": "00:00:00.0012702",
          "listPrice": 271.0
        },
        {
          "startTime": "00:00:00.0032389",
          "endTime": "00:00:00.0000729",
          "listPrice": 272.0
        }
      ]
    },
    {
      "dayOfWeek": 5,
      "deliveryRanges": [
        {
          "startTime": "00:00:00.0027658",
          "endTime": "00:00:00.0022554",
          "listPrice": 273.0
        },
        {
          "startTime": "00:00:00.0018571",
          "endTime": "00:00:00.0005253",
          "listPrice": 274.0
        },
        {
          "startTime": "00:00:00.0000674",
          "endTime": "00:00:00.0021701",
          "listPrice": 275.0
        }
      ]
    }
  ],
  "dayOfWeekBlockeds": [
    "2012-11-14T12:58:55.1092396",
    "2013-10-30T02:20:46.8759173",
    "2015-02-15T23:36:44.7358359"
  ],
  "freightValue": [
    {
      "zipCodeStart": 276,
      "zipCodeEnd": 277,
      "weightStart": 278.0,
      "weightEnd": 279.0,
      "absoluteMoneyCost": 280.0,
      "pricePercent": 281.0,
      "pricePercentByWeight": 282.0,
      "maxVolume": 283.0,
      "timeCost": "00:00:00.0025953",
      "country": "Country1428f32f-6130-442c-8de1-a475f267ce0d",
      "restrictedFreights": [
        {
          "zipCodeStart": 25346,
          "zipCodeEnd": 12281,
          "overTime": 15318,
          "message": "Message31c47847-a4ed-4f3e-9d76-d5be2d2328b8"
        },
        {
          "zipCodeStart": 22475,
          "zipCodeEnd": 5815,
          "overTime": 3400,
          "message": "Messagebb79af7e-43f0-439c-a919-6a82a937efc2"
        },
        {
          "zipCodeStart": 31289,
          "zipCodeEnd": 18542,
          "overTime": 28512,
          "message": "Message2944ca7b-2db0-447a-9076-94f7971a9711"
        }
      ]
    },
    {
      "zipCodeStart": 284,
      "zipCodeEnd": 285,
      "weightStart": 286.0,
      "weightEnd": 287.0,
      "absoluteMoneyCost": 288.0,
      "pricePercent": 289.0,
      "pricePercentByWeight": 290.0,
      "maxVolume": 291.0,
      "timeCost": "00:00:00.0023853",
      "country": "Countryd510f49c-666e-4b8a-bc62-fe0edd51c002",
      "operationType": 1,
      "restrictedFreights": [
        {
          "zipCodeStart": 21197,
          "zipCodeEnd": 12833,
          "overTime": 10144,
          "message": "Message0e48de4a-32f5-4f51-a6bd-75be14146074"
        },
        {
          "zipCodeStart": 1001,
          "zipCodeEnd": 11877,
          "overTime": 9386,
          "message": "Message2a19d4f0-0741-4180-910b-b6abd4216a99"
        },
        {
          "zipCodeStart": 7498,
          "zipCodeEnd": 7059,
          "overTime": 4562,
          "message": "Message84238891-31c1-4c91-8ba3-30c68dfff6c9"
        }
      ]
    },
    {
      "zipCodeStart": 292,
      "zipCodeEnd": 293,
      "weightStart": 294.0,
      "weightEnd": 295.0,
      "absoluteMoneyCost": 296.0,
      "pricePercent": 297.0,
      "pricePercentByWeight": 298.0,
      "maxVolume": 299.0,
      "timeCost": "00:00:00.0021215",
      "country": "Countrye9c7d885-9633-4dbe-a7b9-a5d99b55c9d6",
      "operationType": 2,
      "restrictedFreights": [
        {
          "zipCodeStart": 22037,
          "zipCodeEnd": 5438,
          "overTime": 16994,
          "message": "Message57fcd9cf-b7a2-40e6-9c8d-2d04ea1e11c5"
        },
        {
          "zipCodeStart": 29730,
          "zipCodeEnd": 20049,
          "overTime": 19479,
          "message": "Messaged7a83db3-e776-4a9e-a81d-ff5faabd0f1f"
        },
        {
          "zipCodeStart": 17120,
          "zipCodeEnd": 1934,
          "overTime": 24868,
          "message": "Messagee9c014a1-3bed-418d-9501-d4a0d20f5835"
        }
      ]
    }
  ],
  "factorCubicWeight": 11231.0,
  "freightTableProcessStatus": 4,
  "freightTableValueError": "FreightTableValueError112b20ef-e85e-450d-8864-a7c2281d53fb",
  "modals": [
    "3dc550cd-0d6f-4cd2-979e-56e52004ccec",
    "61ecce6a-9ff1-47cd-8f22-1da093483bee",
    "51ea9489-1cf6-4eb6-8d37-3d2fe6a6cf1f"
  ],
  "deliveryOnWeekends": true,
  "carrierSchedule": [
    {
      "dayOfWeek": 6,
      "timeLimit": "00:00:00.0009484"
    },
    {
      "timeLimit": "00:00:00.0005152"
    },
    {
      "dayOfWeek": 1,
      "timeLimit": "00:00:00.0012675"
    }
  ],
  "maxDimension": {
    "weight": 300.0,
    "height": 301.0,
    "width": 302.0,
    "length": 303.0,
    "cubicweight": 304.0,
    "maxSumDimension": 305.0
  }
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

###Exclui transportadora

Exclui uma transportadora com base no seu identificador único

```
POST /api/logistics/pvt/configuration/carriers/{carrierId}/remove
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
true
```
---

###Consulta tipos de entrega

retorna todos os tipos de entrega já cadastrados

```
GET /api/logistics/pvt/configuration/slatypes
```



####Exemplo
```json
"1922bbc0-1ede-4ed3-b755-55e940d83756"
```




####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
[
  "f278531d-f9af-411f-b381-dbceb29726a0",
  "0a35f03d-6b42-402c-982a-fb4bb8a569d0",
  "aefb74cc-75df-48ab-b6d3-1eedee8c9488"
]
```
---

###Inclui bloqueio de agendadamento

Adiciona um período de indisponibilidade de agendamento para os casos de Entrega Agendada.
Isso significa que não será permitido agendar entregas nos períodos de bloqueio cadastrados.

```
POST /api/logistics/pvt/configuration/carriers/{carrierId}/adddayofweekblocked
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
false
```
---

###Consulta bloqueios de agendamentos

Consulta os períodos de de indisponibilidade já cadastrados

```
GET /api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked
```







####Response
---

###Remove bloqueio de agendamento

Remove um período de indisponibilidade de agendamento para os casos de Entrega Agendada

```
POST /api/logistics/pvt/configuration/carriers/{carrierId}/removedayofweekblocked
```







####Response

<pre class="headers">
Status: `200 OK` `404 NotFound` `500 InternalServerError` 
</pre>

```json
true
```
---

