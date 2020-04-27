const express = require("express")
const app = express()

app.use(express.json())

app.use(express.static("static"))

app.use('*', (req, res) => {
    res.status(404).json({ error: "Not found" })
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})