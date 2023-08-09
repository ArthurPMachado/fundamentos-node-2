import http from 'node:http'
import { Transform } from 'node:stream'

class NegativeNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformedNumber = Number(chunk.toString()) * -1

    console.log(transformedNumber)

    callback(null, Buffer.from(String(transformedNumber)))
  }
}

const server = http.createServer((request, response) => {
  return request
    .pipe(new NegativeNumberStream())
    .pipe(response)
})

server.listen(3334)
