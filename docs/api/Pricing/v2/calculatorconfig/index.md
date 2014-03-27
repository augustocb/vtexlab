---
layout: api
title: calculatorconfig
category: api-Pricing
---

#calculatorconfig


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/rnb/pvt/archive/calculatorConfiguration/{idCalculatorConfiguration}](#arquivar-uma-promoção)  | Arquivar uma promoção|
| [GET /api/rnb/pvt/calculatorconfiguration/{id}/products/download](#download-dos-produtos-usados-em-uma-promoção)  | Download dos produtos usados em uma promoção|
| [GET /api/rnb/pvt/calculatorconfiguration/{id}/skus/{type}/download](#download-dos-skus-usados-em-uma-promoção)  | Download dos skus usados em uma promoção|
| [GET /api/rnb/pvt/archive/calculatorConfiguration](#retorna-todas-promoções-arquivadas)  | Retorna todas promoções arquivadas|
| [GET /api/rnb/pvt/calculatorConfiguration/{idCalculatorConfiguration}](#retorna-uma-promoção-pelo-id)  | Retorna uma promoção pelo id|
| [POST /api/rnb/pvt/calculatorConfiguration](#salva-uma-promoção)  | Salva uma promoção|
| [POST /api/rnb/pvt/unarchive/calculatorConfiguration/{idCalculatorConfiguration}](#desarquiva-uma-promoção)  | Desarquiva uma promoção|

##Arquivar uma promoção

####URL do Recurso:
```http
POST /api/rnb/pvt/archive/calculatorConfiguration/{idCalculatorConfiguration} HTTP/1.1
```

####Status codes: `204 NoContent` 

---

##Download dos produtos usados em uma promoção

####URL do Recurso:
```http
GET /api/rnb/pvt/calculatorconfiguration/{id}/products/download HTTP/1.1
```

####Exemplo de retorno:
```json
"1000\r\n1001\r\n1021\r\n2021\r\n"
```
####Status codes: `204 NoContent` 

---

##Download dos skus usados em uma promoção

####URL do Recurso:
```http
GET /api/rnb/pvt/calculatorconfiguration/{id}/skus/{type}/download HTTP/1.1
```

####Exemplo de retorno:
```json
"220008\r\n220018\r\n220047\r\n230012\r\n"
```
####Status codes: `204 NoContent` 

---

##Retorna todas promoções arquivadas

####URL do Recurso:
```http
GET /api/rnb/pvt/archive/calculatorConfiguration HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "items": [
    {
      "idCalculatorConfiguration": "11f0d3a2-6126-4b45-a113-c32933f3b546",
      "name": "Combo UX 14",
      "beginDate": "2014-02-01T02:00:00",
      "endDate": "2014-02-23T03:00:00",
      "isActive": true,
      "description": "",
      "type": "combo",
      "salesChannelNames": [],
      "utmSource": "",
      "utmMedium": "",
      "utmCampain": "",
      "status": "active"
    },
    {
      "idCalculatorConfiguration": "82b269d1-e9c3-41d8-9292-402efae70b08",
      "name": "UX Brinde",
      "beginDate": "2014-02-19T19:30:00",
      "endDate": "2014-02-28T20:30:00",
      "isActive": true,
      "description": "",
      "type": "regular",
      "salesChannelNames": [],
      "utmSource": "",
      "utmMedium": "",
      "utmCampain": "",
      "status": "active"
    },
    {
      "idCalculatorConfiguration": "9497d4f8-c7cb-45cf-9ccd-c6f782a40f05",
      "name": "Teste promo1",
      "beginDate": "2014-02-19T17:30:00",
      "endDate": "2014-02-28T17:30:00",
      "isActive": true,
      "description": "Teste",
      "type": "regular",
      "salesChannelNames": [],
      "utmSource": "",
      "utmMedium": "",
      "utmCampain": "",
      "status": "active"
    },
    {
      "idCalculatorConfiguration": "aa1e8b8b-6518-469f-a200-db8a0bf5325e",
      "name": "For The Price UX 14",
      "beginDate": "2014-02-18T19:30:00",
      "endDate": "2014-02-28T05:30:00",
      "isActive": false,
      "description": "",
      "type": "forThePriceOf",
      "salesChannelNames": [
        "renata",
        "re",
        "renata"
      ],
      "utmSource": "",
      "utmMedium": "",
      "utmCampain": "",
      "status": "inactive"
    },
    {
      "idCalculatorConfiguration": "dd7e1417-e9f7-4589-aa66-a91c4feaaac3",
      "name": "Regular UX 14",
      "beginDate": "2014-03-01T21:30:00",
      "endDate": "2014-03-31T10:00:00",
      "isActive": true,
      "description": "",
      "type": "regular",
      "salesChannelNames": [
        "Loja Principal"
      ],
      "utmSource": "",
      "utmMedium": "",
      "utmCampain": "",
      "status": "scheduled"
    }
  ],
  "disabledItems": [],
  "limitConfiguration": {
    "activesCount": 4,
    "limit": 100
  }
}
```
####Exemplo de retorno:
```json
{
  "items": [
    {
      "idCalculatorConfiguration": "IdCalculatorConfiguration69ffe4c0-c8ee-4ce3-816a-d68cd31c2887",
      "name": "Name8a0ab556-fd55-48c9-9f39-1e2bde703c26",
      "beginDate": "2013-11-03T22:43:35.4587863",
      "endDate": "2013-09-07T20:26:27.8948066",
      "isActive": true,
      "description": "Description62b025f9-8e97-4e93-80bc-bc8886bf92d1",
      "type": "Typecf927d79-9b2f-4adf-a8ca-1810977aa9ea",
      "salesChannelNames": [
        "55e9e6a3-dc7b-4977-924c-069e3f1f228a",
        "9c7be00c-ebbf-485a-a113-3a33aa9584e9",
        "f5cd1a4f-c5ac-4a16-836d-c303aa28e7c2"
      ],
      "utmSource": "UtmSource7ff6148d-9083-49a6-9faf-274ed052339f",
      "utmMedium": "UtmMediumaa91f2fa-d1f0-4189-88fe-bc2659f5a67c",
      "utmCampain": "UtmCampain19af8c44-4d5f-4f61-9d35-dd01ed08f655",
      "status": "Statusa630ac83-bd99-4c09-977a-eb4607596182"
    },
    {
      "idCalculatorConfiguration": "IdCalculatorConfiguration2a2eac3b-1e40-4cb0-88be-d2d6afb90c54",
      "name": "Name7b239269-1aae-4415-a008-f4d9bef221f4",
      "beginDate": "2015-04-25T09:05:54.0637308",
      "endDate": "2013-12-09T00:24:55.9065023",
      "isActive": true,
      "description": "Descriptionda03c439-62d6-405b-ac73-9190b94cd234",
      "type": "Type80389ace-185c-4aa1-8299-d8f5ff2b5091",
      "salesChannelNames": [
        "acb83da1-c02e-43cb-b102-d738369b2cad",
        "15a2eb51-a92f-46a6-abfd-ce0ec0daaf37",
        "c2040d23-8c2f-4eed-b87e-0e85d6823e1b"
      ],
      "utmSource": "UtmSource45a6fe83-a5f6-4756-967c-a67e810f3c30",
      "utmMedium": "UtmMedium128d82dd-5532-4a54-9bb0-0ba13b903514",
      "utmCampain": "UtmCampainf4eac56c-4677-43e4-95e6-db47379cb183",
      "status": "Status087dad5d-45f4-4496-ad3f-e54c05945092"
    },
    {
      "idCalculatorConfiguration": "IdCalculatorConfiguratione67e2442-2d0f-4ccb-9850-acf1a8abdd6d",
      "name": "Name2939b02a-def1-415e-9d9f-ca3e3abf2494",
      "beginDate": "2014-04-06T05:06:58.068022",
      "endDate": "2013-11-03T15:14:53.9286161",
      "isActive": true,
      "description": "Descriptionf0941199-bf3f-41c2-a6d1-71f7ec82123c",
      "type": "Type72671d0b-2fcc-4ae9-bafa-6dc90536b9b7",
      "salesChannelNames": [
        "7848926e-f269-4bba-b755-e2e358590816",
        "39c60ca0-7014-4c0a-b24e-6bd53df224d3",
        "6a75299c-04e9-4949-bb77-7d27c84d9933"
      ],
      "utmSource": "UtmSource5821f50c-2dac-47c1-b166-b72b704c8684",
      "utmMedium": "UtmMedium27ac297e-ed73-4794-9371-f2e956505187",
      "utmCampain": "UtmCampain0a7b49b3-bb88-445e-ad9a-0b9eeb9cfd9e",
      "status": "Status27fbac7b-4eb3-4023-88b1-c0a01948f994"
    }
  ],
  "disabledItems": [
    {
      "idCalculatorConfiguration": "IdCalculatorConfigurationd4b9f7f1-b346-4595-8574-b83f1fc73a7f",
      "name": "Name5874083f-f41e-481d-9731-5ea0ec325555",
      "beginDate": "2014-05-08T07:46:10.3283151",
      "endDate": "2014-04-08T04:21:00.3020207",
      "isActive": true,
      "description": "Descriptionde40d4a0-9d59-4249-a3fc-90e26b5da4eb",
      "type": "Type62ac6ea3-8b92-46e2-8fb2-b225e76ca9d2",
      "salesChannelNames": [
        "59df40b9-4491-43fc-9da3-2efb0f14a399",
        "28720e17-8775-4a1d-a544-937d137cd720",
        "5190bfb2-3d57-4642-9241-09f0f0c6bd43"
      ],
      "utmSource": "UtmSourced46f4fb4-7118-4fc5-957b-4a8227dd4446",
      "utmMedium": "UtmMediuma29098f8-18e6-4ec2-898d-ed0a64cf65f9",
      "utmCampain": "UtmCampain9f7d5642-5c50-4074-94b4-8ea2e9a621a8",
      "status": "Status5452b792-937c-42f5-beee-956be290d00e"
    },
    {
      "idCalculatorConfiguration": "IdCalculatorConfiguration23bd8be0-26dc-4677-989b-6b6fc9dcdab7",
      "name": "Name479f7617-4152-441a-bb75-30ddd49fd11d",
      "beginDate": "2016-01-08T09:23:22.9815277",
      "endDate": "2012-09-27T23:18:44.7535369",
      "isActive": true,
      "description": "Descriptionbc9d3819-46ff-4482-b4e1-eff69ff271b8",
      "type": "Type7e742dbe-20bf-4ba5-aec5-29f684576ac8",
      "salesChannelNames": [
        "3b5e3d69-ff0f-4b26-a7b8-e96884b8fca7",
        "29d39348-1f7a-4156-8d78-4a18509f5791",
        "1311bc5f-6496-4a3c-a448-de931d66385f"
      ],
      "utmSource": "UtmSource2464ffa6-921a-4b02-9ce4-4681b100654b",
      "utmMedium": "UtmMedium433f34db-1622-465e-8fa0-92414b271fd3",
      "utmCampain": "UtmCampain372e2ac4-3347-4bd3-978a-844ef7d49577",
      "status": "Status2fbb2be8-7da9-46f4-a472-b1b172109c66"
    },
    {
      "idCalculatorConfiguration": "IdCalculatorConfigurationcd314eac-2e77-4e68-a8ce-8a8e62c072da",
      "name": "Name98de0654-0a90-43d0-ab69-9620cd72baf2",
      "beginDate": "2013-04-24T14:58:18.9154784",
      "endDate": "2015-10-30T21:02:27.6286685",
      "isActive": true,
      "description": "Description81ee096e-c2ca-40a9-8bbc-2bb1c16dab4c",
      "type": "Typedef4fd6c-e0e2-4385-a8b5-e85c7e1f5172",
      "salesChannelNames": [
        "ce44f3bb-bf90-4078-8db2-5454493422e4",
        "9f3735d3-5cc2-4665-9a74-2b32528ced94",
        "c6adf6bd-f579-4589-8180-252925d54c78"
      ],
      "utmSource": "UtmSource1d7e206b-5297-41f5-8509-268d83c60325",
      "utmMedium": "UtmMedium81438529-8836-4a55-8df3-88b8c98a7374",
      "utmCampain": "UtmCampain6e34470e-b1f7-4c72-a568-784619b24974",
      "status": "Statusb2f1b450-88ef-4807-b3cc-5c16a547aaa6"
    }
  ],
  "limitConfiguration": {
    "activesCount": 83,
    "limit": 41
  }
}
```
####Status codes: `200 OK` 

---

##Retorna uma promoção pelo id

####URL do Recurso:
```http
GET /api/rnb/pvt/calculatorConfiguration/{idCalculatorConfiguration} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "idCalculatorConfiguration": "discount_walmartv5_99",
  "name": "Teste Daniel",
  "beginDate": "2013-08-30T00:00:00",
  "endDate": "2013-10-14T11:30:00",
  "isActive": false,
  "origin": "Marketplace",
  "idSeller": "1",
  "idSellerIsInclusive": true,
  "idsSalesChannel": [
    "1"
  ],
  "idsSalesChannelIsInclusive": true,
  "paymentsMethods": [],
  "coupon": [],
  "description": "",
  "categories": [],
  "brands": [],
  "freights": [],
  "products": [
    {
      "id": "100196240"
    },
    {
      "id": "24461"
    }
  ],
  "productsAreInclusive": true,
  "utmMedium": "",
  "utmSource": "",
  "utmCampaign": "",
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "idCollection": "",
  "restrictionsBins": [],
  "nominalDiscountValue": 10.0,
  "skuGift": {},
  "zipCodeRanges": [
    {}
  ],
  "type": "regular",
  "percentualDiscountValueList": [],
  "clusterTags": [],
  "HostName": "walmartv5",
  "AccountId": "c0111a50-ceb2-44e5-9c95-422870127a4f"
}
```
####Exemplo de retorno:
```json
{
  "idCalculatorConfiguration": "IdCalculatorConfiguration8dfda257-1090-4204-a5a8-99c8bd41429f",
  "name": "Named1edb110-4d57-48f4-8cad-0bb17e2950a5",
  "beginDate": "2012-07-12T01:06:03.446181",
  "endDate": "2013-08-14T14:08:50.5452579",
  "isActive": true,
  "usageCount": 160,
  "origin": "Origin05b3322a-a255-4b46-98d2-d4b9eb2f49f9",
  "idSeller": "IdSellerc93ba643-e5c8-4b45-b06e-c42f23d45bd0",
  "idSellerIsInclusive": true,
  "idsSalesChannel": [
    "d36c860e-4720-4e06-a8fc-2dd202ea04b0",
    "f8c62b0b-8ec1-4a39-a1c1-836a46d8a200",
    "a9be8b2b-e5f0-45f1-940b-91a9c2c8dfa2"
  ],
  "paymentsMethods": [
    {
      "id": "Ida4fe39e6-338e-46f4-9689-c825460938a6",
      "name": "Namebec68e00-f0a3-4ca4-8ebc-b2e762428e28"
    },
    {
      "id": "Id4c70292a-d760-489c-9fe2-217ac759c427",
      "name": "Name4da78ccb-38b6-4374-92b7-85bbec20b3d8"
    },
    {
      "id": "Id03cb7793-f326-49e0-a109-6fdf08fc14d2",
      "name": "Namec3244eae-5f80-415b-aa8d-42a78c8adc46"
    }
  ],
  "maxUsage": 138,
  "multipleUsePerClient": true,
  "coupon": [
    "07494060-5344-4c35-bd8c-b08295726d34",
    "b81d49a9-2133-4c30-9e38-4628553850cf",
    "bd743f58-b89a-4e7e-b467-5fdc9128935a"
  ],
  "description": "Description495fa03a-d434-4df5-ad64-3d50191a67d9",
  "categories": [
    {
      "id": "Id7ff0e731-7af3-46b0-a512-23362e1f2ed8",
      "name": "Nameecf7fae0-1ee7-4f20-851d-ad65b15674bf"
    },
    {
      "id": "Id6d6ea1be-8c78-4311-bce6-083ed422d725",
      "name": "Name57884a49-8062-4af7-abb8-049e486194c1"
    },
    {
      "id": "Id30a8e578-3d13-4524-814e-c32082923a3b",
      "name": "Name7cb9cce0-38b4-4ee3-bf8b-cbbb1ffb8841"
    }
  ],
  "brands": [
    {
      "id": "Id2f539e5e-5632-424e-b84c-889291e8aac0",
      "name": "Nameb401611c-2433-4d5b-8e9e-d677355e1eac"
    },
    {
      "id": "Iddafe96e0-6cf6-4448-a635-132812a5bdcb",
      "name": "Name7e400d59-37cb-41ef-82f8-9ed0e2edcb5c"
    },
    {
      "id": "Ida2fc0343-9a25-4624-954d-27685f1d308d",
      "name": "Name17bc0ec5-4ade-4035-9b71-bf26aa8a9059"
    }
  ],
  "brandsAreInclusive": true,
  "freights": [
    {
      "id": "Idd8b45028-62c5-4ae1-9883-a0ddad08d991",
      "name": "Name27749244-7704-45d8-8049-13d5b62e9094"
    },
    {
      "id": "Idf43a4a21-9799-4275-b862-bf1ddcb9f799",
      "name": "Namecf6b4f26-04f1-416a-9888-2bbbaa2550cc"
    },
    {
      "id": "Id95a11aaf-e581-4889-bee9-5ab3c23276a4",
      "name": "Name0da3eba3-6e20-437b-8f25-6c5a7746bbbe"
    }
  ],
  "products": [
    {
      "id": "Id08ee657f-7ff0-42f2-98f4-6539d0b8c9d3",
      "name": "Name447f5bae-ee30-4021-b625-141a0be12ae4"
    },
    {
      "id": "Id2ecd64a2-134b-4a58-89b1-d795e250c24b",
      "name": "Name7c70872b-2f4d-49ba-8bce-20a69524f0d5"
    },
    {
      "id": "Id11b7a248-d09d-4ef8-a516-eb274fcaeb26",
      "name": "Name6a88c466-22d5-4153-9843-70c368fc311e"
    }
  ],
  "utmMedium": "UtmMediumd096123a-8c79-4c7d-ac21-621f56c3b6cc",
  "utmSource": "UtmSource8eae4738-1609-4c00-a7fb-0551b629ba99",
  "utmCampaign": "UtmCampaign79879e04-c44b-4f69-8c39-ae5babd9d70a",
  "collections1BuyTogether": [
    {
      "id": "Id43d0d7b7-3198-4ae8-84a6-8614536db05c",
      "name": "Name5d2f963a-2261-47be-a79c-2bdacb0e6f8a"
    },
    {
      "id": "Idfa4ed09f-6a37-4b50-8fd0-d1c257a9a770",
      "name": "Name6ba489f7-8e26-4188-bf6d-663be611036c"
    },
    {
      "id": "Id1bbde164-962c-405c-85b7-9448ab2450cd",
      "name": "Name22084c01-c180-428d-a08c-31955b66e933"
    }
  ],
  "collections2BuyTogether": [
    {
      "id": "Idfed8873e-bb4b-4308-8ea0-4a955c2061b1",
      "name": "Namec0481856-f4e4-447f-b9e5-0757050b932c"
    },
    {
      "id": "Idd141c879-aba8-42dc-86fd-c4b50561d6be",
      "name": "Namea95f2af2-8326-4021-a1cf-e3c5bfcf1072"
    },
    {
      "id": "Id51fbb2c7-79eb-4cf3-b7bc-99c244ab6ee5",
      "name": "Name0dbe39bb-c464-47b1-81b8-bb1e017ba9a5"
    }
  ],
  "idTypeDiscountBuyTogether": "IdTypeDiscountBuyTogether46ceacda-6010-463a-8476-f48c3776c367",
  "nameTypeDiscountBuyTogether": "NameTypeDiscountBuyTogetherc15f4b81-91a1-4b21-8bda-a141b1b38550",
  "minimumQuantityBuyTogether": 84,
  "listSku1BuyTogether": [
    {
      "id": "Idb2c5230c-3708-42f1-9ffd-48b11f7eaac7",
      "name": "Namebc444312-daf6-41b8-b2c9-61f048952c54"
    },
    {
      "id": "Id1f1e1c9f-3318-4568-9c39-cd1beb64f8df",
      "name": "Namee737e15d-efd6-4a8a-9f60-8ca20d3f82c3"
    },
    {
      "id": "Id07949645-ed44-435c-acd7-c496c80bee79",
      "name": "Namef7e5a068-b7c2-4f39-9174-b132e5ef8ec7"
    }
  ],
  "listSku2BuyTogether": [
    {
      "id": "Id08488c78-df4f-40de-9ebe-c0103d4001d5",
      "name": "Named6adc8d0-214b-46c5-a860-d57af18b9aea"
    },
    {
      "id": "Idc8852d74-ebe5-4198-a6f2-f810686cac06",
      "name": "Name3f634da8-2bc1-4c95-9427-17fbccd417b7"
    },
    {
      "id": "Id66613d4a-8a5c-49e1-a2ac-731703855dcc",
      "name": "Namee1c50191-aef4-4725-84d4-62b76f5822ed"
    }
  ],
  "totalValueFloor": 239.0,
  "idCollection": "IdCollection86b85bfe-091e-4c77-8fe3-535e31bd865d",
  "idCollectionIsInclusive": true,
  "restrictionsBins": [
    "0f90145c-21c7-4d62-acf8-7c24a8324f79",
    "33407a73-fddd-4e01-af06-b420fab92aa3",
    "5de46c23-378f-4608-ab7b-75d1cef268a7"
  ],
  "valorTotalCompras": 105.0,
  "nominalShippingDiscountValue": 163.0,
  "nominalDiscountValue": 232.0,
  "percentualDiscountValue": 22.0,
  "percentualShippingDiscountValue": 29.0,
  "percentualDiscountValueList1": 147.0,
  "percentualDiscountValueList2": 249.0,
  "skuGift": {
    "id": "Id855aa6e8-7728-419c-87d3-e7e1d8ee8099",
    "name": "Name8238574e-750f-425f-bb6b-a311853b4b68"
  },
  "selectableQuantity": 81,
  "percentualTax": 183.0,
  "zipCodeRanges": [
    {
      "zipCodeFrom": "ZipCodeFroma0002d01-4be1-498a-a250-5f1900ebfb5c",
      "zipCodeTo": "ZipCodeTo52f12f42-66ed-4922-9473-88726e2a7e96",
      "inclusive": true
    },
    {
      "zipCodeFrom": "ZipCodeFrom6c4951d9-a599-4782-a4a5-009c63984c1a",
      "zipCodeTo": "ZipCodeTo1b3893c0-7535-4758-b219-8f9fcb6811d6"
    },
    {
      "zipCodeFrom": "ZipCodeFromd8f97852-176c-4015-9124-1a67a90e30a8",
      "zipCodeTo": "ZipCodeTocdabe5d4-67cc-4b67-8e1d-7d88d754b894",
      "inclusive": true
    }
  ],
  "type": "Typee90d6df7-d143-4d3b-8a14-f413a016005e",
  "percentualDiscountValueList": [
    {
      "quantity": 77,
      "percent": 161.0
    },
    {
      "quantity": 21,
      "percent": 212.0
    },
    {
      "quantity": 186,
      "percent": 189.0
    }
  ],
  "clusterTags": [
    "9ed1603e-67f9-4083-b340-2fb0a5b3585a",
    "1613d389-a887-4434-92d9-8598554ee0f4",
    "9119c84c-dfca-472b-9b0b-7ec0d35d9125"
  ],
  "HostName": "HostName3f1c22e7-ec91-43b9-b8ba-c614410dccc5",
  "AccountId": "AccountIdec03c201-ebf9-4b7a-a52f-ea7826e6b0ae",
  "isArchived": true
}
```
####Status codes: `200 OK` 

---

##Salva uma promoção

####URL do Recurso:
```http
POST /api/rnb/pvt/calculatorConfiguration HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "idCalculatorConfiguration": "discount_walmartv5_99",
  "name": "Teste Daniel",
  "beginDate": "2013-08-30T00:00:00",
  "endDate": "2013-10-14T11:30:00",
  "isActive": false,
  "origin": "Marketplace",
  "idSeller": "1",
  "idSellerIsInclusive": true,
  "idsSalesChannel": [
    "1"
  ],
  "idsSalesChannelIsInclusive": true,
  "paymentsMethods": [],
  "coupon": [],
  "description": "",
  "categories": [],
  "brands": [],
  "freights": [],
  "products": [
    {
      "id": "100196240"
    },
    {
      "id": "24461"
    }
  ],
  "productsAreInclusive": true,
  "utmMedium": "",
  "utmSource": "",
  "utmCampaign": "",
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "idCollection": "",
  "restrictionsBins": [],
  "nominalDiscountValue": 10.0,
  "skuGift": {},
  "zipCodeRanges": [
    {}
  ],
  "type": "regular",
  "percentualDiscountValueList": [],
  "clusterTags": [],
  "HostName": "walmartv5",
  "AccountId": "c0111a50-ceb2-44e5-9c95-422870127a4f"
}
```
####Status codes: `204 NoContent` 

---

##Desarquiva uma promoção

####URL do Recurso:
```http
POST /api/rnb/pvt/unarchive/calculatorConfiguration/{idCalculatorConfiguration} HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "idCalculatorConfiguration": "discount_walmartv5_99",
  "name": "Teste Daniel",
  "beginDate": "2013-08-30T00:00:00",
  "endDate": "2013-10-14T11:30:00",
  "isActive": false,
  "origin": "Marketplace",
  "idSeller": "1",
  "idSellerIsInclusive": true,
  "idsSalesChannel": [
    "1"
  ],
  "idsSalesChannelIsInclusive": true,
  "paymentsMethods": [],
  "coupon": [],
  "description": "",
  "categories": [],
  "brands": [],
  "freights": [],
  "products": [
    {
      "id": "100196240"
    },
    {
      "id": "24461"
    }
  ],
  "productsAreInclusive": true,
  "utmMedium": "",
  "utmSource": "",
  "utmCampaign": "",
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "idCollection": "",
  "restrictionsBins": [],
  "nominalDiscountValue": 10.0,
  "skuGift": {},
  "zipCodeRanges": [
    {}
  ],
  "type": "regular",
  "percentualDiscountValueList": [],
  "clusterTags": [],
  "HostName": "walmartv5",
  "AccountId": "c0111a50-ceb2-44e5-9c95-422870127a4f"
}
```
####Status codes: `204 NoContent` 

---

