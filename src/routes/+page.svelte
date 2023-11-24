<script>
	import Header from '../components/header.svelte';
	import PostCard from '../components/post-card.svelte';
</script>

<Header />
<main class="block sm:flex md:flex lg:flex pt-[3rem] lg:pt-[5rem] md:pt-[5rem] sm:pt-[5rem]">
	<section>
		<div class="w-48 sm:w-full md:w-full lg:w-full">
			<img src="coffe-doodle.svg" alt="Doodle male hugging a coffe cup" />
		</div>
		<div class="max-w-[40rem]">
			<h2
				class="text-heading-3 sm:text-heading-2 md:text-heading-2 lg:text-heading-2 font-bold pt-[2rem] leading-tight"
			>
				Apenas um desenvolvedor latino americano...
			</h2>
			<p class="pt-[1.5rem] leading-tight">
				Eu me chamo Pedro, sou um desenvolvedor comum, mas além disso, carrego em mim todos os
				sonhos do mundo, e decidi compartilhar meus pensamentos e experiências neste vasto e
				encantador universo da programação.
			</p>
		</div>
	</section>
	<section>
		<PostCard />
	</section>
</main>
