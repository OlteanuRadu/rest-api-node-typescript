import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/CRMdb';  
    public mongoUrl: string = "mongodb://vmadmin:CNhqRKztEdGPtvVNwxrtYfKx7slVbtHpC1BuIhJNfjm9LXyl0AW8C9holQhKN9lq9hPVbQMX1lBezWjS6Trptw==@vmadmin.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        (mongoose as any).Promise = global.Promise;
        mongoose.connect("mongodb://vmadmin:CNhqRKztEdGPtvVNwxrtYfKx7slVbtHpC1BuIhJNfjm9LXyl0AW8C9holQhKN9lq9hPVbQMX1lBezWjS6Trptw%3D%3D@vmadmin.documents.azure.com:10255/?ssl=true");        
    }

}

export default new App().app;