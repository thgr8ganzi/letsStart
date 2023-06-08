import * as express from "express";
import {Cat, CatType} from "./cats/cats.model";
import catRouter from "./cats/cats.route";

class Server {
    public app : express.Application;
    constructor() {
        const app:express.Express = express();
        this.app = app
    }

    private setRouter(){
        this.app.use(catRouter)
    }
    private setMiddleWare(){
        this.app.use(express.json());
        this.setRouter();
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1])
            console.log('middle')
            next();
        })
        this.app.use((req, res, next)=>{
            console.log('404 error')
            res.send({error:'404 Not Found'})
        })
    }
    public listen(){
        this.setMiddleWare();
        this.app.listen(8000, () => {
            console.log('Server is on...')
        })
    }
}

function init(){
    const server = new Server();
    server.listen();
}
init();
