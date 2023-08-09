import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() {
    const number = this.index++;

    setTimeout(() => {
      if(number > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(number))
  
        this.push(buf)
      }
    }, 1000)
  }
}

new OneToHundredStream().pipe(process.stdout)
