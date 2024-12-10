---
layout: default
title: "Other humans"
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="grid">
			{% for post in site.categories.portraits %}
				<a class="gallery-photo" href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">
					<img src="{{ site.url }}{{ site.baseurl }}{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
					<span class="caption">{{ post.title }}</span>
				</a>
			{% endfor %}
		</div>
	</div>
</section>
