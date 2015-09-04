module.exports = {
    createTile(rate=0.5, multiple=2) {
        return (Math.random() >= rate) ? multiple : multiple*2;
    }
};