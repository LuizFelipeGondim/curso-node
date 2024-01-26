// eslint-disable-next-line
import { Knex } from 'knex' 

// Essa linha eh desabilitada para que seja possivel importar o Knex e nao usa-lo.
// Assim podemos reaproveitar as definicoes que nao vao ser modificadas

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string // Usar o ? porque eh opcional
    }
  }
}
