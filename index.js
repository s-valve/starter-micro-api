var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);

{
    "clear_skies_periods": [
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23
    ],
    "clear_today": true,
    "clear_tomorrow": false
}
