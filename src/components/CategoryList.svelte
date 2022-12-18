<script>
	import { stateStore } from '../stores/mainStore';
	import CategoryButton from './CategoryButton.svelte';
</script>

<div class="categoryList">
	{#each $stateStore.categories as { id, icon, name, description }}
		<CategoryButton
			{icon}
			{name}
			{description}
			{id}
			href={`/category/${id}`}
			onClick={() => ($stateStore.currentCategory = id)}
		/>
	{/each}
</div>

<style>
	.categoryList {
		flex: 1 1 0%;
		margin-top: 14px;
		border-bottom: solid 1px #ffffff33;
	}
</style>
