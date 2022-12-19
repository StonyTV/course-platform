<script context="module">
	export const ssr = false;
</script>

<script>
	import Modal from '../components/Modal.svelte';
	import { stateStore } from '../stores/mainStore';
	import Sidebar from '../components/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { apiFetch } from '../api/fetcher';
	import { sideBarData } from '../mock/datas';
	import '../app.css';

	// import { getStores, navigating, page, updated } from '$app/stores';

	onMount(async () => {
		const categories = await apiFetch('category', { METHOD: 'get' }).then(
			(rep) => rep?.data || sideBarData
		);
		$stateStore.categories = categories;
	});
</script>

<div class="layout">
	<Sidebar />
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
		position: relative;
	}
	.mainContent {
		width: 720px;
	}
</style>
