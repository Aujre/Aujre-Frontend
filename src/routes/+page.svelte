<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let form;

	const successToast: ToastSettings = {
		message:
			"Congratulations! 🎉 You're now part of the Aujre waitlist. Get ready to embark on an exciting e-commerce journey with us. We'll keep you updated on the latest developments and be the first to notify you when Aujre launches. Thank you for joining!",
		background: 'bg-success-500',
		classes: 'text-white',
		timeout: 5000
	};

	$: {
		if (form?.success) {
			toastStore.trigger(successToast);
		} else if (form?.server) {
			toastStore.trigger({
				message: 'Something went wrong. Please try again.',
				background: 'bg-error-500',
				classes: 'text-white',
				timeout: 5000
			});
		}
	}
</script>

<svelte:head>
	<title>Aujre Waitlist | Get Ready to Earn</title>
	<meta
		name="description"
		content="Aujre lets you earn by sharing cool stuff on your WhatsApp status. Simple, right? Be among the first to know when we kick off. Sign up now, and let's start earning together!"
	/>

	<!--
		OG and Twitter meta tags
	-->
	<meta
		property="og:title"
		content="Aujre Waitlist | Get Ready to Earn"
	/>
	<meta
		property="og:description"
		content="Aujre lets you earn by sharing cool stuff on your WhatsApp status. Simple, right? Be among the first to know when we kick off. Sign up now, and let's start earning together!"
	/>
	<meta property="og:image" content="https://aujre.com/social-banner.png" />
	<meta property="og:url" content="https://aujre.com" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Aujre" />

	<meta
		name="twitter:title"
		content="Aujre Waitlist | Get Ready to Earn"
	/>
	<meta
		name="twitter:description"
		content="Aujre lets you earn by sharing cool stuff on your WhatsApp status. Simple, right? Be among the first to know when we kick off. Sign up now, and let's start earning together!"
	/>
	<meta name="twitter:image" content="https://aujre.com/social-banner.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@sheyzi" />
	<meta name="twitter:creator" content="@sheyzi" />
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
			Get Ready to Earn: Aujre's Waitlist is Open!
		</h1>
		<p
			class="text-primary-500 bg-primary-300 w-fit px-[3.19rem] py-[0.19rem] rounded-[2.5rem] mt-[0.87rem] mb-[1.44rem]"
		>
			Coming soon
		</p>
		<p class="mb-[2.44rem] text-center md:text-left">
			Aujre lets you earn by sharing cool stuff on your WhatsApp status. Simple, right? Be among the first to know when we kick off. Sign up now, and let's start earning together!
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
