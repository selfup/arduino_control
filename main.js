const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 5000
const server = http.createServer().listen(port, () => {} )

const five = require('johnny-five');
const board = new five.Board({port: 'COM4'});

const pin = {
  12: {
    led: {
      on: () => console.log('on'),
      off: () => console.log('off')
    },
  },
};

const io = socketIo(server);

board.on('ready', () => {
  const led = new five.Led(12);
  led.off();
  pin[12].led = led;
});

io.sockets.on('connection', socket => {
  socket.on('message', (channel, message) => {
    if (channel === 'on') pin[message].led.on();
    if (channel === 'off') pin[message].led.off();
  });
});
