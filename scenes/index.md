---
layout: default
page-title: "I shoot photos, too."
---

<section class="gallery-wrapper">
	<div class="container photos">
		<div class="bricks">
			{% for post in site.categories.scenes %}
				<a class="gallery-photo item" href="{{ post.url }}">
					<img src="{{ post.base-path }}/{{ post.image-name }}-sm.jpg" alt="">
				</a>
			{% endfor %}
		</div>
	</div>
</section>
