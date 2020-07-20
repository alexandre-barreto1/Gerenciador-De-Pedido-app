import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {PedidosDTO} from "./pedidos.dto";
import {Cliente} from "../cliente/cliente.model";
import {Pedidos} from "./pedidos.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  buscarPedidoPeloProduto(sku: string): Observable<PedidosDTO>{
    return this.http.get<PedidosDTO>("http://localhost:8080/pedido/produto/"+sku).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  buscarClientePeloCpf(cpf: string): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8080/pedido/cliente/"+cpf).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<PedidosDTO[]>{
    return this.http.get<PedidosDTO[]>("http://localhost:8080/pedido").pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(pedido: PedidosDTO): Observable<Pedidos>{
    return this.http.post<Pedidos>("http://localhost:8080/pedido",pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Pedidos> {
    return this.http.delete<Pedidos>("http://localhost:8080/pedido/"+id).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(id: number,pedido: PedidosDTO): Observable<Pedidos> {
    return this.http.put<Pedidos>("http://localhost:8080/pedido/"+id,pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-erro'] : ['msg-success'],
    });
  }
  errorHandler(e: any): Observable<any>{
    if(e.status == 500){
      this.showMessage('CPF não encontrado', true);
      return EMPTY;
    }
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
