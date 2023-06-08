"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRouter = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleWare = function () {
        this.app.use(express.json());
        this.setRouter();
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log('middle');
            next();
        });
        this.app.use(function (req, res, next) {
            console.log('404 error');
            res.send({ error: '404 Not Found' });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleWare();
        this.app.listen(8000, function () {
            console.log('Server is on...');
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map