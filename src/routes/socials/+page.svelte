<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="mb-5 text-center">Mes réseaux sociaux</h1>
<div class="flex flex-col items-center">
	<p class="">
		&nbsp; Github : <a
			class="italic hover:underline"
			href="https://github.com/MaximeSantos"
			target="_blank">github.com/MaximeSantos</a
		>
	</p>
	<p class="">
		&nbsp; Linkedin : <a
			class="italic hover:underline"
			href="https://www.linkedin.com/in/maxime-santos-dev"
			target="_blank">linkedin.com/in/maxime-santos-dev</a
		>
	</p>
</div>
