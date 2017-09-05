---
layout: default
page-title: "Photos of folks"
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="grid">
			{% for post in site.categories.people %}
				<a class="gallery-photo" href="{{ post.url }}">
					<img src="{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
				</a>
			{% endfor %}
		</div>
	</div>
</section>
