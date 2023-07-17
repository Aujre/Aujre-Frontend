import { fail } from '@sveltejs/kit';
import { subscribe } from '../lib/server/mailchimp.js';

export const actions = {
	'join-waitlist': async ({ request }) => {
		const formData = await request.formData();
		const email = String(formData.get('email'));

		if (!email) {
			return fail(400, { email, missing: true });
		}

		try {
			await subscribe(email);
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { server: true });
		}
	}
};
