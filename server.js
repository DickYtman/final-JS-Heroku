const express = require("express")
const path = require('path')
const app = express()
const userRouter = require('./routes/users')
const PORT = process.env.PORT || 5000


    app.get("/", (req, res) => {
        console.log('Hello I am starting to work server.js')
        // res.send('greetings')
        // res.sendStatus(500)
        // res.status(500).send('You did something wrong cabrone')
        // res.status(500).json({ message: "Error"})
        // res.json({ message: "Error"})
        // res.download("server.js") 
        // res.render("index")
    })
    // app.use(express.static(path.join(__dirname, 'public')))
    // app.use(express.static('public'))
    app.use('/users', userRouter)
    app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))