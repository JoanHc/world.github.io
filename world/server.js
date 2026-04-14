import jsonServer from 'json-server'; // Usamos import en lugar de require
const server = jsonServer.create();
const router = jsonServer.router('data/cities.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 500); // 500 ms de retraso
});

server.use(router);

server.listen(9000, () => {
  console.log('JSON Server is running on http://localhost:9000');
});
