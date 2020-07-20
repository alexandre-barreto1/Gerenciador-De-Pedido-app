import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProdutoService} from "../produto.service";
import {Produto} from "../produto.model";

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private router: Router) { }

  produto = new class implements Produto {
    id: null
    sku: ''
    nome: ''
    descricao: ''
    preco:''
    quantidade: null
  };

  ngOnInit(): void {
  }

  create(): void{
    this.produtoService.create(this.produto).subscribe(create =>
      this.clean()
  );
  }

  private clean(): void{
    this.router.navigate((['/produto/create']));
    this.produto = new class implements Produto {
      id: null
      sku: ''
      nome: ''
      descricao: ''
      preco:''
      quantidade: null
    };
    this.produtoService.showMessage("Produto criado com sucesso", false)
  }
}
