---
title: ls
date: 2018-01-13
revised: 2018-02-01 12:55 
permalink: /ls
layout: single
---

`% aslak.se:ls`

<p>

{% assign sorted_posts = (site.posts | sort: 'title') %}
{% for post in sorted_posts %}{{ post.url }} // {{ post.title }}<br/>{% endfor %}

- - -

{% assign sorted_pages = (site.pages | sort: 'title') %}
{% for page in sorted_pages %}
<a href="{{ page.url }}"> {{ page.title }}</a>
{% endfor %}

- - -
