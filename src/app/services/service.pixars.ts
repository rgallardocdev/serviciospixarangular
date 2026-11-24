import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { miPixar } from "../models/pixar";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class miServicePixar{

    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "Bienvenido a la API de personajes de Pixar";
    }

   //Todos los Personajes
    async getPixarsAsync(): Promise<miPixar[]>{
        let request = "api/Pixar";
        let ruta = environment.apipixar  + request;
        let response = firstValueFrom (this._http.get<miPixar[]>(ruta));
        return response;
    }

    //Insert
    async postPixarAsync(_pixar: miPixar): Promise<any>{
        let request = "api/Pixar";
        let ruta = environment.apipixar  + request;
        let header = new HttpHeaders().set("content-type","application/json");
        let response = await firstValueFrom(this._http.post(ruta, _pixar, {headers: header}));
        return response;
    }

    //Delete
    async deletePixarAsync(_id: number): Promise<any>{
        let request = "api/Pixar/" + _id;
        let ruta = environment.apipixar + request;
        let response = await firstValueFrom(this._http.delete(ruta));
        return response;
    }    
}