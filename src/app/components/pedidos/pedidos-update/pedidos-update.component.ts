import { Component, OnInit } from '@angular/core';
import {Produto} from "../../produto/produto.model";
import {PedidosDTO} from "../pedidos.dto";
import {Cliente} from "../../cliente/cliente.model";
import {PedidosService} from "../pedidos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pedidos} from "../pedidos.model";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Component({
  selector: 'app-pedidos-update',
  templateUrl: './pedidos-update.component.html',
  styleUrls: ['./pedidos-update.component.css']
})
export class PedidosUpdateComponent implements OnInit {

  produto = new class implements Produto {
    descricao: "";
    nome: "";
    preco: "";
    quantidade: null;
    sku: "";
  }
  pedido : PedidosDTO ={
    cliente: null,
    totalCompra: "",
    dataCompra: "",
    produtos: null
  };
  cliente = new class implements Cliente {
    id: null
    nome: ''
    cpf: ''
    dataNascimento:''
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
    this.pedidosService.update(this.id, this.pedido).subscribe(up =>
      this.clean(up)
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
    this.router.navigate((['/pedidos']));
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
      this.pedidosService.showMessage("Pedido atualizado com sucesso", false)
    }
  }
}
