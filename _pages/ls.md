---
title: ls
date: 2018-01-13
revised: 2018-02-01 12:55 
permalink: /ls
layout: post
---

{{ site.posts | size }}
{% assign my_posts_count = (site.posts | size) %}{{ my_posts_count }}
{% assign my_column_size = (my_post_count | divide_by: 3) %}{{ my_column_size }}

{% assign sorted_posts = (site.posts | sort: 'title') %}
{% for post in sorted_posts %}<a href="{{ post.url }}">{{ post.title }}</a><br/>
{% endfor %}
