---
layout: logistics
title: shipping
category: logistics-api
---

#shipping


| Descrição     | Recurso     |
| ------------- |:------------|
| Cálcular frete| [POST /api/logistics/pvt/shipping/calculate](#cálcular-frete) |
| Simular frete| [POST /api/logistics/pvt/shipping/simulation](#simular-frete) |

###Cálcular frete

Realiza o cálculo de sla, retornando disponibilidade, prazos e preços para entrega

```
POST /api/logistics/pvt/shipping/calculate
```



####Exemplo
```json
[
  {
    "items": [
      {
        "id": "99916",
        "groupItemId": null,
        "kitItem": [],
        "quantity": 1,
        "price": 99.9,
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "weight": 10.0,
          "height": 10.0,
          "width": 25.0,
          "length": 19.0,
          "cubicweight": 0.1
        }
      },
      {
        "id": "234987",
        "groupItemId": null,
        "kitItem": [],
        "quantity": 3,
        "price": 100.47,
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "weight": 50.0,
          "height": 2.0,
          "width": 25.0,
          "length": 19.0,
          "cubicweight": 0.1
        }
      },
      {
        "id": "345123",
        "groupItemId": null,
        "kitItem": [],
        "quantity": 5,
        "price": 200.0,
        "additionalHandlingTime": "00:00:00",
        "dimension": {
          "weight": 5.0,
          "height": 5.0,
          "width": 5.0,
          "length": 20.0,
          "cubicweight": 0.1
        }
      }
    ],
    "location": {
      "zipCode": "10000000",
      "country": "BRA"
    },
    "salesChannel": "1"
  }
]
```




####Response

<pre class="headers">
Status: `200 OK` `500 InternalServerError` 
</pre>

```json
[
  [
    {
      "itemId": "234987",
      "quantity": 3,
      "availabilityQuantity": 100,
      "salesChannel": "1",
      "slaType": "Expressa",
      "slaTypeName": "normal",
      "freightTableName": "Sedex",
      "freightTableId": "55",
      "listPrice": 4.65,
      "transitTime": "2.00:00:00",
      "dockTime": "2.00:00:00",
      "timeToDockPlusDockTime": "4.00:00:00",
      "totalTime": "6.00:00:00",
      "deliveryWindows": null,
      "wareHouseId": "1_1",
      "dockId": "1_1_1",
      "location": {
        "zipCode": "10000000",
        "country": "BRA"
      },
      "deliveryOnWeekends": false,
      "carrierSchedule": [],
      "restrictedFreight": null
    },
    {
      "itemId": "345123",
      "quantity": 5,
      "availabilityQuantity": 100,
      "salesChannel": "1",
      "slaType": "Expressa",
      "slaTypeName": "normal",
      "freightTableName": "Sedex",
      "freightTableId": "55",
      "listPrice": 0.77,
      "transitTime": "2.00:00:00",
      "dockTime": "2.00:00:00",
      "timeToDockPlusDockTime": "4.00:00:00",
      "totalTime": "6.00:00:00",
      "deliveryWindows": null,
      "wareHouseId": "1_1",
      "dockId": "1_1_1",
      "location": {
        "zipCode": "10000000",
        "country": "BRA"
      },
      "deliveryOnWeekends": false,
      "carrierSchedule": [],
      "restrictedFreight": null
    },
    {
      "itemId": "99916",
      "quantity": 1,
      "availabilityQuantity": 198,
      "salesChannel": "1",
      "slaType": "Normal",
      "slaTypeName": "normal",
      "freightTableName": "Transportadora Exemplo",
      "freightTableId": "54",
      "listPrice": 86900,
      "transitTime": "2.00:00:00",
      "dockTime": "2.00:00:00",
      "timeToDockPlusDockTime": "2.00:00:00",
      "totalTime": "4.00:00:00",
      "deliveryWindows": null,
      "wareHouseId": "1_2",
      "dockId": "1_2_1",
      "location": {
        "zipCode": "10000000",
        "country": "BRA"
      },
      "deliveryOnWeekends": false,
      "carrierSchedule": [],
      "restrictedFreight": null
    }
  ]
]
```
---

###Simular frete

Simula um frete. É utiizado especificamente no admin, pois não tem forte compromisso com a alta performance

```
POST /api/logistics/pvt/shipping/simulation
```



####Exemplo
```json
{
  "items": [
    {
      "idSku": "234987",
      "quantidade": 2,
      "Price": 100.0
    },
    {
      "idSku": "345123",
      "quantidade": 5,
      "Price": 95.0
    },
    {
      "idSku": "99916",
      "quantidade": 1,
      "Price": 99.9
    }
  ],
  "location": {
    "zipCode": "10000000",
    "country": "BRA"
  },
  "saleschannel": "1"
}
```




####Response

<pre class="headers">
Status: `200 OK` `500 InternalServerError` 
</pre>

```json
{
  "freightSimulated": [
    {
      "items": [
        {
          "nome": "Sleve Case para Netbook 10\" Rosa - NB8106P-10 Integris",
          "status": false,
          "id": "234987",
          "groupItemId": null,
          "quantity": 2,
          "price": 100,
          "modal": null,
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "weight": 180,
            "height": 23,
            "width": 2,
            "length": 29,
            "cubicweight": 0,
            "maxSumDimension": 0
          },
          "kitItem": []
        }
      ],
      "slaResponseFreightSimulated": [
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 99999999,
          "weightStart": 0,
          "weightEnd": 9999.99,
          "absoluteMoneyCost": 2.96,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "234987",
          "quantity": 2,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "Expressa",
          "slaTypeName": "Expressa",
          "freightTableName": "Sedex",
          "freightTableId": "55",
          "listPrice": 5.46,
          "transitTime": "2.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "6.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        },
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 99999999,
          "weightStart": 0,
          "weightEnd": 99999992,
          "absoluteMoneyCost": 2,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "234987",
          "quantity": 2,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "normal",
          "slaTypeName": "normal",
          "freightTableName": "Mundo",
          "freightTableId": "1a574b3",
          "listPrice": 4.4,
          "transitTime": "2.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "6.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        },
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 50000000,
          "weightStart": 0,
          "weightEnd": 2000,
          "absoluteMoneyCost": 2.43,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "234987",
          "quantity": 2,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "PAC",
          "slaTypeName": "PAC",
          "freightTableName": "PAC",
          "freightTableId": "56",
          "listPrice": 4.86,
          "transitTime": "11.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "15.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        }
      ]
    },
    {
      "items": [
        {
          "nome": "Motorola Motokey 3-chip EX117, Câmera 2.0MP, MP3 Player, Rádio FM, Redes Sociais, Fone de Ouvido, Cartão de 2GB",
          "status": false,
          "id": "345123",
          "groupItemId": null,
          "quantity": 5,
          "price": 95,
          "modal": null,
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "weight": 280,
            "height": 14,
            "width": 12,
            "length": 7,
            "cubicweight": 0.1,
            "maxSumDimension": 0
          },
          "kitItem": []
        }
      ],
      "slaResponseFreightSimulated": [
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 99999999,
          "weightStart": 0,
          "weightEnd": 9999.99,
          "absoluteMoneyCost": 2.96,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "345123",
          "quantity": 5,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "Expressa",
          "slaTypeName": "Expressa",
          "freightTableName": "Sedex",
          "freightTableId": "55",
          "listPrice": 5.44,
          "transitTime": "2.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "6.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        },
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 99999999,
          "weightStart": 0,
          "weightEnd": 99999992,
          "absoluteMoneyCost": 2,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "345123",
          "quantity": 5,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "normal",
          "slaTypeName": "normal",
          "freightTableName": "Mundo",
          "freightTableId": "1a574b3",
          "listPrice": 4.4,
          "transitTime": "2.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "6.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        },
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_1",
          "dockName": "Centro de Distribuição Principal_1_1_1",
          "zipCodeStart": 0,
          "zipCodeEnd": 50000000,
          "weightStart": 0,
          "weightEnd": 2000,
          "absoluteMoneyCost": 2.43,
          "pricePercentByWeight": 0,
          "maxVolume": 1000000000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "2.00:00:00",
          "costFromWarehouseToDock": 1.99,
          "itemId": "345123",
          "quantity": 5,
          "availabilityQuantity": 100,
          "salesChannel": "1",
          "slaType": "PAC",
          "slaTypeName": "PAC",
          "freightTableName": "PAC",
          "freightTableId": "56",
          "listPrice": 4.84,
          "transitTime": "11.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "4.00:00:00",
          "totalTime": "15.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_1",
          "dockId": "1_1_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        }
      ]
    },
    {
      "items": [
        {
          "nome": "Cortador de Grama Chiaperini CG32 900W 220V",
          "status": true,
          "id": "99916",
          "groupItemId": null,
          "quantity": 1,
          "price": 99.9,
          "modal": null,
          "additionalHandlingTime": "00:00:00",
          "dimension": {
            "weight": 12000,
            "height": 38,
            "width": 38,
            "length": 60,
            "cubicweight": 18,
            "maxSumDimension": 0
          },
          "kitItem": []
        }
      ],
      "slaResponseFreightSimulated": [
        {
          "dockTimeFake": "00:00:00",
          "wareHouseName": "Estoque Exemplo_Modal_2",
          "dockName": "Centro de Distribuicao Principal_1_2_1",
          "zipCodeStart": 10000000,
          "zipCodeEnd": 19999999,
          "weightStart": 0,
          "weightEnd": 99999998000,
          "absoluteMoneyCost": 79000,
          "pricePercentByWeight": 0,
          "maxVolume": 9999999800000,
          "pricePercentByPrice": 0,
          "factorCubicWeight": 0,
          "cubicWeight": 0,
          "warehouseTime": "00:00:00",
          "costFromWarehouseToDock": 0,
          "itemId": "99916",
          "quantity": 1,
          "availabilityQuantity": 198,
          "salesChannel": "1",
          "slaType": "Normal",
          "slaTypeName": "Normal",
          "freightTableName": "Transportadora Exemplo",
          "freightTableId": "54",
          "listPrice": 86900,
          "transitTime": "2.00:00:00",
          "dockTime": "2.00:00:00",
          "timeToDockPlusDockTime": "2.00:00:00",
          "totalTime": "4.00:00:00",
          "deliveryWindows": [],
          "wareHouseId": "1_2",
          "dockId": "1_2_1",
          "location": {
            "zipCode": "10000000",
            "country": "BRA"
          },
          "deliveryOnWeekends": false,
          "carrierSchedule": null,
          "restrictedFreight": null
        }
      ]
    }
  ],
  "endereco": {
    "id": "BRA_10000000",
    "address": {
      "postalCode": "10000000",
      "city": "Não encontrado",
      "state": "Não encontrado",
      "stateAcronym": null,
      "neighborhood": "Não encontrado",
      "streetType": null,
      "street": null,
      "streetAbbreviation": null,
      "number": null,
      "complement": null,
      "isActive": false,
      "country": {
        "Id": "BRA",
        "Name": null,
        "SpecificData": null
      }
    }
  },
  "debug": " ** O item 234987 possui 100 unidades disponiveis no canal de vendas 1 **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:Expressa ** ** 32 valor(es) de frete atendem o tipo Expressa e volume 2668.000000000000 **  ** 2 valor(es) de frete atendem por peso no tipo Expressa **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:Expressa ** ** 32 valor(es) de frete atendem o tipo Expressa e volume 2668.000000000000 **  ** 2 valor(es) de frete atendem por peso no tipo Expressa **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:normal ** ** 3 valor(es) de frete atendem o tipo normal e volume 2668.000000000000 **  ** 3 valor(es) de frete atendem por peso no tipo normal **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:normal ** ** 3 valor(es) de frete atendem o tipo normal e volume 2668.000000000000 **  ** 3 valor(es) de frete atendem por peso no tipo normal **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:PAC ** ** 1 valor(es) de frete atendem o tipo PAC e volume 2668.000000000000 **  ** 1 valor(es) de frete atendem por peso no tipo PAC **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:PAC ** ** 1 valor(es) de frete atendem o tipo PAC e volume 2668.000000000000 **  ** 1 valor(es) de frete atendem por peso no tipo PAC **  ** O item 345123 possui 100 unidades disponiveis no canal de vendas 1 **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:Expressa ** ** 32 valor(es) de frete atendem o tipo Expressa e volume 5880.000000000000 **  ** 2 valor(es) de frete atendem por peso no tipo Expressa **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:Expressa ** ** 32 valor(es) de frete atendem o tipo Expressa e volume 5880.000000000000 **  ** 2 valor(es) de frete atendem por peso no tipo Expressa **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:normal ** ** 3 valor(es) de frete atendem o tipo normal e volume 5880.000000000000 **  ** 3 valor(es) de frete atendem por peso no tipo normal **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:normal ** ** 3 valor(es) de frete atendem o tipo normal e volume 5880.000000000000 **  ** 3 valor(es) de frete atendem por peso no tipo normal **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:PAC ** ** 1 valor(es) de frete atendem o tipo PAC e volume 5880.000000000000 **  ** 1 valor(es) de frete atendem por peso no tipo PAC **  ** 36 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_1_1 e tipo de entrega:PAC ** ** 1 valor(es) de frete atendem o tipo PAC e volume 5880.000000000000 **  ** 1 valor(es) de frete atendem por peso no tipo PAC **  ** O item 99916 possui 198 unidades disponiveis no canal de vendas 1 **  ** 4 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_2_1 e tipo de entrega:Normal ** ** 4 valor(es) de frete atendem o tipo Normal e volume 86640.000000000000 **  ** 4 valor(es) de frete atendem por peso no tipo Normal **  ** 4 registros no solr coincidem com cep:10000000, pais:BRA, doca:1_2_1 e tipo de entrega:Normal ** ** 4 valor(es) de frete atendem o tipo Normal e volume 86640.000000000000 **  ** 4 valor(es) de frete atendem por peso no tipo Normal ** "
}
```
---

