<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<div class="mx-auto w-full max-w-md space-y-6">
    <h1 class="text-center text-3xl font-bold">Weather App</h1>
    <form class="flex items-start gap-2" method="POST">
        <div class="flex flex-col gap-1">
            <Input
                name="loc"
                value="{form?.loc || ''}"
                placeholder="Enter city or zip code"
            />
            {#if form?.error}
                <p class="text-xs text-red-600">{form.error}</p>
            {/if}
        </div>
        <Button text="Search" type="submit" />
    </form>
</div>
