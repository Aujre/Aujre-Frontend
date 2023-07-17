<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let form;

	const successToast: ToastSettings = {
		message:
			"Congratulations! 🎉 You're now part of the Aujre waitlist. Get ready to embark on an exciting e-commerce journey with us. We'll keep you updated on the latest developments and be the first to notify you when Aujre launches. Thank you for joining!",
		background: 'bg-error-500',
		classes: 'text-white',
		timeout: 5000
	};

	$: {
		if (form?.success) {
			toastStore.trigger(successToast);
		}
	}
</script>

<svelte:head>
	<title>Aujre Waitlist: Effortlessly Build and Launch Your Online Store with Notion</title>
	<meta
		name="description"
		content="Join the Aujre waitlist for exclusive access to effortlessly build and launch your dream online store using Notion. Be the first to know when Aujre, the powerful e-commerce solution, launches and transform your business."
	/>
</svelte:head>

<Toast />

<div
	class="flex z-10 relative flex-col-reverse md:flex-row md:justify-between justify-center items-center h-full w-screen max-w-7xl mx-auto px-5 md:px-10 gap-5"
>
	<div class="max-w-[38.25rem] flex flex-col items-center md:block mt-[2rem] md:mt-0">
		<h1
			class="text-3xl lg:text-5xl font-bold text-center md:text-left"
			style="line-height: normal;"
		>
			Build Your Online Store Effortlessly with aujre
		</h1>
		<p
			class="text-primary-500 bg-primary-300 w-fit px-[3.19rem] py-[0.19rem] rounded-[2.5rem] mt-[0.87rem] mb-[1.44rem]"
		>
			Coming soon
		</p>
		<p class="mb-[2.44rem] text-center md:text-left">
			Transform your business and unlock the power of e-commerce. Aujre simplifies the process of
			creating your own online store using Notion. Join our waitlist to be the first in line for
			this powerful e-commerce solution and experience the simplicity, flexibility, and success it
			brings to your business.
		</p>
		<form method="POST" action="?/join-waitlist" class="flex gap-[0.7rem]">
			<div>
				<input
					type="email"
					name="email"
					placeholder="Enter your email"
					class="border border-secondary-500 text-sm md:text-base rounded-[0.3125rem] h-full"
				/>
				{#if form?.missing}
					<p class="text-xs text-error-500">Email is required</p>
				{/if}
			</div>
			<button
				type="submit"
				class="bg-secondary-500 text-sm md:text-base text-white rounded-[0.3125rem] py-[0.81rem] px-[1.08rem]"
			>
				Join Waitlist
			</button>
		</form>
	</div>
	<div>
		<img src="/illustration.png" alt="" class="md:min-w-[27rem]" />
	</div>
</div>

<!-- Bottom page wave -->
<div class="relative pt-10">
	<img src="/wave.png" alt="" class="w-full absolute bottom-0" />
</div>