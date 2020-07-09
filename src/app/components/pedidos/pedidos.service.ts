import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../produto/produto.model";
import {Cliente} from "../cliente/cliente.model";
import {Pedidos} from "./pedidos.model";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  buscarProdutoPeloSku(sku: string): Observable<Produto>{
    return this.http.get<Produto>("http://localhost:8080/produto/"+sku)
  }

  read(): Observable<Pedidos[]>{
    return this.http.get<Pedidos[]>("http://localhost:8080/cliente");
  }
}
