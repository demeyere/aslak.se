---
title: ls
date: 2018-01-13
revised: 2018-02-01 12:55 
permalink: /ls
layout: post
---

{{ page | inspect }}

{% assign sorted_posts = (site.posts | sort: 'title') %}
{% for post in sorted_posts %}<a href="{{ post.url }}">{{ post.title }}</a><br/>
{{ post | inspect }}

- - -

{% endfor %}
