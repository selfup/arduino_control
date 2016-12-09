var socket = io.connect('http://localhost:5000', { reconnect: true })

new Vue({
  el: '#app',
  methods: {
    on: function() {
      socket.send('on', 12);
    },
    off: function() {
      socket.send('off', 12);
    },
  },
})
