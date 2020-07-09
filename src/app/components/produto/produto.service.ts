import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "./produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<Produto>{
    return this.http.delete<Produto>("http://localhost:8080/produto/"+id)
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:8080/produto");
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>("http://localhost:8080/produto",produto)
  }

  update(produto: Produto, id: number): Observable<Produto>{
    return this.http.put<Produto>("http://localhost:8080/produto/"+id,produto)
  }
}
