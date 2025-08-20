import { Hono } from 'hono';

export const slackRoute = new Hono();

slackRoute.post('/slack/help', async (c) => {
 return new Response("helpp!!!")
})