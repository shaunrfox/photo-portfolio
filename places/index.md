---
layout: default
title: "Places I've seen"
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="grid">
			{% for post in site.categories.places %}
				<a class="gallery-photo" href="{{ site.baseurl }}{{ post.url }}">
					<img src="{{ site.baseurl }}/{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
					<span class="caption">{{ post.title }}</span>
				</a>
			{% endfor %}
		</div>
	</div>
</section>
