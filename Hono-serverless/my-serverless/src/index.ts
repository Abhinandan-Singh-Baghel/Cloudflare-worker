import { Hono } from 'hono'

const app = new Hono()

app.use(async (c, next) => {
  if(c.req.header("Authorization"))
    {
      // if logic for validation
    }else{
      return c.text("You don't have the access");
    }
})


app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));


  return c.text("Hello HONO ");
})

export default app