---
layout: guide
title: Manipulando um pedido
category: oms-guide
---

#Manipulando um pedido

Ao consultar um pedido, você encontrará todas as informações e ações disponíveis para a situação em que ele se encontra.

### Informações de um pedido

<table class="table">
	<thead>
		<tr>
			<th style="width: 25%;">Informação</th>
			<th>Descrição</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td>Número identificador ou Order ID</td>
			<td>Identificador único dentro da loja, que deve ser usado para comunicação com o cliente.</td>
		</tr>

		<tr>
			<td>Número sequencial</td>
			<td>Número utilizado para identificação e integração do pedido com o ERP.</td>
		</tr>

		<tr>
			<td>Data e hora</td>
			<td>Data e hora em que o pedido foi efetuado.</td>
		</tr>

		<tr>
			<td>Nome do Seller</td>
			<td>Nome do Seller responsável pelo pedido.</td>
		</tr>

		<tr>
			<td>Nome do Operador de televendas</td>
			<td>Nome do Operador de televendas responsável pelo pedido. (Apenas nas compras efetuadas por um Operador de televendas).</td>
		</tr>

		<tr>
			<td>Dados do cliente</td>
			<td>Dados de Pessoa Física ou Pessoa Jurídica</td>
		</tr>

		<tr>
			<td>Endereço de entrega</td>
			<td>Nome do destinatário, CEP, Logradouro, número, complemento, referência, bairro, cidade e estado.</td>
		</tr>

		<tr>
			<td>Nome da Lista de presentes</td>
			<td>Nome da Lista de presentes a qual o pedido está vinculado. (Apenas nas compras efetuadas para uma Lista de presentes).</td>
		</tr>

		<tr>
			<td>Valores totais</td>
			<td>Valor do pedido, dos descontos, das taxas e da entrega.</td>
		</tr>

		<tr>
			<td>Status do pedido</td>
			<td>Situação do pedido no momento. Veja <a href="/pt-br/oms/guide/02-fluxo-do-pedido/">como ocorre o fluxo do pedido</a> para mais detalhes.</td>
		</tr>

		<tr>
			<td>Status da transação</td>
			<td>Situação da transação financeira no momento. Veja como ocorre o fluxo da transação para mais detalhes.</td>
		</tr>

		<tr>
			<td>Interações</td>
			<td>Detalhamneto técnico sobre o andamento do pedido, com informações sobre todas as ocorrências registradas.</td>
		</tr>

		<tr>
			<td>Faturas</td>
			<td>Informações sobre as faturas e respectivos itens que as compõem. As faturas podem ser geradas manualmente no OMS ou via integração. (Apenas quando há itens faturados).</td>
		</tr>

		<tr>
			<td>Itens</td>
			<td>Lista dos produtos que compõem o pedido e/ou a fatura.</td>
		</tr>

		<tr>
			<td>Dados de pagamento</td>
			<td>Lista com a(s) forma(s) de pagamento utilizada(s) e informações complementares. (Apenas quando há pagamentos registrados).</td>
		</tr>

		<tr>
			<td>Endereço de cobrança</td>
			<td>Endereço de cobrança do cliente. (Apenas quando há pagamentos registrados).</td>
		</tr>
	</tbody>
</table>


### Ações para um pedido

Para entender bem as ações descritas a seguir, sugerimos que você consulte [como ocorre o fluxo do pedido](/pt-br/oms/guide/02-fluxo-do-pedido/).

<table class="table">
	<thead>
		<tr>
			<th style="width: 25%;">Ação</th>
			<th>Descrição</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td>Cancelar pedido</td>
			<td>A ação de cancelar pode ser solicitada em qualquer momento antes que o pedido esteja Faturado. Em alguns casos, o cancelamento passará por uma aceitação do Seller.</td>
		</tr>

		<tr>
			<td>Forçar retentativa quando em situação de erro</td>
			<td>Em algumas situações, pode haver problemas no andamento do pedido. Nesses casos, o sistema faz até 5 tentativas de continuar com o andamento automaticamente. Caso o problema persista, é necessária uma intervenção manual, forçando a retentativa.</td>
		</tr>

		<tr>
			<td>Alterar status para Autorizar despacho</td>
			<td>Quando o pedido está em <em>Aguardando autorização para despachar</em>, é possível forçar a autorização, mudando o pedido para <em>Autorizar despacho</em>.</td>
		</tr>

		<tr>
			<td>Alterar status para Pronto para manuseio</td>
			<td>Quando o pedido está em <em>Carência para cancelamento</em>, é possível forçar o fim da carência, mudando o pedido para <em>Pronto para manuseio</em>.</td>
		</tr>

		<tr>
			<td>Alterar status para Iniciar manuseio</td>
			<td>Quando o pedido está em <em>Pronto para manuseio</em>, é possível forçar o início do manuseio, mudando o pedido para <em>Iniciar manuseio</em>.</td>
		</tr>

		<tr>
			<td>Registro manual de Nota Fiscal</td>
			<td>Quando o pedido está em <em>Preparando entrega</em> ou <em>Cancelamento solicitado</em>, dados na Nota Fiscal podem ser inseridos manualmente através do [OMS](/pt-br/guide/checkout-and-orders/00-o-oms/), gerando uma nova fatura.</td>
		</tr>
	</tbody>
</table>

