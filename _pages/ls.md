---
title: ls
date: 2018-01-13
revised: 2018-02-01 12:55 
permalink: /ls
layout: post
---

{{% assign my_number_of_posts = site.posts | size %}}
<!-- my_number_of_posts -->{{ my_number_of_posts }}

{{% assign my_number_per_column = my_number_of_posts %}}
{{% assign my_number_per_column = my_number_per_column | divided_by: 3 %}}
{{% assign my_number_per_column = my_number_per_column | plus: 1 %}}
{{ my_number_per_column }}


{% assign sorted_posts = (site.posts | sort: 'title') %}
{% for post in sorted_posts %}<a href="{{ post.url }}">{{ post.title }}</a><br/>
{% endfor %}
