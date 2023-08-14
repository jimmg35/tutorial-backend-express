import express from 'express'

// const, let, var
const app = express()

app.get('/bmi', function (req, res) {
    const height = req.query.height as string
    const weight = req.query.weight as string

    const BMI = Number(weight) / (Number(height) / 100) ** 2
    res.send(`your bmi is ${BMI}`)
})

app.listen(3000, () => {
    console.log("server is listening at port 3000")
})
