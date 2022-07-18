import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const port = 6969;

const server = http.createServer(express);

const wss = new WebSocket.Server({server});



wss.on('connection',(ws)=>{

    ws.send('Connected to port 6969')

    ws.on('message',(e)=>{

        const wbsct = new WebSocket(`wss://stream.binance.com:9443/ws/${e}`);

        wbsct.on('message', (data) => {
            if (data) {
                const trade = JSON.parse(data)
                ws.send(trade.p)
            }
        });

    })
});


server.listen(port,()=>{
    console.log('wss connected')
})

