import { Component, OnInit } from '@angular/core';
import {Produto} from "../../produto/produto.model";
import {PedidosService} from "../pedidos.service";
import {PedidosDTO} from "../pedidos.dto";
import {Cliente} from "../../cliente/cliente.model";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {Router} from "@angular/router";
import {Pedidos} from "../pedidos.model";

@Component({
  selector: 'app-pedidos-create',
  templateUrl: './pedidos-create.component.html',
  styleUrls: ['./pedidos-create.component.css']
})
export class PedidosCreateComponent implements OnInit {

  produto = new class implements Produto {
    descricao: "";
    nome: "";
    preco: "";
    quantidade: null;
    sku: "";
  }
  pedido = new class implements PedidosDTO {
    cliente: any;
    totalCompra: "";
    dataCompra: "";
    produtos: any
  };
  cliente = new class implements Cliente {
    id: null
    nome: ''
    cpf: ''
    dataNascimento:''
  };

  displayedColumns: string[] = ['cliente','produtos', 'descricao', 'valor'];

  visible = false;
  constructor(private pedidosService: PedidosService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.pedidosService.save(this.pedido).subscribe(create =>
      this.clean(create)
  );
  }

  buscar(): void{
    this.pedidosService.buscarPedidoPeloProduto(this.produto.sku).subscribe(pedido =>
      this.pedido = this.pedidoVisible(pedido),
    )
    this.pedidosService.buscarClientePeloCpf(this.cliente.cpf).subscribe(cliente=>
    this.pedido.cliente = this.pedidoVisible(cliente),
  )
  }

  private pedidoVisible(obj: any){
    if(isNotNullOrUndefined(obj))
    this.visible = true;
    return obj;
  }

   clean (obj: Pedidos): void{
    this.router.navigate((['/pedido/create']));
    this.cliente = new class implements Cliente {
      id: null
      nome: ''
      cpf: ''
      dataNascimento:''
    };
    this.produto = new class implements Produto {
      descricao: "";
      nome: "";
      preco: "";
      quantidade: null;
      sku: "";
    }
    this.visible = false;
    if(obj != null){
      this.pedidosService.showMessage("Pedido criado com sucesso", false)
    }
}
}
