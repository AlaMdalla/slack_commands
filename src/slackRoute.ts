import { Hono } from 'hono';

export const slackRoute = new Hono();

slackRoute.post('/slack/help', async (c) => {
 return new Response("helpp!!!")
})

slackRoute.get('/slack/callback', async (c) => {
    console.log(c.req)
    return  c.text("test")
   })
   