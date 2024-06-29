import { fail, type Actions } from '@sveltejs/kit';
import * as api from '$lib/server/weather/weather.api';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const location = formData.get('loc') as string;
        if (!location) {
            return fail(400, { loc: location, error: 'Location is required' });
        }

        try {
            const geocode = await api.getGeocode(location);
            const weather = await api.getWeather(geocode.lat, geocode.lon);

            return {
                loc: location,
                weather: weather,
                city: geocode.name,
                country: geocode.country,
            };
        } catch (e) {
            console.log('ERROR:', e);
            return fail(400, { loc: location, error: 'Something went wrong' });
        }
    },
} satisfies Actions;
