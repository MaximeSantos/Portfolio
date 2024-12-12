<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="text-center">Mes projets</h1>
<p class="text-center">Une liste de quelques uns de mes projets de sites webs.</p>
<p class="text-center">
	Sur mon <a class="italic hover:underline" href="/socials">profil Github</a>, vous trouverez les
	<i>repositories</i> associés ainsi que d'autres de mes projets publics.
</p>
<div class="m-4 flex justify-center">
	<div class="m-4 flex max-w-[60vw] flex-wrap justify-center">
		{#each data.projects as { link, title, desc, previewUrl }}
			<ProjectCard {link} {title} {desc} {previewUrl} />
		{/each}
	</div>
</div>
