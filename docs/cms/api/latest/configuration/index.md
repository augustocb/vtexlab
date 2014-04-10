---
layout: docs
title: configuration
category: cms-api
---






#configuration

<table class="table">
	<thead>
		<tr>
			<th>Recurso</th>
			<th>Descrição</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="#obter-configura%C3%A7%C3%B5es-do-site">GET /api/portal/pvt/sites/{siteId}/configuration</a></td>
			<td>Obter configurações do site</td>
		</tr>
		<tr>
			<td><a href="#obter-valor-de-uma-configura%C3%A7%C3%A3o">GET /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}</a></td>
			<td>Obter valor de uma configuração</td>
		</tr>
		<tr>
			<td><a href="#atualizar-as-configura%C3%A7%C3%B5es-do-site">PUT /api/portal/pvt/sites/{siteId}/configuration</a></td>
			<td>Atualizar as configurações do site</td>
		</tr>
		<tr>
			<td><a href="#atualizar-o-valor-de-uma-configura%C3%A7%C3%A3o">PUT /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}</a></td>
			<td>Atualizar o valor de uma configuração</td>
		</tr>
	</tbody>
</table>


###Obter configurações do site

```
GET /api/portal/pvt/sites/{siteId}/configuration
```

####Response
<pre class="headers">
Status: 200 OK
</pre>

{% highlight json %}
{
  "tagManagerId": "GTM-1234"
}
{% endhighlight %}

---

###Obter valor de uma configuração

```
GET /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}
```

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound 
</pre>

{% highlight json %}
"GTM-1234"
{% endhighlight %}

---

###Atualizar as configurações do site

```
PUT /api/portal/pvt/sites/{siteId}/configuration
```

####Exemplo
{% highlight json %}
{
  "tagManagerId": "GTM-5678"
}
{% endhighlight %}

####Response
<pre class="headers">
Status: 200 OK, 404 NotFound
</pre>
{% highlight json %}
{
  "tagManagerId": "TagManagerId569963d8-570a-45b4-884d-9a85a653dcc5"
}
{% endhighlight %}
---

###Atualizar o valor de uma configuração

```
PUT /api/portal/pvt/sites/{siteId}/configuration/{configurationKey}
```

####Exemplo
{% highlight json %}
"GTM-5678"
{% endhighlight %}
####Response
<pre class="headers">
Status: 204 NoContent, 404 NotFound
</pre>

{% highlight json %}
"GTM-5678"
{% endhighlight %}
---

