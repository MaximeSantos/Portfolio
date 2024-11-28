<script lang="ts">
	interface Props {
		link: string;
		title: string;
		desc: string;
		previewUrl: string;
	}

	const { link, title, desc, previewUrl }: Props = $props();
</script>

<section class="m-2 flex flex-col items-center">
	<img src={previewUrl} alt="Preview of the project" />
	<h2>{title}</h2>
	<p>{desc}</p>
	<a href={link}>{link}</a>
</section>
