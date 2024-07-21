const jsonServer = require('json-server')
const restaurantsServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('restaurants.json')
const PORT = 3000 || process.env.PORT
restaurantsServer.use(middleware)
restaurantsServer.use(route)
restaurantsServer.listen(PORT,()=>{
    console.log(`restaurants server started at port ${PORT} and waiting for client request`);
})