<script>
	export let icon = '';
	export let name = '';
	export let href = '#';
</script>

<a {href}>
	<div class="link">
		<span>{icon}</span>
		<span>{name}</span>
	</div>
</a>

<style>
  a {
    margin-top: 7px;
  }

	a:hover {
		background-color: #8d8da01a;
		border-radius: 0.375rem;
	}

	.link {
    display: flex;
		gap: 0.75rem;
		color: white;
		padding: 0.7rem;
	}
</style>
