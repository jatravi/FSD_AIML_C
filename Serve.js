const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, htmlContent) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error')
                return
                }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(htmlContent)
        })
    } 
    else if(req.url ==='/styles.css'){
        
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT}/)
})
