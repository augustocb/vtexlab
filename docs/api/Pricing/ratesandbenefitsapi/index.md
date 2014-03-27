---
layout: api
title: ratesandbenefitsapi
category: api-Pricing
---

#ratesandbenefitsapi


##Recursos
| Recurso       | Descrição     |
| ------------- |--------------:|
| [POST /api/rnb/pub/bundles/batch](#calcula-promoções-considerando-uma-lista-de-purchase-context)  | Calcula promoções considerando uma lista de purchase context|
| [POST /api/rnb/pub/bundles](#calcula-prkmoções-para-um-purchase-context)  | Calcula prkmoções para um purchase context|
| [GET /api/rnb/pub/discounts/disable](#desabilita-promoções-com-datas-passadas)  | Desabilita promoções com datas passadas|

##Calcula promoções considerando uma lista de purchase context

####URL do Recurso:
```http
POST /api/rnb/pub/bundles/batch HTTP/1.1
```

####Exemplo de requisição:
```json
[
  {
    "origin": "Marketplace",
    "accountId": "C0111A50CEB244E59C95422870127A4F",
    "profileId": "0713D5F9-BE2F-4778-B323-F538067F029A",
    "salesChannel": "1",
    "utm_medium": "1",
    "items": [
      {
        "id": "2",
        "quantity": 2,
        "price": 1000,
        "listPrice": 820,
        "priceTags": [],
        "shippingPriceTag": {
          "name": "PercenturalDicountSkusList1",
          "value": 500
        },
        "params": [
          {
            "name": "product@CatalogSystem",
            "value": "736"
          },
          {
            "name": "Seller@CatalogSystem",
            "value": "1"
          }
        ],
        "priceSheet": [],
        "sellerId": "1"
      },
      {
        "index": 1,
        "id": "3",
        "quantity": 1,
        "price": 1000,
        "listPrice": 820,
        "priceTags": [],
        "shippingPriceTag": {
          "name": "PercenturalDicountSkusList1",
          "value": 500
        },
        "params": [
          {
            "name": "product@CatalogSystem",
            "value": "736"
          },
          {
            "name": "Seller@CatalogSystem",
            "value": "1"
          }
        ],
        "priceSheet": [],
        "sellerId": "1"
      }
    ],
    "params": []
  },
  {
    "origin": "Marketplace",
    "accountId": "C0111A50CEB244E59C95422870127A4F",
    "profileId": "0713D5F9-BE2F-4778-B323-F538067F029A",
    "salesChannel": "1",
    "utm_medium": "1",
    "items": [
      {
        "id": "3",
        "quantity": 1,
        "price": 1000,
        "listPrice": 820,
        "priceTags": [],
        "shippingPriceTag": {
          "name": "PercenturalDicountSkusList1",
          "value": 500
        },
        "params": [
          {
            "name": "product@CatalogSystem",
            "value": "736"
          },
          {
            "name": "Seller@CatalogSystem",
            "value": "1"
          }
        ],
        "priceSheet": [],
        "sellerId": "1"
      },
      {
        "index": 1,
        "id": "3",
        "quantity": 1,
        "price": 1000,
        "listPrice": 820,
        "priceTags": [],
        "shippingPriceTag": {
          "name": "PercenturalDicountSkusList1",
          "value": 500
        },
        "params": [
          {
            "name": "product@CatalogSystem",
            "value": "736"
          },
          {
            "name": "Seller@CatalogSystem",
            "value": "1"
          }
        ],
        "priceSheet": [],
        "sellerId": "1"
      }
    ],
    "params": []
  }
]
```
####Exemplo de retorno:
```json
[
  {
    "items": [
      {
        "id": "2",
        "quantity": 2,
        "bundles": [
          {
            "id": "145",
            "name": "Frete 100% sku 764",
            "description": "A melhor de todas",
            "priceTags": [
              {
                "name": "discount@shipping-145#DiscountResource",
                "value": 100,
                "isPercentual": true
              }
            ],
            "featured": true,
            "quantity": 2,
            "endDate": "2014-08-21T10:00:00",
            "matchedParameters": {
              "Seller@CatalogSystem": "1|inclusive",
              "product@CatalogSystem": "736|inclusive"
            }
          }
        ],
        "taggedPrice": 1000,
        "price": 1000,
        "listPrice": 820,
        "sellerId": "1",
        "priceValidUntil": "2014-08-21T10:00:00"
      },
      {
        "index": 1,
        "id": "3",
        "quantity": 1,
        "bundles": [
          {
            "id": "145",
            "name": "Frete 100% sku 764",
            "description": "A melhor de todas",
            "priceTags": [
              {
                "name": "discount@shipping-145#DiscountResource",
                "value": 100,
                "isPercentual": true
              }
            ],
            "featured": true,
            "quantity": 1,
            "endDate": "2014-08-21T10:00:00",
            "matchedParameters": {
              "Seller@CatalogSystem": "1|inclusive",
              "product@CatalogSystem": "736|inclusive"
            }
          }
        ],
        "taggedPrice": 1000,
        "price": 1000,
        "listPrice": 820,
        "sellerId": "1",
        "priceValidUntil": "2014-08-21T10:00:00"
      }
    ],
    "giftsSelectables": [
      {
        "QuantitySelectable": 1,
        "Gifts": [
          {
            "id": "235281",
            "quantity": 1,
            "sellerId": "1"
          }
        ]
      }
    ],
    "Teasers": [
      {
        "id": "175",
        "name": "desc",
        "featured": true,
        "teaserType": "",
        "conditions": {
          "minimumQuantity": 2,
          "parameters": []
        },
        "effects": {
          "parameters": [
            {
              "name": "PercentualDiscount",
              "value": "11.0000"
            }
          ]
        }
      }
    ]
  },
  {
    "items": [
      {
        "id": "3",
        "quantity": 1,
        "bundles": [
          {
            "id": "145",
            "name": "Frete 100% sku 764",
            "description": "A melhor de todas",
            "priceTags": [
              {
                "name": "discount@shipping-145#DiscountResource",
                "value": 100,
                "isPercentual": true
              }
            ],
            "featured": true,
            "quantity": 1,
            "endDate": "2014-08-21T10:00:00",
            "matchedParameters": {
              "Seller@CatalogSystem": "1|inclusive",
              "product@CatalogSystem": "736|inclusive"
            }
          }
        ],
        "taggedPrice": 1000,
        "price": 1000,
        "listPrice": 820,
        "sellerId": "1",
        "priceValidUntil": "2014-08-21T10:00:00"
      },
      {
        "index": 1,
        "id": "3",
        "quantity": 1,
        "bundles": [
          {
            "id": "145",
            "name": "Frete 100% sku 764",
            "description": "A melhor de todas",
            "priceTags": [
              {
                "name": "discount@shipping-145#DiscountResource",
                "value": 100,
                "isPercentual": true
              }
            ],
            "featured": true,
            "quantity": 1,
            "endDate": "2014-08-21T10:00:00",
            "matchedParameters": {
              "Seller@CatalogSystem": "1|inclusive",
              "product@CatalogSystem": "736|inclusive"
            }
          }
        ],
        "taggedPrice": 1000,
        "price": 1000,
        "listPrice": 820,
        "sellerId": "1",
        "priceValidUntil": "2014-08-21T10:00:00"
      }
    ],
    "giftsSelectables": [
      {
        "QuantitySelectable": 1,
        "Gifts": [
          {
            "id": "235281",
            "quantity": 1,
            "sellerId": "1"
          }
        ]
      }
    ],
    "Teasers": [
      {
        "id": "175",
        "name": "desc",
        "featured": true,
        "teaserType": "",
        "conditions": {
          "minimumQuantity": 2,
          "parameters": []
        },
        "effects": {
          "parameters": [
            {
              "name": "PercentualDiscount",
              "value": "11.0000"
            }
          ]
        }
      }
    ]
  }
]
```
####Status codes: `200 OK` 

---

##Calcula prkmoções para um purchase context

####URL do Recurso:
```http
POST /api/rnb/pub/bundles HTTP/1.1
```

####Exemplo de requisição:
```json
{
  "origin": "Marketplace",
  "accountId": "C0111A50CEB244E59C95422870127A4F",
  "profileId": "0713D5F9-BE2F-4778-B323-F538067F029A",
  "salesChannel": "1",
  "utm_medium": "1",
  "items": [
    {
      "id": "2",
      "quantity": 2,
      "price": 1000,
      "listPrice": 820,
      "priceTags": [],
      "shippingPriceTag": {
        "name": "PercenturalDicountSkusList1",
        "value": 500
      },
      "params": [
        {
          "name": "product@CatalogSystem",
          "value": "736"
        },
        {
          "name": "Seller@CatalogSystem",
          "value": "1"
        }
      ],
      "priceSheet": [],
      "sellerId": "1"
    },
    {
      "index": 1,
      "id": "3",
      "quantity": 1,
      "price": 1000,
      "listPrice": 820,
      "priceTags": [],
      "shippingPriceTag": {
        "name": "PercenturalDicountSkusList1",
        "value": 500
      },
      "params": [
        {
          "name": "product@CatalogSystem",
          "value": "736"
        },
        {
          "name": "Seller@CatalogSystem",
          "value": "1"
        }
      ],
      "priceSheet": [],
      "sellerId": "1"
    }
  ],
  "params": []
}
```
####Exemplo de retorno:
```json
{
  "items": [
    {
      "id": "2",
      "quantity": 2,
      "bundles": [
        {
          "id": "145",
          "name": "Frete 100% sku 764",
          "description": "A melhor de todas",
          "priceTags": [
            {
              "name": "discount@shipping-145#DiscountResource",
              "value": 100,
              "isPercentual": true
            }
          ],
          "featured": true,
          "quantity": 2,
          "endDate": "2014-08-21T10:00:00",
          "matchedParameters": {
            "Seller@CatalogSystem": "1|inclusive",
            "product@CatalogSystem": "736|inclusive"
          }
        }
      ],
      "taggedPrice": 1000,
      "price": 1000,
      "listPrice": 820,
      "sellerId": "1",
      "priceValidUntil": "2014-08-21T10:00:00"
    },
    {
      "index": 1,
      "id": "3",
      "quantity": 1,
      "bundles": [
        {
          "id": "145",
          "name": "Frete 100% sku 764",
          "description": "A melhor de todas",
          "priceTags": [
            {
              "name": "discount@shipping-145#DiscountResource",
              "value": 100,
              "isPercentual": true
            }
          ],
          "featured": true,
          "quantity": 1,
          "endDate": "2014-08-21T10:00:00",
          "matchedParameters": {
            "Seller@CatalogSystem": "1|inclusive",
            "product@CatalogSystem": "736|inclusive"
          }
        }
      ],
      "taggedPrice": 1000,
      "price": 1000,
      "listPrice": 820,
      "sellerId": "1",
      "priceValidUntil": "2014-08-21T10:00:00"
    }
  ],
  "giftsSelectables": [
    {
      "QuantitySelectable": 1,
      "Gifts": [
        {
          "id": "235281",
          "quantity": 1,
          "sellerId": "1"
        }
      ]
    }
  ],
  "Teasers": [
    {
      "id": "175",
      "name": "desc",
      "featured": true,
      "teaserType": "",
      "conditions": {
        "minimumQuantity": 2,
        "parameters": []
      },
      "effects": {
        "parameters": [
          {
            "name": "PercentualDiscount",
            "value": "11.0000"
          }
        ]
      }
    }
  ]
}
```
####Status codes: `200 OK` 

---

##Desabilita promoções com datas passadas

####URL do Recurso:
```http
GET /api/rnb/pub/discounts/disable HTTP/1.1
```

####Exemplo de retorno:
```json
[
  {
    "count": 13,
    "discountsDisabled": [
      "20",
      "57",
      "137",
      "150",
      "152",
      "159",
      "160",
      "161",
      "162",
      "163",
      "167",
      "168",
      "169"
    ]
  }
]
```
####Status codes: `200 OK` 

---

