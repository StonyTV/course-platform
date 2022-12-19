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
			autofocus: true,
			spellChecker: false,
			nativeSpellcheck: true,
			theme: 'easymde',
			autosave: {
				enabled: true,
				uniqueId: 'easymde-autosave',
				delay: 1000
			},
			toolbar: [
				'preview',
				'|',
				'bold',
				'italic',
				'strikethrough',
				'|',
				'heading-bigger',
				'heading-smaller',
				'heading-1',
				'heading-2',
				'heading-3',
				'|',
				'unordered-list',
				'ordered-list',
				'|',
				'code',
				'image',
				'link',
				'quote',
				'table',
				'horizontal-rule',
				'|',
				'redo',
				'undo',
				'guide',
				'|',
				'side-by-side',
				'fullscreen',
				// Adding custom buttons
				{
					name: 'clipboard',
					action: saveToClipboard,
					className: 'fa fa-clipboard',
					title: 'Copy entire text to clipboard'
				},
				{
					name: 'clear',
					action: clearEditor,
					className: 'fa fa-trash',
					title: 'Clear the editor'
				}
			],
			status: ['words'], //'autosave',
			hideIcons: [], //'fullscreen', 'side-by-side'
			placeholder:
				'Hello! \n\n This is your distraction free markdown editor.\n You can use it to write your blog posts or to write your own documentation.\n It supports standard markdown syntax.\n Toggle the button in the top left corner to enter Zen Mode. All UI elements will be hidden, so you can focus on what is important - Your text.'
		});
		// editor.value = textele
		editor.value(value);

		editor.codemirror.on('change', () => {
			console.log(editor.value());
			value = editor.value();
		});
	});
	// Resetting the editor when clearing it
	onDestroy(() => {
		if (editor) {
			editor.toTextArea();
			editor = null;
		}
	});

	// Fallback solution if the modern method of copying to clipboard fails
	function fallbackCopyTextToClipboard(text) {
		var textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		// Errorhandling for copy to clipboard function support on different browsers
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Fallback: Copying text command was ' + msg);
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}

		document.body.removeChild(textArea);
	}
	// Copy content to clipboard
	function copyTextToClipboard(text) {
		if (!navigator.clipboard) {
			fallbackCopyTextToClipboard(text);
			return;
		}
		navigator.clipboard.writeText(text).then(
			function () {
				console.log('Async: Copying to clipboard was successful!');
			},
			function (err) {
				console.error('Async: Could not copy text: ', err);
			}
		);
	}

	function saveToClipboard() {
		const content = editor.value();
		copyTextToClipboard(content);
	}

	// Clearing the editor textarea
	function clearEditor() {
		editor.value('');
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/easymde.css" />
</svelte:head>

<!-- Everything in here will hide, when the Zen Mode is toggled on. -->
<section class:hidden-tool={!showToolbar}>
	<div class="editor">
		<textarea id="invisible text area" bind:this={textele} on:input={() => console.log(textele)} />
	</div>
</section>

<style>
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
