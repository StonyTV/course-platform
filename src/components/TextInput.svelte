<script>
	export let label = '';
	export let id = 'text-input-id';
	export let placeholder = '';
	export let value = '';
	export let prefix = '';
	export let suffix = '';
</script>

<div class="text-input-container">
	{#if label}
		<label class="text-input__label" for={id}>{label}</label>
	{/if}
	<div class="text-input">
		{#if prefix}
			<span class="text-input__prefix">{prefix}</span>
		{/if}
		<input class="text-input__input" {id} type="text" bind:value {placeholder} />
		{#if suffix}
			<span class="text-input__suffix">{suffix}</span>
		{/if}
	</div>
</div>

<style>
	/* CSS for the text input component */
	.text-input-container {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}
	.text-input {
		display: flex;
		align-items: center;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		border-radius: 4px;
		padding: 8px;
    align-items: baseline;
	}

	.text-input__label {
		font-size: 14px;
		color: #ececf1;
	}

	.text-input__input {
		flex-grow: 1;
		border: none;
		font-size: 16px;
		outline: none;
	}

	.text-input__prefix,
	.text-input__suffix {
		font-size: 16px;
		color: #999999;
		pointer-events: none;
	}
</style>
