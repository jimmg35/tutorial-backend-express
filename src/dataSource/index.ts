import { DataSource } from "typeorm"
import { User } from "../entity/user"

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "jim60308",
  database: "express",
  entities: [User]
})

export default myDataSource
