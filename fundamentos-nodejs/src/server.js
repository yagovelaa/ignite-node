import http from 'http'

const server = http.createServer((req, res) => {
    const { method, url} = req

    if(method === 'GET' && url === "/users") {
        return res.end('users list')
    }

    if(method === 'PORT' && url === "/users") {
        return res.end('users create')
    }

    return res.end('Hello world')
})

server.listen(3333)