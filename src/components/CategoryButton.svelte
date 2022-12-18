<script>
	import { stateStore } from '../stores/mainStore';

	export let name = '';
	export let id = '';
	export let icon = '';
	export let description = '';
	export let href = '/';
	export let onClick = () => {};
</script>

<a class="button" {id} {href} class:active={$stateStore.currentCategory === id} on:click={onClick}>
	<div class="header">
		<span>{icon}</span>
		<span class="name">{name}</span>
	</div>
	<div class="description">
		<span>{description}</span>
	</div>
</a>

<style>
	.name {
		font-weight: 500;
	}
	.header {
		display: flex;
		gap: 0.5rem;
	}
	.description {
		color: #c4c4c9;
	}
	.button:hover {
		background-color: #8d8da01a;
		border-radius: 0.375rem;
	}

	.active {
		background-color: #2f2f2f;
	}
	.active:hover {
		background-color: #323131;
	}
	.button {
		margin-top: 7px;
		/* transition-property: background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
		color: white;
		border-radius: 0.375rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: solid 1px #ffffff33;
		padding: 0.7rem;
		font-size: 14px;
		cursor: pointer;
	}
</style>
