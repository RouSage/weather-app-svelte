<script lang="ts">
    export let value: string;
    export let name: string;
    export let placeholder: string;
    export let disabled: boolean = false;
</script>

<input
    class="flex h-10 w-full rounded-md border border-zinc-400 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="{placeholder}"
    type="text"
    disabled="{disabled}"
    name="{name}"
    bind:value="{value}"
/>
