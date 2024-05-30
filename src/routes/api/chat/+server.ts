import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? ''
});

export const POST = (async ({ request }) => {
	const { messages } = await request.json();
	console.log(messages);

	const result = await streamText({
		model: openai('gpt-3.5-turbo'),
		messages
	});
	console.log(result);

	return result.toAIStreamResponse();
}) satisfies RequestHandler;
