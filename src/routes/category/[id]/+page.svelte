<script>
	import ArticlesSmall from '../../../components/ArticlesSmall.svelte';
	import TextInput from '../../../components/TextInput.svelte';
	import { stateStore } from '../../../stores/mainStore';
	import { page } from '$app/stores';

	$: articles = [
		{
			isPin: true,
			tags: ['📘 Cours', '🤖 GPT'],
			title: 'Apprendre le Javascript - Titres des cours',
			description:
				'Voici vingt titres de cours pour débuter en JavaScript : "Introduction à JavaScript" : ce cours est destiné aux débutants et vous permettra de comprendre les bases du langage JavaScript, comme les types de données, les opérateurs, les structures de contrôle de flux, etc.',
			creationDate: Date.now()
		}
	];
	$: categoryId = $page.url.pathname.replace('/category/', '');
	$: getCurrentCategory = () => $stateStore.categories.find((c) => c.id == categoryId) || {};
</script>

<h1 class="title">{getCurrentCategory().icon} {getCurrentCategory().name}</h1>
<p class="description">{getCurrentCategory().description}</p>

<TextInput prefix="🔎" name="Recherche d'un article" />
<br />
<!-- <div>filtre | tags tags tags</div>
<br /> -->
{#each articles as article}
	<ArticlesSmall {...article} />
{/each}

<style>
	.title {
		margin-bottom: -10px;
	}
	.description {
		margin-bottom: 20px;
	}
</style>
