import { createServer } from "miragejs"

export function startMirage(environment="development") {
  return createServer({
    environment,
    routes() {
        this.get("/api/cards", () => [
          { id: "1", name: "Luke Skywalker", ccNumber: '0000 1111 2222 3333', ccExp: '01/20', ccCode: '001' },
          { id: "2", name: "Leia Skywalker", ccNumber: '1111 2222 3333 4444', ccExp: '02/21', ccCode: '002' },
        ])
    },
  })
}