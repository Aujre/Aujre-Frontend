<svelte:head>
	<title>Login | Aujre</title>
</svelte:head>

<div>
	<div class="flex flex-col gap-3">
		<h1 class="text-4xl">Login</h1>
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
			<div class="flex justify-between items-center">
				<span>Password</span>
				<a href="/auth/forgot-password" class="text-secondary-600 hover:text-secondary-700 text-sm"
					>Forgot password?</a
				>
			</div>
			<input type="password" class="form-input border border-primary-500" />
		</label>
		<div class="mt-3">
			<p class="text-sm">
				Don't have an account?
				<a href="/auth/signup" class="text-secondary-600 hover:text-secondary-700"> Sign up</a>
			</p>
		</div>
		<div class="buttons mt-2">
			<button class="btn w-full mt-3 variant-filled-secondary rounded-[5px] font-semibold">
				Login
			</button>
		</div>
		<div class="buttons mt-1">
			<button
				class="btn w-full mt-3 border-gray-500 hover:border-gray-700 border rounded-[5px] font-medium"
			>
				<iconify-icon width="25" icon="flat-color-icons:google" />
				<span> Login with Google </span>
			</button>
		</div>
	</form>
</div>

<style>
	.google-btn {
		border-radius: 0.3125rem;
		border: 1px solid #ccc;
		background: #fff;
		box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.25);
		width: 100%;
		padding: 10px;
		margin-top: 1.5rem;
	}
</style>
