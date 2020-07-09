import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Produto} from "../produto.model";
import {ProdutoService} from "../produto.service";

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  produtos: Produto[];
  displayedColumns = ['sku', 'name', 'descricao', 'preco', 'quantidade', 'action']

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  deleteProduto(id: number): void{
    this.produtoService.delete(id).subscribe();
    this.listarProdutos();
  }

  private listarProdutos(): void{
    this.produtoService.read().subscribe(produtos =>
      this.produtos = produtos
    )
    this.router.navigate((['/produtos']))
  }}
