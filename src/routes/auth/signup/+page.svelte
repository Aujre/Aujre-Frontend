<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Sign Up | Aujre</title>
</svelte:head>

<div>
	<div class="flex flex-col gap-3">
		<h1 class="text-4xl">Sign up</h1>
		<p class="text-xs font-normal">
			Join our community today! 🎉 Sign up and embark on an exciting journey with us.
		</p>
	</div>

	<form action="" class="mt-[2rem]">
		<label class="label">
			<span>Email address</span>
			<input type="text" class="form-input border border-primary-500" />
		</label>
		<label class="label mt-3">
			<span>Password</span>
			<input type="password" class="form-input border border-primary-500" />
		</label>
		<label class="label">
			<span>Confirm Password</span>
			<input type="text" class="form-input border border-primary-500" />
		</label>

		<div class="mt-3">
			<p class="text-sm">
				Already have an account?
				<a href="/auth/login" class="text-secondary-600 hover:text-secondary-700"> Login</a>
			</p>
		</div>

		<div class="buttons mt-3">
			<button class="btn w-full mt-3 variant-filled-secondary rounded-[5px] font-semibold">
				Sign up
			</button>
		</div>
		<div class="buttons mt-1">
			<button
				class="btn w-full mt-3 border-gray-500 hover:border-gray-700 border rounded-[5px] font-medium"
			>
				<iconify-icon width="25" icon="flat-color-icons:google" />
				<span> Sign up with Google </span>
			</button>
		</div>
	</form>
</div>
