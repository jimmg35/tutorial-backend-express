import "reflect-metadata"
import express from 'express'
import myDataSource from "./dataSource"
import connect2DB from "./dataSource"

// const, let, var
// bootstrap

const bootstrap = async () => {
  const app = express()

  app.get('/bmi', function (req, res) {
    const height = req.query.height as string
    const weight = req.query.weight as string

    const BMI = Number(weight) / (Number(height) / 100) ** 2
    res.send(`your bmi is ${BMI}`)
  })

  const client = await connect2DB()
  console.log(client.isConnected)

  app.listen(3000, () => {
    console.log("server is listening at port 3000")
  })
}

bootstrap()
