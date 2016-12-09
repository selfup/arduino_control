const socket = io
  .connect(
    'http://localhost:5000',
    {reconnect: true}
  )

const vm = new Vue({
  el: '#app',
  methods: {
    on() {
      socket.send('on', 12);
    },
    off() {
      socket.send('off', 12);
    },
  },
  template: `
    <div>
      <h1>TURN ON OR OFF THE LED (PIN 12)</h1>
      <br>
      <button @click='on'>12: ON</button>
      <br><br>
      <button @click='off'>12: OFF</button>
    </div>
  `
})
