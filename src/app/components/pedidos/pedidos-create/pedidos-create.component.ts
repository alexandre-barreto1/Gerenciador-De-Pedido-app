import { Component, OnInit } from '@angular/core';
import {Pedidos} from "../pedidos.model";
import {Produto} from "../../produto/produto.model";
import {PedidosService} from "../pedidos.service";

@Component({
  selector: 'app-pedidos-create',
  templateUrl: './pedidos-create.component.html',
  styleUrls: ['./pedidos-create.component.css']
})
export class PedidosCreateComponent implements OnInit {
  pedido: Pedidos ={
    cliente: null,
    dataDaCompra: null,
    produtos: [],
    totalDaCompra: ""
  };

  produto: Produto ={
    descricao: "",
    nome: "",
    preco: "",
    quantidade: null,
    sku: ""

  }

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  create() {}

  buscarProdutoPeloSku(sku: string): void{
    this.pedidosService.buscarProdutoPeloSku(sku).subscribe(produto =>
    this.produto = produto
    )
}
}
