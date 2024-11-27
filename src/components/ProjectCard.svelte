<script lang="ts">
	let { link = 'test link' } = $props();
</script>

<section class="m-2 flex flex-col items-center">
	<img src="" alt="Homepage of the project" />
	<h2>Test</h2>
	<p>Test</p>
	<a href={link}>{link}</a>
</section>
