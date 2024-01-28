<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';

    let value: string = '';
</script>

<div class="mx-auto w-full max-w-md space-y-6">
    <h1 class="text-center text-3xl font-bold">Weather App</h1>
    <form class="flex items-center gap-2">
        <Input placeholder="Enter city or zip code" bind:value="{value}" />
        <Button text="Search" />
    </form>
</div>
