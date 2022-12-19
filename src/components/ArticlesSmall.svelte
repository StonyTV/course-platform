<script>
	import { page } from '$app/stores';
	
	export let id = ''
	export let isPin = false;
	export let tags = [];
	export let title = '';
	export let description = '';
	export let creationDate = Date.now();

	const convertMillisecondsToDate = (milliseconds) => {
		const date = new Date(milliseconds);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};
</script>

<a class="article_small" href={`/category/${$page.params.categoryId}/articles/${id}`}>
	<div class="header">
		{#if isPin}
			<div class="pin" class:pin_separator={tags.length > 0}>📍</div>
		{/if}
		{#each tags as tag}
			<div class="tag">{tag}</div>
		{/each}
	</div>
	<div class="title">{title}</div>
	<div class="description">{description}</div>
	<div class="dateTime">{convertMillisecondsToDate(creationDate)}</div>
</a>

<style>
	.article_small:hover {
		background-color: #35363d;
	}
	.article_small {
		padding: 10px;
		border-radius: 15px;
		background-color: #313239;
		border: solid 1px #ffffff33;
		display: block;
	}

	.pin_separator:after {
		content: ' ';
		position: absolute;
		height: 24px;
		margin-top: -1px;
		border-right: 1px solid #444654;
		border-radius: 10px;
		margin-left: 17px;
	}
	.pin.pin_separator {
		margin-right: 15px;
	}
	.pin {
		border-radius: 20px;
		background-color: #6eb8ff;
		padding: 5px 10px;
		margin-right: 5px;
	}
	.tag {
		background-color: #25252a;
		border-radius: 15px;
		padding: 5px 10px;
		line-height: 21.01px;
		margin-right: 7px;
		color: #dbdbdb;
	}
	.header {
		display: flex;
	}
	.title {
		font-weight: bold;
		font-size: 17px;
		color: white;
		margin-top: 4px;
	}
	.description {
		color: #dbdbdb;
		margin-top: 7px;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-height: 3em;
	}
	.dateTime {
		color: #b6b6b6;
		font-size: 13px;
		margin-top: 4px;
	}
</style>
