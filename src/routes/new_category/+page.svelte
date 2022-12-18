<script>
	import Button from '../../components/Button.svelte';
	import TextArea from '../../components/TextArea.svelte';
	import TextInput from '../../components/TextInput.svelte';
	import { apiFetch } from '../../api/fetcher';

	$: name = '';
	$: description = '';

	const submit = () => {
		console.log(name, description);
		apiFetch('category', {
			method: 'POST',
			body: JSON.stringify({ name, description }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};
</script>

<h1>Créer une catégorie</h1>
<form method="POST" on:submit|preventDefault={submit}>
	<TextInput label="Nom de la catégorie" bind:value={name} />

	<TextArea label="Description" bind:value={description} />

	<Button name="Créer" type="submit" />
</form>
