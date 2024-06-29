import { OPENWEATHER_API_KEY } from '$env/static/private';
import type { Geocode, Weather } from './types';

const API_KEY = OPENWEATHER_API_KEY ?? '';
const BASE_URL = 'https://api.openweathermap.org';

export const getGeocode = async (query: string): Promise<Geocode> => {
    const resp = await fetch(
        `${BASE_URL}/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`
    );
    const data = await resp.json();

    if (data?.cod >= 400 && data?.cod <= 500) {
        console.error(data.message);
        throw new Error();
    }

    return data[0];
};

export const getWeather = async (
    lat: number,
    lon: number
): Promise<Weather> => {
    const resp = await fetch(
        `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const data = await resp.json();

    if (data?.cod >= 400 && data?.cod <= 500) {
        console.error(data.message);
        throw new Error();
    }

    return data;
};
