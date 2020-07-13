import { Component, OnInit } from '@angular/core';
import {Produto} from "../../produto/produto.model";
import {PedidosService} from "../pedidos.service";
import {Cliente} from "../../cliente/cliente.model";
import {PedidosDTO} from "../pedidos.dto";

@Component({
  selector: 'app-pedidos-create',
  templateUrl: './pedidos-create.component.html',
  styleUrls: ['./pedidos-create.component.css']
})
export class PedidosCreateComponent implements OnInit {
  pedido: PedidosDTO ={
    cliente: null,
    totalCompra: "",
    dataCompra: "",
    produtos: null
  };

  produto: Produto ={
    descricao: "",
    nome: "",
    preco: "",
    quantidade: null,
    sku: ""

  }

  cliente: Cliente ={
    cpf: "",
    dataNascimento: "",
    nome: ""
  };

  produtoVisible = false;
  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  create() {}

  buscarPedidoPeloProduto(): void{
    this.pedidosService.buscarPedidoPeloProduto(this.produto.sku).subscribe(pedido =>
    this.isUndefined(pedido)
    )}
  private isUndefined(obj: any){
    if (obj != undefined){
      this.pedido = obj;
      this.produtoVisible = true;
    }
  }
}
