---
layout: oms
title: Orders
category: oms-api
---

#orders
<table class="table">
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descrição</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="#listar-pedidos">GET /api/oms/pvt/orders</a></td>
      <td>Listar pedidos</td>
    </tr>
    <tr>
      <td><a href="#consultar-pedido">GET /api/oms/pvt/orders/{orderId}</a></td>
      <td>Consultar pedido</td>
    </tr>
    <tr>
      <td><a href="#iniciar-manuseio">POST /api/oms/pvt/orders/{orderId}/start-handling</a></td>
      <td>Iniciar manuseio</td>
    </tr>
    <tr>
      <td><a href="#notificar-faturamento">POST /api/oms/pvt/orders/{orderId}/invoice</a></td>
      <td>Notificar Faturamento</td>
    </tr>
    <tr>
      <td><a href="#cancelar-pedido">POST /api/oms/pvt/orders/{orderId}/cancel</a></td>
      <td>Cancelar pedido</td>
    </tr>
    <tr>
      <td><a href="#registrar-mudan%C3%A7as">POST /api/oms/pvt/orders/{orderId}/changes</a></td>
      <td>Registrar mudanças</td>
    </tr>
  </tbody>
</table>

###Listar pedidos
Permite consultar uma lista de pedidos de acordo com os filtros informados.

```
GET /api/oms/pvt/orders
```

####Parâmetros

| Nome           | Tipo           | Descrição     |
| :-------------  |--------------  |-------------- |
| f_status | string     | define um status de pedido. Caso seja passado, só serão retornados pedidos nesse status. Ver
na documentação anexa a lista dos possíveis status de pedido no seu respectivo workflow |
| clientEmail| string     | valor do e-mail do cliente que efetuou a compra. Só serão retornados pedidos que possuem
esse e-mail |
| clientDoc | string     | valor do documento do cliente que efetuou a compra. Só serão retornados pedidos que
possuem esse número de documento (no Brasil é o número do CPF) |
| clientCorporateDoc | string     | valor do documento do cliente corporativo que efetuou a compra. Só serão
retornados pedidos que possuem esse número de documento (no Brasil é o número do CNPJ) |
| per_page | string     | Cvalor número da quantidade de itens que se deseja obter (o default é 15) |
| page | string     | valor número da página que se deseja obter |
| orderBy | string     | string com o valor do campo e tipo de ordernação |



####Response
<pre class="headers">
Status: 200 Ok
</pre>
```json
{
  "list": [
    {
      "orderId": "403972508868-01",
      "creationDate": "2014-01-17T12:41:48",
      "clientName": "Patr oliveira",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Oi Chip SP DDD 014"
        }
      ],
      "totalValue": 500.0,
      "paymentNames": "Hipercard",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058072",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-21T12:42:04",
      "orderIsComplete": true
    },
    {
      "orderId": "403790220350-01",
      "creationDate": "2014-01-16T19:03:40",
      "clientName": "Denilson Pinheiro",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Tim Chip Infinity Pré Pago PE - DDD 087"
        }
      ],
      "totalValue": 300.0,
      "paymentNames": "Visa",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058069",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T19:24:21",
      "orderIsComplete": true
    },
    {
      "orderId": "403771532392-02",
      "creationDate": "2014-01-16T17:25:35",
      "clientName": "Marcelo Couto",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Computador PC All in One Positivo, Intel® Core™ 2 D T6600 3GB HD 750GB Union Touch 2005 Webcam Bluetooth Wireless HDMI - Windows® 7 Home Premium Computador PC All in One Positivo, Intel Core 2 Duo T6600, 3GB, HD 750GB, Union Touch 2005, Webcam, Bluetooth, Wireless, HDMI - Windows 7 Home Premium"
        },
        {
          "seller": "1",
          "quantity": 1,
          "description": "Telefone com Fio Pleno - Cinza Ártico - Intelbras"
        }
      ],
      "totalValue": 291900.0,
      "paymentNames": "Boleto Bancário",
      "status": "payment-pending",
      "statusDescription": "Pagamento Pendente",
      "sequence": "1058067",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "orderIsComplete": true
    },
    {
      "orderId": "403771532392-01",
      "creationDate": "2014-01-16T17:25:32",
      "clientName": "Marcelo Couto",
      "items": [
        {
          "seller": "ellen",
          "quantity": 1,
          "description": "PINGENTE COCKER - SÃO PET PINGENTE COCKER - AZUL - SÃO PET"
        }
      ],
      "totalValue": 15640.0,
      "paymentNames": "Boleto Bancário",
      "status": "payment-pending",
      "statusDescription": "Pagamento Pendente",
      "sequence": "1058065",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "orderIsComplete": true
    },
    {
      "orderId": "403753031192-01",
      "creationDate": "2014-01-16T14:50:31",
      "clientName": "Ellen Silva",
      "items": [
        {
          "seller": "ellen",
          "quantity": 1,
          "description": "PINGENTE COCKER - SÃO PET PINGENTE COCKER - AZUL - SÃO PET"
        }
      ],
      "totalValue": 16342.0,
      "paymentNames": "Boleto Bancário",
      "status": "payment-pending",
      "statusDescription": "Pagamento Pendente",
      "sequence": "1058063",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "orderIsComplete": true
    },
    {
      "orderId": "403752812260-01",
      "creationDate": "2014-01-16T14:46:52",
      "clientName": "Ellen Silva",
      "items": [
        {
          "seller": "ellen",
          "quantity": 1,
          "description": "PINGENTE COCKER - SÃO PET PINGENTE COCKER - AZUL - SÃO PET"
        }
      ],
      "totalValue": 16342.0,
      "paymentNames": "Boleto Bancário",
      "status": "payment-pending",
      "statusDescription": "Pagamento Pendente",
      "sequence": "1058061",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "lastMessageUnread": "\n\n\nMeu pedido ainda não chegou! \t\t \t   \t\t  \n",
      "orderIsComplete": true
    },
    {
      "orderId": "403752368404-01",
      "creationDate": "2014-01-16T14:39:28",
      "clientName": "Ellen Silva",
      "items": [
        {
          "seller": "ellen",
          "quantity": 1,
          "description": "PINGENTE COCKER - SÃO PET PINGENTE COCKER - AZUL - SÃO PET"
        }
      ],
      "totalValue": 16342.0,
      "paymentNames": "Boleto Bancário",
      "status": "payment-approved",
      "statusDescription": "Pagamento Aprovado",
      "sequence": "1058059",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T14:45:54",
      "orderIsComplete": true
    },
    {
      "orderId": "403752231980-01",
      "creationDate": "2014-01-16T14:37:11",
      "clientName": "Ellen Silva",
      "items": [
        {
          "seller": "ellen",
          "quantity": 1,
          "description": "PINGENTE COCKER - SÃO PET PINGENTE COCKER - AZUL - SÃO PET"
        }
      ],
      "totalValue": 16342.0,
      "paymentNames": "Visa",
      "status": "payment-approved",
      "statusDescription": "Pagamento Aprovado",
      "sequence": "1058057",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T20:37:47",
      "orderIsComplete": true
    },
    {
      "orderId": "403733592532-01",
      "creationDate": "2014-01-16T12:59:51",
      "clientName": "Marcus moreno",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "iPad Smart Cover (Leather) - Sahara - Apple"
        }
      ],
      "totalValue": 15000.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058054",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T13:10:12",
      "orderIsComplete": true
    },
    {
      "orderId": "403733161737-01",
      "creationDate": "2014-01-16T12:52:41",
      "clientName": "Saul Goodman",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Samsung Ch@t 335 Rosa Desbloqueado Tim, Teclado QWERTY, MP3 Player, Câmera 2.0MP, Bluetooth, Wi-Fi, Acesso as Redes Sociais + Chip Tim"
        }
      ],
      "totalValue": 25100.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058051",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T13:03:01",
      "orderIsComplete": true
    },
    {
      "orderId": "403732998283-01",
      "creationDate": "2014-01-16T12:49:58",
      "clientName": "Saul Goodman",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Samsung Ch@t 335 Rosa Desbloqueado Tim, Teclado QWERTY, MP3 Player, Câmera 2.0MP, Bluetooth, Wi-Fi, Acesso as Redes Sociais + Chip Tim"
        }
      ],
      "totalValue": 25100.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058048",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T13:00:20",
      "orderIsComplete": true
    },
    {
      "orderId": "403732719320-01",
      "creationDate": "2014-01-16T12:45:19",
      "clientName": "MArcus Moreno",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "iPad Smart Cover (Leather) - Sahara - Apple"
        }
      ],
      "totalValue": 15000.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058045",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-20T12:55:55",
      "orderIsComplete": true
    },
    {
      "orderId": "403490516091-01",
      "creationDate": "2014-01-15T13:08:36",
      "clientName": "Fulano Cicrano",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Samsung Ch@t 335 Rosa Desbloqueado Tim, Teclado QWERTY, MP3 Player, Câmera 2.0MP, Bluetooth, Wi-Fi, Acesso as Redes Sociais + Chip Tim"
        }
      ],
      "totalValue": 25100.0,
      "paymentNames": "Vale, PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058042",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-19T13:19:00",
      "orderIsComplete": true
    },
    {
      "orderId": "403490137788-01",
      "creationDate": "2014-01-15T13:02:17",
      "clientName": "Fulano Cicrano",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Samsung Ch@t 335 Rosa Desbloqueado Tim, Teclado QWERTY, MP3 Player, Câmera 2.0MP, Bluetooth, Wi-Fi, Acesso as Redes Sociais + Chip Tim"
        }
      ],
      "totalValue": 25100.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058024",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-19T13:12:39",
      "orderIsComplete": true
    },
    {
      "orderId": "403490088660-01",
      "creationDate": "2014-01-15T13:01:28",
      "clientName": "Fulano Cicrano",
      "items": [
        {
          "seller": "1",
          "quantity": 1,
          "description": "Samsung Ch@t 335 Rosa Desbloqueado Tim, Teclado QWERTY, MP3 Player, Câmera 2.0MP, Bluetooth, Wi-Fi, Acesso as Redes Sociais + Chip Tim"
        }
      ],
      "totalValue": 25100.0,
      "paymentNames": "PayPal",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "sequence": "1058021",
      "salesChannel": "1",
      "affiliateId": "",
      "origin": "Marketplace",
      "ShippingEstimatedDate": "2014-01-19T13:11:52",
      "orderIsComplete": true
    }
  ],
  "facets": [
    {
      "name": "SalesChannelName",
      "type": "multiple",
      "items": [
        {
          "name": "Loja Principal",
          "quantity": 84377,
          "url": "Loja Principal"
        },
        {
          "name": "re",
          "quantity": 3,
          "url": "re"
        }
      ],
      "rangeUrlTemplate": "f_salesChannel"
    },
    {
      "name": "CallCenterOperatorName",
      "type": "multiple",
      "items": [
        {
          "name": "Admin Admin",
          "quantity": 2,
          "url": "Admin Admin"
        },
        {
          "name": "Alan Diego Dantas Prot",
          "quantity": 1,
          "url": "Alan Diego Dantas Prot"
        },
        {
          "name": "Andr",
          "quantity": 2,
          "url": "Andr"
        },
        {
          "name": "Aplica",
          "quantity": 13,
          "url": "Aplica"
        },
        {
          "name": "Augusto Barbosa",
          "quantity": 2,
          "url": "Augusto Barbosa"
        },
        {
          "name": "Daniel Blando Deluiggi",
          "quantity": 2,
          "url": "Daniel Blando Deluiggi"
        },
        {
          "name": "Denilson dos Santos Pinheiro",
          "quantity": 1,
          "url": "Denilson dos Santos Pinheiro"
        },
        {
          "name": "Ellen Machado Silva",
          "quantity": 12,
          "url": "Ellen Machado Silva"
        },
        {
          "name": "Ellen Silva",
          "quantity": 1,
          "url": "Ellen Silva"
        },
        {
          "name": "Frederico Oliveira Santos",
          "quantity": 31,
          "url": "Frederico Oliveira Santos"
        },
        {
          "name": "Geriel  Castro",
          "quantity": 2,
          "url": "Geriel  Castro"
        },
        {
          "name": "Guilherme Rodrigues",
          "quantity": 2,
          "url": "Guilherme Rodrigues"
        },
        {
          "name": "Guilherme Schirmer de Souza",
          "quantity": 16,
          "url": "Guilherme Schirmer de Souza"
        },
        {
          "name": "Gustavo Almeida",
          "quantity": 9,
          "url": "Gustavo Almeida"
        },
        {
          "name": "Leandro Adriano Oriente",
          "quantity": 1,
          "url": "Leandro Adriano Oriente"
        },
        {
          "name": "Ludmila Neves",
          "quantity": 4,
          "url": "Ludmila Neves"
        },
        {
          "name": "Ludmila Neves Cavalcanti",
          "quantity": 2,
          "url": "Ludmila Neves Cavalcanti"
        },
        {
          "name": "Marcelo Couto",
          "quantity": 2,
          "url": "Marcelo Couto"
        },
        {
          "name": "Rafael Henrique Paiva Vieira",
          "quantity": 1,
          "url": "Rafael Henrique Paiva Vieira"
        },
        {
          "name": "Renato Vieira Fernandes",
          "quantity": 1,
          "url": "Renato Vieira Fernandes"
        },
        {
          "name": "Rodrigo Almeida",
          "quantity": 9,
          "url": "Rodrigo Almeida"
        },
        {
          "name": "Ronan Cruz",
          "quantity": 1,
          "url": "Ronan Cruz"
        },
        {
          "name": "Tiago Marques",
          "quantity": 2,
          "url": "Tiago Marques"
        },
        {
          "name": "William Fernandes",
          "quantity": 3,
          "url": "William Fernandes"
        },
        {
          "name": "Ygor Oliveira Pereira dos Santos",
          "quantity": 3,
          "url": "Ygor Oliveira Pereira dos Santos"
        },
        {
          "name": "ludmila Neves",
          "quantity": 8,
          "url": "ludmila Neves"
        },
        {
          "name": "marcus moreno",
          "quantity": 24,
          "url": "marcus moreno"
        }
      ],
      "rangeUrlTemplate": "f_callCenterOperatorName"
    },
    {
      "name": "SellerNames",
      "type": "multiple",
      "items": [
        {
          "name": "WalmartV5",
          "quantity": 84359,
          "url": "WalmartV5"
        },
        {
          "name": "meu amigo pet",
          "quantity": 21,
          "url": "meu amigo pet"
        }
      ],
      "rangeUrlTemplate": "f_sellerNames"
    },
    {
      "name": "UtmSource",
      "type": "multiple",
      "items": [
        {
          "name": "teste",
          "quantity": 2,
          "url": "teste"
        }
      ],
      "rangeUrlTemplate": "f_UtmSource"
    },
    {
      "name": "RateAndBenefits",
      "type": "multiple",
      "items": [
        {
          "name": "Compre Junto Exemplo",
          "quantity": 5,
          "url": "Compre Junto Exemplo"
        },
        {
          "name": "Compre e Ganhe - Maquiagem",
          "quantity": 37,
          "url": "Compre e Ganhe - Maquiagem"
        },
        {
          "name": "Desconto Boleto",
          "quantity": 8,
          "url": "Desconto Boleto"
        },
        {
          "name": "Desconto Nominal 764 Carro Audi",
          "quantity": 16,
          "url": "Desconto Nominal 764 Carro Audi"
        },
        {
          "name": "Desconto Nominal Marcus",
          "quantity": 31,
          "url": "Desconto Nominal Marcus"
        },
        {
          "name": "Desconto Nominal Sku 270851",
          "quantity": 6,
          "url": "Desconto Nominal Sku 270851"
        },
        {
          "name": "Desconto Nominal para boleto Site todo",
          "quantity": 5,
          "url": "Desconto Nominal para boleto Site todo"
        },
        {
          "name": "Desconto Percentual 764",
          "quantity": 14,
          "url": "Desconto Percentual 764"
        },
        {
          "name": "Frete 100% sku 764",
          "quantity": 4,
          "url": "Frete 100% sku 764"
        },
        {
          "name": "Frete Nominal Sku 764",
          "quantity": 59,
          "url": "Frete Nominal Sku 764"
        },
        {
          "name": "Frete Percentual Sku 20191",
          "quantity": 20,
          "url": "Frete Percentual Sku 20191"
        },
        {
          "name": "Frete Percentual sku 2000012845 NÃO APAGAR",
          "quantity": 10,
          "url": "Frete Percentual sku 2000012845 NÃO APAGAR"
        },
        {
          "name": "Frete Percentual sku 264476 NÃO APAGAR Marketplace",
          "quantity": 9,
          "url": "Frete Percentual sku 264476 NÃO APAGAR Marketplace"
        },
        {
          "name": "FreteGrátisSKU",
          "quantity": 5,
          "url": "FreteGrátisSKU"
        },
        {
          "name": "Leve X e Pague Y",
          "quantity": 6,
          "url": "Leve X e Pague Y"
        },
        {
          "name": "Nominal sku 264476 NÃO APAGAR Marketplace",
          "quantity": 14,
          "url": "Nominal sku 264476 NÃO APAGAR Marketplace"
        },
        {
          "name": "Pague e leve",
          "quantity": 5,
          "url": "Pague e leve"
        },
        {
          "name": "Promoçao Primeira Compra",
          "quantity": 775,
          "url": "Promoçao Primeira Compra"
        },
        {
          "name": "Promoção Primeira Compra Marcus",
          "quantity": 3,
          "url": "Promoção Primeira Compra Marcus"
        },
        {
          "name": "Promoção de Brinde!",
          "quantity": 63,
          "url": "Promoção de Brinde!"
        },
        {
          "name": "Telefone sem Fio Gigaset A390",
          "quantity": 2,
          "url": "Telefone sem Fio Gigaset A390"
        },
        {
          "name": "Test Lista de Casamento (GiftListType)",
          "quantity": 3,
          "url": "Test Lista de Casamento (GiftListType)"
        },
        {
          "name": "Testar hora no novo admin",
          "quantity": 4,
          "url": "Testar hora no novo admin"
        },
        {
          "name": "Testar hora no novo admin #2",
          "quantity": 9553,
          "url": "Testar hora no novo admin #2"
        },
        {
          "name": "Teste Frete Nominal Todo Site",
          "quantity": 3,
          "url": "Teste Frete Nominal Todo Site"
        },
        {
          "name": "Teste Frete Percentual Todo Site",
          "quantity": 774,
          "url": "Teste Frete Percentual Todo Site"
        },
        {
          "name": "Teste Frete Percentual Todo Site 2",
          "quantity": 8,
          "url": "Teste Frete Percentual Todo Site 2"
        },
        {
          "name": "Teste Leve X Marcus",
          "quantity": 4,
          "url": "Teste Leve X Marcus"
        },
        {
          "name": "Teste Nominal 30433",
          "quantity": 73,
          "url": "Teste Nominal 30433"
        },
        {
          "name": "Teste Nominal sku30433 - Daniel",
          "quantity": 22,
          "url": "Teste Nominal sku30433 - Daniel"
        },
        {
          "name": "Teste Promoção Kit",
          "quantity": 1,
          "url": "Teste Promoção Kit"
        },
        {
          "name": "Teste Promoção Para kit",
          "quantity": 11,
          "url": "Teste Promoção Para kit"
        },
        {
          "name": "Teste disable",
          "quantity": 1,
          "url": "Teste disable"
        },
        {
          "name": "Teste sem UTM",
          "quantity": 11,
          "url": "Teste sem UTM"
        },
        {
          "name": "Teste sku30433 - Daniel",
          "quantity": 3,
          "url": "Teste sku30433 - Daniel"
        },
        {
          "name": "TesteBrinde Marcus",
          "quantity": 6,
          "url": "TesteBrinde Marcus"
        },
        {
          "name": "UTM_Medium",
          "quantity": 1,
          "url": "UTM_Medium"
        },
        {
          "name": "frete percentual",
          "quantity": 48,
          "url": "frete percentual"
        },
        {
          "name": "novo desconto com 4",
          "quantity": 1,
          "url": "novo desconto com 4"
        },
        {
          "name": "teste comprejunto",
          "quantity": 2,
          "url": "teste comprejunto"
        },
        {
          "name": "teste datas",
          "quantity": 479,
          "url": "teste datas"
        },
        {
          "name": "teste sem colecao 3",
          "quantity": 1,
          "url": "teste sem colecao 3"
        },
        {
          "name": "utm_source teste",
          "quantity": 2,
          "url": "utm_source teste"
        }
      ],
      "rangeUrlTemplate": "f_RnB"
    },
    {
      "name": "PaymentNames",
      "type": "multiple",
      "items": [
        {
          "name": "American Express",
          "quantity": 1,
          "url": "American Express"
        },
        {
          "name": "Bcash",
          "quantity": 2,
          "url": "Bcash"
        },
        {
          "name": "Boleto 30 dias",
          "quantity": 3,
          "url": "Boleto 30 dias"
        },
        {
          "name": "Boleto Bancário",
          "quantity": 83890,
          "url": "Boleto Bancário"
        },
        {
          "name": "Diners",
          "quantity": 6,
          "url": "Diners"
        },
        {
          "name": "Débito Itau",
          "quantity": 20,
          "url": "Débito Itau"
        },
        {
          "name": "Efetivo",
          "quantity": 1,
          "url": "Efetivo"
        },
        {
          "name": "Elo",
          "quantity": 14,
          "url": "Elo"
        },
        {
          "name": "Hipercard",
          "quantity": 2,
          "url": "Hipercard"
        },
        {
          "name": "Mastercard",
          "quantity": 72,
          "url": "Mastercard"
        },
        {
          "name": "Mercado Pago",
          "quantity": 2,
          "url": "Mercado Pago"
        },
        {
          "name": "PagSeguro",
          "quantity": 4,
          "url": "PagSeguro"
        },
        {
          "name": "PayPal",
          "quantity": 102,
          "url": "PayPal"
        },
        {
          "name": "Promissory",
          "quantity": 1,
          "url": "Promissory"
        },
        {
          "name": "Vale",
          "quantity": 187,
          "url": "Vale"
        },
        {
          "name": "Visa",
          "quantity": 294,
          "url": "Visa"
        },
        {
          "name": "Visa Electron",
          "quantity": 20,
          "url": "Visa Electron"
        }
      ],
      "rangeUrlTemplate": "f_paymentNames"
    },
    {
      "name": "StatusDescription",
      "type": "multiple",
      "items": [
        {
          "name": "Aprovar Pagamento",
          "quantity": 15,
          "url": "Aprovar Pagamento"
        },
        {
          "name": "Cancelado",
          "quantity": 59661,
          "url": "Cancelado"
        },
        {
          "name": "Cancelamento Solicitado",
          "quantity": 1,
          "url": "Cancelamento Solicitado"
        },
        {
          "name": "Cancelar",
          "quantity": 1328,
          "url": "Cancelar"
        },
        {
          "name": "Faturado",
          "quantity": 24,
          "url": "Faturado"
        },
        {
          "name": "Pagamento Aprovado",
          "quantity": 6,
          "url": "Pagamento Aprovado"
        },
        {
          "name": "Pagamento Pendente",
          "quantity": 23052,
          "url": "Pagamento Pendente"
        },
        {
          "name": "Preparando Entrega",
          "quantity": 2,
          "url": "Preparando Entrega"
        },
        {
          "name": "Pronto para o manuseio",
          "quantity": 291,
          "url": "Pronto para o manuseio"
        }
      ],
      "rangeUrlTemplate": "f_statusDescription"
    },
    {
      "name": "ShippingEstimatedDate",
      "type": "single",
      "items": [
        {
          "name": "Atrasadas",
          "quantity": 5601,
          "url": "-1.days"
        },
        {
          "name": "Hoje",
          "url": "0.days"
        },
        {
          "name": "Amanhã",
          "quantity": 8,
          "url": "1.days"
        },
        {
          "name": "Próximos 7 dias",
          "quantity": 36,
          "url": "7.days"
        }
      ],
      "rangeUrlTemplate": "f_shippingEstimate"
    },
    {
      "name": "creationDate",
      "type": "date",
      "items": [
        {
          "name": "Ontem",
          "quantity": 11,
          "url": "creationDate:[2014-01-16T12:00:00Z TO 2014-01-17T12:00:00Z]"
        },
        {
          "name": "Hoje",
          "quantity": 1,
          "url": "creationDate:[2014-01-17T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 7 dias",
          "quantity": 204,
          "url": "creationDate:[2014-01-11T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 15 dias",
          "quantity": 339,
          "url": "creationDate:[2014-01-03T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 30 dias",
          "quantity": 571,
          "url": "creationDate:[2013-12-19T12:00:00Z TO 2014-01-18T12:00:00Z]"
        }
      ],
      "rangeUrlTemplate": "f_creationDate"
    },
    {
      "name": "authorizedDate",
      "type": "date",
      "items": [
        {
          "name": "Ontem",
          "quantity": 9,
          "url": "authorizedDate:[2014-01-16T12:00:00Z TO 2014-01-17T12:00:00Z]"
        },
        {
          "name": "Hoje",
          "quantity": 1,
          "url": "authorizedDate:[2014-01-17T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 7 dias",
          "quantity": 44,
          "url": "authorizedDate:[2014-01-11T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 15 dias",
          "quantity": 54,
          "url": "authorizedDate:[2014-01-03T12:00:00Z TO 2014-01-18T12:00:00Z]"
        },
        {
          "name": "Últimos 30 dias",
          "quantity": 91,
          "url": "authorizedDate:[2013-12-19T12:00:00Z TO 2014-01-18T12:00:00Z]"
        }
      ],
      "rangeUrlTemplate": "f_authorizedDate"
    }
  ],
  "paging": {
    "total": 84380,
    "pages": 5626,
    "currentPage": 1,
    "perPage": 15
  },
  "stats": {
    "stats": {
      "totalItems": {
        "Count": 84380,
        "Max": 11.0,
        "Mean": 1.002571699454847,
        "Min": 1.0,
        "StdDev": 0.08820251596196596,
        "Sum": 84597.0,
        "SumOfSquares": 85471.0
      },
      "totalValue": {
        "Count": 84380,
        "Max": 2659036.0,
        "Mean": 139280.1093268547,
        "Min": -119246.0,
        "StdDev": 97490.3195093532,
        "Sum": 11752455625.0,
        "SumOfSquares": 2438851899092869.0
      }
    }
  }
}
```

---

###Consultar pedido
Permite consultar os dados detalhados de um pedido.


```
GET /api/oms/pvt/orders/{orderId}
```

####Response
<pre class="headers">
Status: 200 Ok, 404 NotFound
</pre>
```json
{
  "orderId": "384441896360-01",
  "marketplaceOrderId": "",
  "sellerOrderId": "wlm-384441896360-01",
  "value": 4689,
  "creationDate": "2013-12-18T19:31:36",
  "lastChange": "2013-12-18T22:07:50",
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 3189
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos"
    },
    {
      "id": "Shipping",
      "name": "Total do Frete",
      "value": 1500
    },
    {
      "id": "Tax",
      "name": "Total da Taxa"
    }
  ],
  "items": [
    {
      "id": "2000013820",
      "productId": "500000678",
      "quantity": 1,
      "seller": "walmartv5",
      "name": "NUTRÓPICA ARARAS COM FRUTAS - NUTRÓPICA NUTRÓPICA ARARAS COM FRUTAS - 600 GR - NUTRÓPICA",
      "price": 2390,
      "listPrice": 2390,
      "priceTags": [],
      "imageUrl": "/arquivos/ids/1218679-55-55/20120705_15584.jpg",
      "components": [],
      "bundleItems": [],
      "params": [],
      "offerings": [],
      "sellerSku": "7647",
      "commission": 1500,
      "additionalInfo": {
        "brandName": "Nutropica",
        "brandId": "5000069",
        "categoriesIds": "/5000000/5000003/5000050/",
        "productClusterId": "",
        "commercialConditionId": "1"
      },
      "measurementUnit": "un",
      "unitMultiplier": 1.0000,
      "sellingPrice": 2390
    },
    {
      "id": "2000013808",
      "productId": "500000667",
      "quantity": 1,
      "seller": "ellen",
      "name": "FARINHADA PASSÁROS FRUGIVOROS E INSETIVOROS - ALCON CLUB FARINHADA PASSÁROS FRUGIVOROS E INSETIVOROS - 200GR - ALCON CLUB",
      "price": 799,
      "listPrice": 799,
      "priceTags": [],
      "imageUrl": "/arquivos/ids/1218667-55-55/alconfarinhad.jpg",
      "components": [],
      "bundleItems": [],
      "params": [],
      "offerings": [],
      "sellerSku": "5007",
      "commission": 1500,
      "additionalInfo": {
        "brandName": "Alcon",
        "brandId": "5000001",
        "categoriesIds": "/5000000/5000003/5000050/",
        "productClusterId": "",
        "commercialConditionId": "1"
      },
      "measurementUnit": "un",
      "unitMultiplier": 1.0000,
      "sellingPrice": 799
    }
  ],
  "clientProfileData": {
    "id": "clientProfileData",
    "email": "fred.santos@bol.com.br-52.ct.vtex.com.br",
    "firstName": "Frederico",
    "lastName": "Santos",
    "document": "94731349591",
    "phone": "2171222928",
    "userProfileId": "965AE4F7-8B8F-4D91-9DC9-9D8A82941EA8"
  },
  "callCenterOperatorData": {
    "id": "CallCenterOperatorAttachment",
    "email": "frederico.santos@vtex.com.br",
    "userName": "Frederico Oliveira Santos"
  },
  "ratesAndBenefitsData": {
    "id": "ratesAndBenefitsData",
    "rateAndBenefitsIdentifiers": []
  },
  "shippingData": {
    "id": "shippingData",
    "address": {
      "addressType": "residential",
      "receiverName": "Porteiro",
      "addressId": "-1363816362015",
      "postalCode": "22271-020",
      "city": "Rio De Janeiro",
      "state": "RJ",
      "country": "BRA",
      "street": "Rua De Conde Iraja",
      "number": "97",
      "neighborhood": "Botafogo",
      "complement": "Cobal"
    },
    "logisticsInfo": [
      {
        "selectedSla": "Normal",
        "price": 1150,
        "shippingEstimate": "4d",
        "shippingEstimateDate": "2013-12-22T22:07:50.8046601Z",
        "slas": [
          {
            "id": "Normal",
            "name": "Normal",
            "shippingEstimate": "4d",
            "price": 1150
          }
        ],
        "shipsTo": [
          "BRA"
        ],
        "deliveryIds": [
          {
            "courierId": "60",
            "dockId": "17E5C1F3-57CF-4E12-9509-4A04C09E26B8",
            "quantity": 1,
            "warehouseId": "1_1",
            "courierName": "eSedex"
          }
        ]
      },
      {
        "itemIndex": 1,
        "selectedSla": "Normal",
        "price": 350,
        "shippingEstimate": "4d",
        "shippingEstimateDate": "2013-12-22T22:07:50.8046601Z",
        "slas": [
          {
            "id": "Normal",
            "name": "Normal",
            "shippingEstimate": "4d",
            "price": 350
          }
        ],
        "shipsTo": [
          "BRA"
        ],
        "deliveryIds": [
          {
            "courierId": "60",
            "dockId": "17E5C1F3-57CF-4E12-9509-4A04C09E26B8",
            "quantity": 1,
            "warehouseId": "1_1",
            "courierName": "eSedex"
          }
        ]
      }
    ]
  },
  "paymentData": {
    "id": "paymentData",
    "giftCards": [],
    "transactions": [
      {
        "isActive": true,
        "transactionId": "9FCA5F1025B348B2BC3CDD56CFBF7CE0",
        "payments": [
          {
            "id": "16498D4F958444C6A58F497B3408A487",
            "paymentSystem": "6",
            "paymentSystemName": "Boleto Bancário",
            "value": 4689,
            "installments": 1,
            "referenceValue": 4689,
            "url": "https://walmartv5.vtexpayments.com.br/BankIssuedInvoice/Transaction/9FCA5F1025B348B2BC3CDD56CFBF7CE0/Payment/16498D4F958444C6A58F497B3408A487/Installment/{Installment}",
            "group": "bankInvoice",
            "connectorResponses": {}
          }
        ]
      }
    ]
  },
  "sellers": [
    {
      "id": "1",
      "name": "walmartv5",
      "logo": "http://portal.vtexcommerce.com.br/arquivos/logo.jpg"
    }
  ],
  "origin": "Marketplace",
  "workflowData": {
    "instanceId": "9E64415216F84B92A3C2E7EF53DF44D6",
    "surrogateKey": "384441896360-01"
  },
  "sequence": "1055669",
  "affiliateId": "",
  "salesChannel": "1",
  "status": "invoiced",
  "statusDescription": "Faturado",
  "packageAttachment": {
    "packages": [
      {
        "items": [
          {
            "quantity": 1,
            "price": 2390
          },
          {
            "itemIndex": 1,
            "quantity": 1,
            "price": 799
          }
        ],
        "courier": "Correios",
        "invoiceNumber": "Nfe-01",
        "invoiceValue": 4689,
        "issuanceDate": "2013-12-18T00:00:00",
        "trackingNumber": "123456",
        "trackingUrl": "http://trakink.com/123456",
        "type": "Output"
      }
    ]
  },
  "followUpEmail": "636da863c19342ee9ad5fa53350bebe0@ct.vtex.com.br",
  "lastMessage": ""
}
```


---

###Iniciar manuseio
Permite notificar que o pedido entrará em processo de manuseio.
Muda o estado do pedido para start-handling. Ação que faz o acknowledge da reserva.

```
POST /api/oms/pvt/orders/{orderId}/start-handling
```
####Response
<pre class="headers">
Status: 204 NoContent, 404 NotFound
</pre> 
<pre></pre>
---

###Notificar Faturamento
Permite o envio de uma notificação de faturamentode itens do pedido.
Através desse serviço, é possível também informar uma NF de entrada, para isto deverá ser informado o campo *type* com o
valor *Input*, neste caso o OMS solicitará o *estorno*  ao PCI Connector do valor informado no invoice.
O valor default do campo *type* é *Output*.


```
POST /api/oms/pvt/orders/{orderId}/invoice
```

####Exemplo
```json
{
  "trackingNumber": "SR000987654321",
  "courier": "Correios",
  "type": "Output",
  "invoiceNumber": "NFe-00001",
  "trackingUrl": "http://traking.correios.com.br/sedex/SR000987654321",
  "items": [
    {
      "id": "345117",
      "quantity": 1,
      "price": 9003
    }
  ],
  "issuanceDate": "2013-11-21T00:00:00",
  "invoiceValue": 9508
}
```
####Response
<pre class="headers">
Status: 200 Ok, 404 NotFound
</pre>
```json
{
  "date": "2014-01-28T13:24:15.2331646Z",
  "orderId": "359722648932-01",
  "receipt": "cfa207e1-c572-4027-8e50-f33687608adf"
}
```

---

###Cancelar pedido

Permite solicitar o cancelamento de um pedido, desde que seu status não seja faturado (status = invoiced).

```
POST /api/oms/pvt/orders/{orderId}/cancel
```

####Response
<pre class="headers">
Status: 200 Ok, 404 NotFound
</pre>
```json
{
  "orderId": "359722648932-01",
  "receipt": "bab79873-ca00-40a6-90f0-f4cfbc323033",
  "date": "2014-01-28T13:24:15.2251641Z"
}
```

---

##Registrar mudanças
Método responsável por registrar mudanças no pedido.
Mudanças podem ser discontos ou troca de items.


```
POST /api/oms/pvt/orders/{orderId}/changes
```

####Exemplo
```json
{
  "reason": "Reason404acefb-4ad2-4cb8-be9d-b030ad21375f",
  "discountValue": 161,
  "itemsRemoved": [
    {
      "id": "Id5595edff-7d8f-425f-9cf1-2d6dc9f53cb5",
      "quantity": 14,
      "price": 191
    },
    {
      "id": "Idd6f949bd-6565-4c71-beeb-cc5933482bf0",
      "quantity": 36,
      "price": 46
    },
    {
      "id": "Ide52ad6dc-acb8-41aa-83be-beb3ff1aa0e1",
      "quantity": 40,
      "price": 182
    }
  ],
  "itemsAdded": [
    {
      "id": "Id1491dd9b-772d-42c7-b5f2-fe8e29c416ec",
      "quantity": 109,
      "price": 201
    },
    {
      "id": "Idac275c71-4fed-4ec9-9706-ed54854eabae",
      "quantity": 9,
      "price": 84
    },
    {
      "id": "Id3e6fad1e-01f9-4c3a-b9f8-bc1e5333682c",
      "quantity": 136,
      "price": 120
    }
  ]
}
```
####Response
<pre class="headers">
Status: 200 Ok, 404 NotFound
</pre>
```json
{
  "date": "2013-09-20T19:25:38.1226287",
  "orderId": "OrderId5455f3c9-5ff1-465c-84cb-321cd1b3fb13",
  "receipt": "Receipt442fe6a8-ae66-4db3-abe7-f14913d8ac7c"
}
```
---

