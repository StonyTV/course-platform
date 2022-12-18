<script>
	export let label = '';
	export let id = 'textarea-input';
	export let value = '';
	export let rows = 4
</script>

<!-- HTML for the text input component -->
<div class="textarea-container">
	<label for="textarea">{label}</label>
	<div class="textarea-wrapper">
		<textarea type="textarea" {id} bind:value {rows} />
	</div>
</div>

<style>
	/* CSS for the textarea component */
	.textarea-container {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}

	.textarea-wrapper {
		flex: 1; /* flexible height */
		display: flex;
	}

	label {
		font-size: 14px;
		color: #ececf1;
	}

	textarea {
		border: 1px solid #cccccc;
		font-size: 16px;
		height: auto; /* dynamic height based on content */
		outline: none;
		padding: 8px;
		resize: none; /* disable resizing of the textarea */
		flex: 1; /* flexible height */
		border-radius: 0.375rem; /* bordures arrondies */
	}

	textarea:focus {
		/* border-color: #2196f3; */
	}
</style>
