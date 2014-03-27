---
layout: pci-gateway
title: paymentgateway
category: pci-gateway-api
---

#paymentgateway


| Descrição     | Recurso     |
| ------------- |:------------|
| Inserir novo Bin| [PUT /ccbin/newbin](#inserir-novo-bin) |
| Recuperar Bin pelo seu número| [GET /ccbin/bins/{number}](#recuperar-bin-pelo-seu-número) |
| Recuperar Bin pelo país| [GET /ccbin/country/{country}/bins](#recuperar-bin-pelo-país) |
| Recuperar Bin pelo emissor| [GET /ccbin/issuer/{issuer}/bins](#recuperar-bin-pelo-emissor) |
| Remover Bin| [DELETE /ccbin/bins/delete/{number}](#remover-bin) |
| Recuperar lista de emissores disponíveis| [GET /ccbin/issuers](#recuperar-lista-de-emissores-disponíveis) |
| Inserir novo emissor| [PUT /ccbin/newissuer/{issuer}](#inserir-novo-emissor) |
| Remover emissor| [DELETE /ccbin/issuers/delete/{issuer}](#remover-emissor) |
| Recuperar países disponíveis| [GET /ccbin/countries](#recuperar-países-disponíveis) |
| Inserir novo país| [PUT /ccbin/newcountry/{country}](#inserir-novo-país) |
| Remover país| [DELETE /ccbin/countries/delete/{country}](#remover-país) |
| Inserir nova bandeira| [PUT /ccbin/newbrand/{brand}](#inserir-nova-bandeira) |
| Remover um bandeira| [DELETE /ccbin/brands/delete/{brand}](#remover-um-bandeira) |
| Recuperar bandeiras disponíveis| [GET /ccbin/brands](#recuperar-bandeiras-disponíveis) |
| Recuperar tipos de cartão| [GET /ccbin/cardtypes](#recuperar-tipos-de-cartão) |
| Inserir novo tipo de cartão| [PUT /ccbin/newcardtype/{cardType}](#inserir-novo-tipo-de-cartão) |
| Remover um tipo de cartão| [DELETE /ccbin/cardtypes/delete/{cardtype}](#remover-um-tipo-de-cartão) |
| Recuperar subtipos de cartão| [GET /ccbin/cardsubtypes](#recuperar-subtipos-de-cartão) |
| Inserir novo subtipo de cartão| [PUT /ccbin/newcardsubtype/{cardSubType}](#inserir-novo-subtipo-de-cartão) |
| Remover um subtipo de cartão| [DELETE /ccbin/cardsubtypes/delete/{cardsubtype}](#remover-um-subtipo-de-cartão) |
| Recuperar produtos de um emissor| [GET /ccbin/products/{issuer}](#recuperar-produtos-de-um-emissor) |
| Inserir produtos para um emissor| [PUT /ccbin/newproduct](#inserir-produtos-para-um-emissor) |
| Remover um produto de um emissor| [DELETE /ccbin/products/delete/{issuer}/{product}](#remover-um-produto-de-um-emissor) |

###Inserir novo Bin


```
PUT /ccbin/newbin
```



####Exemplo
```json
{
  "binNumber": "123456",
  "issuer": "ITAU UNIBANCO S A",
  "brand": "VISA",
  "issuerCountry": "BRA",
  "product": "PERSONALITE",
  "country": "BRA",
  "cardType": "CREDIT",
  "cardSubType": "PLATINUM"
}
```




####Response
---

###Recuperar Bin pelo seu número


```
GET /ccbin/bins/{number}
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
{
  "binNumber": "123456",
  "issuer": "ITAU UNIBANCO S A",
  "brand": "VISA",
  "issuerCountry": "BRA",
  "product": "PERSONALITE",
  "country": "BRA",
  "cardType": "CREDIT",
  "cardSubType": "PLATINUM"
}
```
---

###Recuperar Bin pelo país


```
GET /ccbin/country/{country}/bins
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
{
  "binNumber": "123456",
  "issuer": "ITAU UNIBANCO S A",
  "brand": "VISA",
  "issuerCountry": "BRA",
  "product": "PERSONALITE",
  "country": "BRA",
  "cardType": "CREDIT",
  "cardSubType": "PLATINUM"
}
```
---

###Recuperar Bin pelo emissor


```
GET /ccbin/issuer/{issuer}/bins
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
{
  "binNumber": "123456",
  "issuer": "ITAU UNIBANCO S A",
  "brand": "VISA",
  "issuerCountry": "BRA",
  "product": "PERSONALITE",
  "country": "BRA",
  "cardType": "CREDIT",
  "cardSubType": "PLATINUM"
}
```
---

###Remover Bin


```
DELETE /ccbin/bins/delete/{number}
```







####Response
---

###Recuperar lista de emissores disponíveis


```
GET /ccbin/issuers
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  "ITAU UNIBANCO S A",
  "CAIXA ECONOMICA FEDERAL"
]
```
---

###Inserir novo emissor


```
PUT /ccbin/newissuer/{issuer}
```







####Response
---

###Remover emissor


```
DELETE /ccbin/issuers/delete/{issuer}
```







####Response
---

###Recuperar países disponíveis


```
GET /ccbin/countries
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  "BRA",
  "USA"
]
```
---

###Inserir novo país


```
PUT /ccbin/newcountry/{country}
```







####Response
---

###Remover país


```
DELETE /ccbin/countries/delete/{country}
```







####Response
---

###Inserir nova bandeira


```
PUT /ccbin/newbrand/{brand}
```







####Response
---

###Remover um bandeira


```
DELETE /ccbin/brands/delete/{brand}
```







####Response
---

###Recuperar bandeiras disponíveis


```
GET /ccbin/brands
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  "VISA",
  "MASTERCARD"
]
```
---

###Recuperar tipos de cartão


```
GET /ccbin/cardtypes
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  "CREDIT",
  "DEBIT"
]
```
---

###Inserir novo tipo de cartão


```
PUT /ccbin/newcardtype/{cardType}
```







####Response
---

###Remover um tipo de cartão


```
DELETE /ccbin/cardtypes/delete/{cardtype}
```







####Response
---

###Recuperar subtipos de cartão


```
GET /ccbin/cardsubtypes
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  "PLATINUM",
  "GOLD"
]
```
---

###Inserir novo subtipo de cartão


```
PUT /ccbin/newcardsubtype/{cardSubType}
```







####Response
---

###Remover um subtipo de cartão


```
DELETE /ccbin/cardsubtypes/delete/{cardsubtype}
```







####Response
---

###Recuperar produtos de um emissor


```
GET /ccbin/products/{issuer}
```







####Response

<pre class="headers">
Status: `200 OK` 
</pre>

```json
[
  {
    "name": "PERSONALITE",
    "issuer": "ITAU UNIBANCO S A"
  },
  {
    "name": "UNICLASS",
    "issuer": "ITAU UNIBANCO S A"
  }
]
```
---

###Inserir produtos para um emissor


```
PUT /ccbin/newproduct
```



####Exemplo
```json
{
  "name": "PERSONALITE",
  "issuer": "ITAU UNIBANCO S A"
}
```




####Response
---

###Remover um produto de um emissor


```
DELETE /ccbin/products/delete/{issuer}/{product}
```







####Response
---

