import { Injectable } from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "./cliente.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>("http://localhost:8080/cliente").pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>("http://localhost:8080/cliente/"+id).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  create(cliente: Cliente):Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8080/cliente",cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(cliente: Cliente, id: number):Observable<Cliente>{
    return this.http.put<Cliente>("http://localhost:8080/cliente/"+id,cliente).pipe(
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
      this.showMessage('Confira se todos os campos estão corretamente preenchidos', true);
      return EMPTY;
    }
    if(e.status == 400){
      this.showMessage("CPF já cadastrado", true);
      return EMPTY;
    }
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
