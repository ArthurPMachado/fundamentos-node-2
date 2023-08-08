import http from 'node:http'

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if(method === 'GET' && url === '/teste') {
    return response.end('Testando o metodo GET');
  }

  if(method === 'POST' && url === '/teste') {
    return response.end('Testando o metodo POST');
  }

  return response.end('Hello World');
})

server.listen(3333);
