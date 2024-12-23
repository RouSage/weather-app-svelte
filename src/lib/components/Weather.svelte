<script lang="ts">
    import type { Weather } from '$lib/server/weather/types';
    import MapPinIcon from './ui/icons/MapPinIcon.svelte';

    interface Props {
        weather: Weather;
        city: string;
        country: string;
    }

    let { weather, city, country }: Props = $props();
</script>

<section
    class="flex w-full flex-1 flex-col gap-6 rounded border border-zinc-400 bg-white p-4"
>
    <header class="flex flex-col items-center justify-between">
        <h2 class="text-2xl font-bold">{city}, {country}</h2>
        <MapPinIcon class="text-gray-499 size-6" />
    </header>
    <article class="grid grid-cols-2 gap-4 rounded bg-white p-4">
        <div class="flex flex-col items-center justify-center">
            <div class="text-5xl font-bold">
                {weather.main.temp.toFixed(0)}°C
            </div>
            <div class="capitalize text-gray-500 dark:text-gray-400">
                {weather.weather[0].main} - {weather.weather[0].description}
            </div>
        </div>
        <div class="flex items-center justify-center">
            <img
                alt={weather.weather[0].description}
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                class="h-24 w-24"
            />
        </div>
        <div class="flex flex-col items-center justify-center">
            <div class="text-xl font-bold">Feels Like</div>
            <div class="text-gray-500 dark:text-gray-400">
                {weather.main.feels_like.toFixed(0)}°C
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <div class="text-xl font-bold">Humidity</div>
            <div class="text-gray-500 dark:text-gray-400">
                {weather.main.humidity}%
            </div>
        </div>
        {#if weather.main.wind}
            <div class="flex flex-col items-center justify-center">
                <div class="text-xl font-bold">Wind Speed</div>
                <div class="text-gray-500 dark:text-gray-400">
                    {weather.main.wind.speed} m/s
                </div>
            </div>
        {/if}
    </article>
</section>
