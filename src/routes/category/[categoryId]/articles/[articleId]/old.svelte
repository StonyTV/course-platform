<script>
	import { page } from '$app/stores';
	import { Editor, Viewer } from 'bytemd';
	import gfm from '@bytemd/plugin-gfm';
	import highlight from '@bytemd/plugin-highlight';
	import gemoji from '@bytemd/plugin-gemoji';

	import 'bytemd/dist/index.css';
	let value = '# Titre de ma page';

	const plugins = [
		gfm(),
		highlight(),
		gemoji()
		// Add more plugins here
	];

	function handleChange(e) {
		value = e.detail.value;
	}
</script>

<div class="editor">
	<Editor {value} {plugins} on:change={handleChange} />
	<Viewer {value} {plugins} />
</div>

<!-- {JSON.stringify($page)} -->
<style>
	.editor {
		position: absolute;
		left: 0;
		width: 100%;
	}
	.bytemd {
		height: calc(100vh - 200px);
	}
	.CodeMirror-focused div.CodeMirror-cursors {
		visibility: visible;
	}
</style>
