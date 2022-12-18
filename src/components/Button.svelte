<script>
	export let emoji = '';
	export let name = '';
	export let onClick = () => {};
	export let color = 'green';
  export let type = 'submit'
</script>

<!-- style="color: {color}" -->
<button class="validation" on:click={onClick} {type}>
	{emoji}
	{name}
</button>

<style>
	.validation {
		margin-top: 10px;
		background-color: #4caf50; /* couleur de fond verte */
		border: none;
		border-radius: 0.375rem; /* bordures arrondies */
		color: #fff; /* couleur de texte blanche */
		font-size: 16px;
		padding: 8px 16px;
		cursor: pointer;
		display: flex; /* affichage en ligne */
		align-items: center; /* alignement vertical */
	}

	/* état hover */
	.validation:hover {
		background-color: #43a047; /* couleur de fond sur hover */
	}

	/* état actif (cliqué) */
	.validation:active {
		background-color: #388e3c; /* couleur de fond sur click */
	}
	.flat {
		background-color: transparent;
		border: none;
		color: #333; /* couleur de texte par défaut */
		font-size: 16px;
		padding: 8px 16px;
		cursor: pointer;
	}

	/* état hover */
	.flat:hover {
		color: #fff; /* couleur de texte sur hover */
	}

	/* état actif (cliqué) */
	.flat:active {
		background-color: #333; /* couleur de fond sur click */
		color: #fff; /* couleur de texte sur click */
	}
</style>
