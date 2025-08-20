import { Hono } from 'hono'
import { slackRoute } from './slackRoute'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/',slackRoute)
export default app
