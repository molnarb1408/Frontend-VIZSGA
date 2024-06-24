import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

// componensen belül (ott ahol szeretnénk használni a service-eket) be kell állítani 
// a providers-en belül
// provider: [UserService, LoggerService]
@Injectable()
export class UserService {
    private userName: string;

    constructor(private logger:LoggerService) {
        this.userName = 'John Doe';
    }

    public getUserName(): string {
        this.logger.log("Felhasználónév lekérdezése...");
        return this.userName;
    }

    public setUserName(value: string){
        this.logger.log(`Felhasználónév beállítása, erre: ${value}`);
        this.userName = value;
    }
}