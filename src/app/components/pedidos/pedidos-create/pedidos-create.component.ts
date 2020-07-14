import { Component, OnInit } from '@angular/core';
import {Produto} from "../../produto/produto.model";
import {PedidosService} from "../pedidos.service";
import {PedidosDTO} from "../pedidos.dto";
import {Cliente} from "../../cliente/cliente.model";

@Component({
  selector: 'app-pedidos-create',
  templateUrl: './pedidos-create.component.html',
  styleUrls: ['./pedidos-create.component.css']
})
export class PedidosCreateComponent implements OnInit {

  produtos : Produto[];
  produto : Produto ={
    descricao: "",
    nome: "",
    preco: "",
    quantidade: null,
    sku: ""
  }
  pedido : PedidosDTO ={
    cliente: null,
    totalCompra: "",
    dataCompra: "",
    produtos: null
  };
  cliente: Cliente ={
  cpf: "",
  dataNascimento: "",
  nome: ""
  };
  displayedColumns: string[] = ['cliente','produtos', 'descricao', 'valor'];

  visible = false;
  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  create() {}

  buscar(): void{
    this.pedidosService.buscarPedidoPeloProduto(this.produto.sku).subscribe(pedido =>
    this.pedido = pedido
    )
    // this.pedidosService.buscarClientePeloCpf(this.cliente.cpf).subscribe(cliente=>
    // this.cliente = cliente)
  }


  clean() {
  this.visible = false;
  }
}
