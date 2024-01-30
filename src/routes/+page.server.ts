import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const location = formData.get('loc');
        if (!location) {
            return fail(400, { loc: location, error: 'Location is required' });
        }

        console.log('LOCATION:', location);
    },
} satisfies Actions;
