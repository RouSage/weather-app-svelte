<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';

    interface Props {
        text: string;
        type?: HTMLButtonAttributes['type'];
        disabled?: HTMLButtonAttributes['disabled'];
        onclick?: HTMLButtonAttributes['onclick'];
    }

    let { text, type = 'button', disabled = false, onclick }: Props = $props();
</script>

<button
    class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-offset-white transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    type={type}
    disabled={disabled}
    onclick={onclick}>{text}</button
>
