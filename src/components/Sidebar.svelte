<script>
	import CategoryList from './CategoryList.svelte';
	import CreateButton from './CreateButton.svelte';
	import LinkList from './LinkList.svelte';
	import { page } from '$app/stores';
</script>

<div class="sidebar">
	{#if $page?.route?.id?.includes('new_category')}
		<CreateButton name="Retour à l'accueil" icon="🏠" href="/" />
	{:else}
		<CreateButton name="Nouvelle catégorie" icon="➕" href="/new_category" />
	{/if}

	<CategoryList />
  
	<LinkList
		name="Code source sur Github"
		icon="📚"
		href="https://github.com/StonyTV/course-platform"
		newPage={true}
	/>
	<LinkList name="Jérôme" icon="👨‍💻" href="https://github.com/StonyTV" newPage={true} />
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		min-width: 245px;
		color: white;
		background-color: #202123;
		padding: 7.5px;
	}
</style>
