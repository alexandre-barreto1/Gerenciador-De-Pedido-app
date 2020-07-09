import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "./cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>("http://localhost:8080/cliente");
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>("http://localhost:8080/cliente/"+id);
  }

  create(cliente: Cliente):Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8080/cliente",cliente);
  }

  update(cliente: Cliente, id: number):Observable<Cliente>{
    return this.http.put<Cliente>("http://localhost:8080/cliente/"+id,cliente)
  }
}
