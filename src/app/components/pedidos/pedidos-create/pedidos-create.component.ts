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

  create(): void {
    this.pedidosService.save(this.pedido).subscribe();
    this.clean();
  }

  buscar(): void{
    this.pedidosService.buscarPedidoPeloProduto(this.produto.sku).subscribe(pedido =>
    this.pedido = pedido
    )
    this.pedidosService.buscarClientePeloCpf(this.cliente.cpf).subscribe(cliente=>
    this.pedido.cliente = cliente
    )
    this.visible = !this.visible;
  }


  clean() {
    this.visible = !this.visible;
  }
}
