---
layout: page
title: Google Tag Manager
category: cms-guide
---

## O que é Google Tag Manager?

O Tag manager é uma ferramenta do Google que faz gerenciamento de tags no site. Mais informações: http://www.youtube.com/watch?v=KRvbFpeZ11Y

Na versão SmartCheckout, a integração com Tag Manager é nativa e vai simplificar bastante a integração da loja com os parceiros.


## Como começar?

1) Criar uma conta no GoogleTagManager (http://www.google.com/tagmanager)  e configurar as tags necessárias.

2) Configurar na VTEX o código de identificação da loja no TagManager.
Acesse o link abaixo para configurar:

**http://[DOMINIO]/admin/portal/#/sites/default/config**

## Exemplo das informações enviadas

```json
{
    "transactionId": "344611898869-01",
    "transactionDate": "2013-07-05T20:33:24",
    "transactionAffiliation": "1",
    "transactionTotal": 372.64,
    "transactionShipping": 106.94,
    "transactionProducts": [
        {
            "id": "2480",
            "name": "Ração Club Performance Adult - Royal Canin Ração Club Performance Adult 15Kg - Royal Canin",
            "sku": "2479",
            "price": 131,
            "quantity": 1,
            "components": []
        },
        {
            "id": "5089",
            "name": "TAPETE HIGIÊNICO SUPERSECÃO - PETIX TAPETE HIGIÊNICO SUPERSECÃO - 30 UNIDADES - PETIX",
            "sku": "5088",
            "price": 44.9,
            "quantity": 3,
            "components": []
        }
    ]
    "event": "orderPlaced"
}
```