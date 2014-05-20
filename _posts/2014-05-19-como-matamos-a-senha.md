---
layout: post
title: 'Como matamos a senha na compra online'
author: 'rdmuniz'
date: 2014-05-19 22:30:00
description: Conseguimos criar um sistema de checkout seguro e sem senha
main-image: http://lab.vtex.com/media/vtex-senha1.jpg
tags:
- smart checkout
- design
- inovação
---
![RIP Senha](http://lab.vtex.com/media/vtex-senha1.jpg)

Quem comprou online já deve ter passado pela seguinte situação: ao tentar fechar uma compra, depara-se com um formulário de login. Você começa a tentar combinações de todos os e-mails que já teve na vida, com todas as senhas que já criou. Suando, tenta datas de aniversário de parentes distantes e até as suas senhas de banco—mas não acerta a senha de jeito nenhum.  O que você acaba fazendo é usar o famigerado recurso “Esqueceu a senha?” para gerar uma nova chave. Temos claramente aí uma vilã: **a senha**.

Aprendemos muito criando o [Smart Checkout](http://vtex.com.br/help/smartcheckout/). Dentre ameaças, commits, testes de usabilidade, batalhas e lágrimas, uma das maiores surpresas foi descobrir que ao eliminar a senha do processo de compra, a grande maioria dos usuários acaba nem percebendo que ela deveria ao menos existir. **Nem mesmo quando o que eles estão fazendo é gastando dinheiro**. Logo se ninguém sente falta da senha, ela não tem razão de existir.

## A senha é uma questão de segurança, portanto não deve ser problema do usuário
No caso do e-commerce, a senha faz parte de um tópico vital: a segurança.  Só que para ser realmente segura ela precisaria ser criada com combinações bastante sofisticadas de caracteres, por exemplo: `rG2#t=E*5`. Dessa forma, quanto mais segura ela é considerada, mais humanamente difícil de ser memorizada.

A senha na verdade é apenas uma interface entre o humano e a informação confidencial que precisa ser acessada, ou seja, isso não deveria ser responsabilidade do cliente. Precisávamos então assumir este encargo, analisar o contexto e criar uma maneira de dar acesso a informações e recursos—sem depender da memória do usuário.

## Lição: Numa compra online a senha quase nunca é necessária
Por mais chocante que isso pareça, é verdade. Pense comigo: Na primeira compra o comprador vai precisar fazer seu cadastro, portanto dispensa lembrar a senha (como tratamos a experiência de cadastro é assunto de outro post). Já no caso da segunda compra,  o usuário só precisa saber que os produtos serão entregues no destino esperado e cobrados em seu cartão.

Foi assim que nasceu a **Compra Rápida**: fechamento da segunda compra apenas informando o e-mail e o código de segurança do cartão.

![Segunda compra em ação - Gif Animado](http://lab.vtex.com/media/segunda-compra-web.gif)<br>
*Compra em 20 segundos*

Tivemos muito receio em relação a como o usuário iria se sentir ao ver seus dados sendo recuperados após informar apenas o e-mail, mesmo com os dados pessoais mascarados. Porém 30 dias de testes de usabilidade nos ensinaram que esta preocupação não fazia sentido.

Os usuários realmente não se importam com a senha, não lembram que num processo como este ela costuma existir. E nesta segunda compra temos mais um fator importante para tratar esta sensação de segurança do usuário: ele já conhece e confia na loja pela compra anterior.

![MORRA, SENHA!](http://lab.vtex.com/media/vtex-senha2.jpg)

## O último suspiro da senha
Já criamos o fechamento de compra sem a senha, mas e nos casos em que o cliente precisa alterar seus dados como, por exemplo, um novo endereço de entrega? A autenticação é inevitável, no entanto a senha não é. Projetamos então um sistema de autenticação que fosse o mais não-obstrutivo possível, que aparece só na hora necessária e que conduz o usuário sem sair do seu contexto.

No caso da compra para entregar em um endereço diferente, os passos são simples:
![Segunda compra autenticada - Gif Animado](http://lab.vtex.com/media/segunda-compra-vtexid-1.gif)

O comprador então recebe o código num e-mail semelhante a este:

![Email com código de acesso rápido](http://lab.vtex.com/media/segunda-compra-vtexid-email.png)

Em seguida autentica-se no checkout, sem nem perceber, e segue com a compra para um novo endereço:
![Segunda compra autenticada - Código de acesso](http://lab.vtex.com/media/segunda-compra-vtexid-2.gif)<br>
*Fazendo login sem perceber que está fazendo login :)*

Na hora da compra sabemos que:

- o usuário não deve ser responsável por lembrar da senha, por isso usa tanto o recurso "Esqueceu sua senha?";
- ele tem, no mínimo, acesso ao seu e-mail—afinal precisa dele para fechar compras;
- conseguimos enviar e-mails de forma rápida, confiável e eficiente.

Por que não aproveitar a lógica do "Esqueceu sua senha?" e transformar este recurso no substituto da própria senha, de uma forma simples e amigável? Foi essa a última pá de areia no túmulo da nossa vilã.

Matar e enterrar a senha assim não só deixou a compra mais fácil para o usuário, como também deixou tudo mais seguro. Já que este código que enviamos é único, aleatório e se auto-destrói depois que é usado. O próximo passo é adicionar a opção de receber este código de acesso por outros meios, como o SMS.

E foi assim que trucidamos a senha. **Senha boa, é senha morta.**
