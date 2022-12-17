<script>
	import { stateStore } from '../stores/mainStore';
	const disable = () => ($stateStore.modal = false);
</script>

<div class="outsideModal" on:mouseup={() => disable()}>
	<div class="modal">Ceci est une modale</div>
</div>

<style>
	.outsideModal {
    cursor: pointer;
		background-color: #343541cc;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal {
		border: solid 1px gray;
		background: #343541;
		padding: 14px;
    cursor: auto;
	}
</style>
