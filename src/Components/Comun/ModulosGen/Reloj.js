module.exports = function Reloj() {

    setInterval(() => {
        new Date().toLocaleTimeString()
    }, 1000);
}

