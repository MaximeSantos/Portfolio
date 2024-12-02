<script lang="ts">
	interface Props {
		link: string;
		title: string;
		desc: string;
		previewUrl: string;
	}

	const { link, title, desc, previewUrl }: Props = $props();
</script>

<a class="m-1 rounded-2xl hover:bg-zinc-800" href={link} target="_blank">
	<section class="m-2 flex max-w-sm flex-col items-center">
		<img class="rounded-2xl" src={previewUrl} alt="Preview of the project" />
		<h2 class="uppercase">{title}</h2>
		<p>{desc}</p>
	</section>
</a>
