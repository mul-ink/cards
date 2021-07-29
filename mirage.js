import { createServer } from "miragejs"

export function startMirage(environment="development") {
  return createServer({
    environment,
    routes() {
        this.get("/api/cards", () => [
          { id: "1", holder: "Luke Skywalker", number: '0000 1111 2222 3333', expiration: '01/20', code: '001', vendor: 'VISA' },
          { id: "2", holder: "Leia Skywalker", number: '1111 2222 3333 4444', expiration: '02/21', code: '002', vendor: 'MC' },
        ])
    },
  })
}
