<script>
	import { onDestroy, onMount } from 'svelte';
	export let value = '# titre';
	let showToolbar = true;
	let textele;
	let editor;

	// Setting up the editor and the visible buttons of the toolbar
	onMount(async () => {
		const easymde = await import('easymde');
		const EasyMDE = easymde.default;
		editor = new EasyMDE({
			element: textele,
			theme: 'easymde',
			toolbar: ['preview'],
			status: ['words'], //'autosave',
			hideIcons: [], //'fullscreen', 'side-by-side'

			toolbar: false,
			toolbarTips: false,
			preview: true,
			startupFocus: 'preview',
			readOnly: true
		});

		const codemirror = editor.codemirror;
		codemirror.setOption('readOnly', true);
		codemirror.setOption('cursorBlinkRate', 0);
		codemirror.setOption('cursorHeight', 0);
		editor.value(value);
	});
	// Resetting the editor when clearing it
	onDestroy(() => {
		if (editor) {
			editor.toTextArea();
			editor = null;
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/easymde.css" />
</svelte:head>

<!-- Everything in here will hide, when the Zen Mode is toggled on. -->
<section class="md-preview" class:hidden-tool={!showToolbar}>
	<img class="clicktotoggle" src="" alt="Click to toggle tooltip" />
	<div class="editor">
		<textarea id="invisible text area" bind:this={textele} />
	</div>
</section>

<style>
	.md-preview {
		/* margin-top: 500px; */
	}

	:global(.hidden-tool .editor .editor-toolbar) {
		display: none;
	}

	.hidden-tool .editor {
		margin-top: 0px;
	}

	.editor {
		/* margin-top: calc(max(min(92vw, 780px), 400px) / 4);
		transition: margin-top 1s ease-in-out;
		margin-bottom: 70px; */
		/* position: absolute;
		left: 0;
		right: 0; */
	}

	.clicktotoggle {
		top: 6em;
		left: 2em;
		position: fixed;
		width: 180px;
		height: 180px;
		opacity: 1;
		transition: opacity 1s ease-in-out;
		z-index: -40;
	}

	.hidden-tool .clicktotoggle {
		opacity: 0;
	}
</style>
