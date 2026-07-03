<script lang="ts">
	let { children } = $props();
</script>

<div class="drawer lg:drawer-open min-h-screen">
	<input id="app-drawer" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<div class="navbar bg-base-300 w-full sticky top-0 z-10">
			<div class="flex-none lg:hidden">
				<label for="app-drawer" aria-label="Open sidebar" class="btn btn-square btn-ghost drawer-button">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2 font-semibold text-lg">My App</div>
		</div>

		<main class="flex-1 p-6">
			{@render children()}
		</main>
	</div>

	<div class="drawer-side z-20">
		<label for="app-drawer" aria-label="Close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-64 p-4 gap-1">
			<li class="menu-title">Navigation</li>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</div>
</div>
