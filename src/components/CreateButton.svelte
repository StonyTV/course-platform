<script>
	import { stateStore } from '../stores/mainStore';

	export let name = '';
	export let id = '';
	export let icon = '';
	export let href = '/';
</script>

<!-- <div class="button" {id} on:mouseup={() => $stateStore.modal = true}> -->
<a class="button" {id} {href}>
	<span>{icon}</span>
	<span>{name}</span>
</a>

<style>
	.button:hover {
		background-color: #8d8da01a;
		border-radius: 0.375rem;
	}

	.button {
		/* transition-property: background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
		color: white;
		border-radius: 0.375rem;
		display: flex;
		gap: 0.75rem;
		border: solid 1px #ffffff33;
		padding: 0.7rem;
		font-size: 14px;
		cursor: pointer;
	}
</style>
