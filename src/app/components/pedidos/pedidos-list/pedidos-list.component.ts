import {Component, OnInit} from '@angular/core';
import {PedidosService} from "../pedidos.service";
import {PedidosDTO} from "../pedidos.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit{
  pedidos: PedidosDTO[];

  displayedColumns = ['nameCliente', 'totalCompra', 'dataCompra','nProdutos', 'produtos','action']
  panelOpenState: false;

  constructor(private pedidosService: PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.listarPedidos();
  }

  deletePedidos(id: number) {
    this.pedidosService.delete(id).subscribe();
    this.listarPedidos();
  }

  listarPedidos(){
    this.pedidosService.read().subscribe(pedidos =>
      this.pedidos = pedidos
    )
    this.router.navigate((['/pedidos']))
  }

}
