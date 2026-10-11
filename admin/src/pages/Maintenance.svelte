<script lang="ts">
	import Main from "../components/templates/Main.svelte";
	import request from "../lib/request";

	let status: { configured: boolean; enabled: boolean } | null = null;
	let error = "";
	let busy = false;

	const load = () => request.get("/maintenance").then(r => { status = r.data; }).catch(e => { error = String(e?.response?.data?.message || e); });
	const set = (enabled: boolean) => {
		busy = true; error = "";
		return request.post("/maintenance?enabled=" + enabled)
			.then(load)
			.catch(e => { error = String(e?.response?.data?.message || e); })
			.finally(() => { busy = false; });
	};
	load();
</script>

<svelte:head>
	<title>Maintenance Mode</title>
</svelte:head>

<Main>
	<div class="row">
		<div class="col-12">
			<h3>Maintenance Mode</h3>
			<p>Shows the offline page to everyone (except staff with the bypass key). Takes effect within a minute or so through Cloudflare.</p>
			{#if error}<div class="alert alert-danger">{error}</div>{/if}
			{#if !status}
				<p>Loading...</p>
			{:else if !status.configured}
				<div class="alert alert-warning">Cloudflare is not configured yet. Add <code>Cloudflare:ApiToken</code>, <code>AccountId</code> and <code>KvNamespaceId</code> to appsettings.json.</div>
			{:else}
				<div class="card card-body">
					<p class="mb-2 font-weight-bold">Maintenance is currently {status.enabled ? "ON" : "OFF"}</p>
					{#if status.enabled}
						<button class="btn btn-success" disabled={busy} on:click={() => set(false)}>Turn off (reopen site)</button>
					{:else}
						<button class="btn btn-danger" disabled={busy} on:click={() => { if (confirm("Show the maintenance page to all visitors?")) set(true); }}>Turn on</button>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</Main>
