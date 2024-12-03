<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="m-4 flex justify-center">
	<div class="m-4 flex max-w-[60vw] flex-wrap justify-center">
		{#each data.projects as { link, title, desc, previewUrl }}
			<ProjectCard {link} {title} {desc} {previewUrl} />
		{/each}
	</div>
</div>
