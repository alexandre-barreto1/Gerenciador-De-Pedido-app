import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {Produto} from "./produto.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  delete(id: number): Observable<Produto>{
    return this.http.delete<Produto>("http://localhost:8080/produto/"+id).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:8080/produto").pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>("http://localhost:8080/produto",produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(produto: Produto, id: number): Observable<Produto>{
    return this.http.put<Produto>("http://localhost:8080/produto/"+id,produto).pipe(
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
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }
}
