import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoService} from "../produto.service";
import {Produto} from "../produto.model";

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto = {
    id: null,
    sku: '',
    nome: '',
    descricao: '',
    preco: '',
    quantidade: null
  };
  private id: number;

  constructor(private produtoService: ProdutoService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  update(): void {
    this.produtoService.update(this.produto, this.id).subscribe();
    this.clean();
  }

  private clean(): void {
    this.router.navigate((['/produto/update']));
    this.produto = new class implements Produto {
      id: null
      sku: ''
      nome: ''
      descricao: ''
      preco: ''
      quantidade: null
    };
  }
}
