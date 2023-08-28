import { createConnection } from "typeorm"


const connect2DB = async () => {
  const client = await createConnection()
  return client
}

export default connect2DB
