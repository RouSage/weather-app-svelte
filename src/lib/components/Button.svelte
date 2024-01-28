<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';

    export let text: string;
    export let type: HTMLButtonAttributes['type'] = 'button';
    export let disabled: HTMLButtonAttributes['disabled'] = false;
</script>

<button
    class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-offset-white transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    type="{type}"
    disabled="{disabled}"
    on:click>{text}</button
>
