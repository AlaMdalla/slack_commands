import { Hono } from 'hono';

export const slackRoute = new Hono();

slackRoute.post('/slack/help', async (c) => {
 return new Response("helpp!!!")
})

slackRoute.get('/slack/callback', async (c) => {
    console.log(c.req)
  
      const code = c.req.query('code');
  const state = c.req.query('state');
  console.log('code:' ,code)
  console.log('state:',state)
    return  c.text("test")
   })
   