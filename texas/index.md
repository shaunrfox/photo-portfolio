---
layout: default
title: "Photos around Texas"
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="grid">
			{% for post in site.categories.texas %}
				<a class="gallery-photo" href="{{ post.url }}">
					<img src="{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
					<span class="caption">{{ post.title }}</span>
				</a>
			{% endfor %}
		</div>
	</div>
</section>
