---
layout: default
title: "Close-ups and observations"
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="grid">
			{% for post in site.categories.details %}
				<a class="gallery-photo" href="{{ site.baseurl }}{{ post.url }}">
					<img src="{{ site.baseurl }}{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
					<span class="caption">{{ post.title }}</span>
				</a>
			{% endfor %}
		</div>
	</div>
</section>
