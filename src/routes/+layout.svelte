<script lang="ts">
	import '../styles/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../styles/app.postcss';

	import Navbar from '$lib/components/Navbar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
