<script>
	import CreateButton from '../components/CreateButton.svelte';
	import CategoryList from '../components/CategoryList.svelte';
	import LinkList from '../components/LinkList.svelte';
	import Modal from '../components/Modal.svelte';
	import { stateStore } from '../stores/mainStore';
</script>

<div class="layout">
	<div class="sidebar">
		<CreateButton name="Nouvelle catégorie" icon="➕" />
		<CategoryList />
		<LinkList name="Accès à Github" icon="📚" />
	</div>
	<div class="main">
		<div class="mainContent">
			<slot />

			{#if $stateStore.modal}
				<Modal />
			{/if}
		</div>
	</div>
</div>

<style>
	.layout {
		background-color: #444654;
		height: 100%;
		display: flex;
	}
	.main {
		color: #ececf1;
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.mainContent {
		width: 720;
	}
	.sidebar {
		display: flex;
		flex-direction: column;
		width: 245px;
		color: white;
		background-color: #202123;
		padding: 7.5px;
	}
</style>
