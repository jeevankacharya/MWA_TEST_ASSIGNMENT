const fibonacci_series = (n) => {

    c = 0;
    a = 0;
    b = 1;

    if (n === 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        for (var i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
    return b;

};

process.on('message', (msg) => {
    const sum = fibonacci_series(msg);
    process.send(sum);
    process.exit(1)
});