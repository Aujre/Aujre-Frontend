<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<div class="flex w-screen">
		<div class="flex w-3/5 flex-col justify-center items-center">
			<slot />
		</div>
		<div class="background w-2/5">
			<div class="bg-overlay" />
		</div>
	</div>
</AppShell>

<style>
	.background {
		height: 100vh;
		background: url('/login-bg.jpeg');
		background-size: cover;
		background-position: center;
	}

	.bg-overlay {
		background: linear-gradient(
			221deg,
			rgba(221, 157, 60, 0.1) 0%,
			rgba(223, 70, 52, 0.1) 32.47%,
			rgba(181, 0, 227, 0.1) 71.35%,
			rgba(60, 124, 221, 0.1) 100%
		);
		height: 100%;
		width: 100%;
	}
</style>
