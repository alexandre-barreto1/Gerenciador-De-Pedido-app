import { Component, OnInit } from '@angular/core';
import {Produto} from "../../produto/produto.model";
import {PedidosDTO} from "../pedidos.dto";
import {Cliente} from "../../cliente/cliente.model";
import {PedidosService} from "../pedidos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pedidos-update',
  templateUrl: './pedidos-update.component.html',
  styleUrls: ['./pedidos-update.component.css']
})
export class PedidosUpdateComponent implements OnInit {
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
  private id: number;
  visible = false;
  constructor(private pedidosService: PedidosService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  update(): void {
    this.pedidosService.update(this.id, this.pedido).subscribe();
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
