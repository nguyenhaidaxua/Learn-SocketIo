const express = require('express');
const { render } = require('pug')
const path = require('path')

const app = express();
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000 || process.env.PORT 


app.get('/login', (req,res) => {
    res.render('login')
})
app.get('/chat',(req,res) => {
    res.render('chat')
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));