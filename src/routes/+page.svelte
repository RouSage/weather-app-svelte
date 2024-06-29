<script lang="ts">
    import { enhance } from '$app/forms';
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';
    import type { ActionData } from './$types';

    export let form: ActionData;

    let pending = false;
</script>

<section class="mx-auto flex w-full max-w-2xl flex-col items-center gap-6">
    <h1 class="text-center text-3xl font-bold">Weather App</h1>
    <form
        class="flex w-full max-w-md items-start gap-2"
        method="POST"
        use:enhance="{() => {
            pending = true;

            return async ({ update }) => {
                await update();
                pending = false;
            };
        }}"
    >
        <div class="flex flex-1 flex-col gap-1">
            <Input
                name="loc"
                value="{form?.loc || ''}"
                placeholder="Enter city or zip code"
                disabled="{pending}"
            />
            {#if form?.error}
                <p class="text-xs text-red-600">{form.error}</p>
            {/if}
        </div>
        <Button text="Search" type="submit" disabled="{pending}" />
    </form>
</section>
