<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<p class="flex justify-center">
	Adresse mail :&nbsp;<a
		class="italic text-slate-800 hover:underline dark:text-slate-300"
		href="mailto:max.sant@outlook.fr">max.sant@outlook.fr</a
	>
</p>
