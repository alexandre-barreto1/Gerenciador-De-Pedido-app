import {Component, OnInit} from '@angular/core';
import {PedidosService} from "../pedidos.service";
import {PedidosDTO} from "../pedidos.dto";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit{
  pedidos: PedidosDTO[];

  displayedColumns = ['nameCliente', 'totalCompra', 'dataCompra','nProdutos', 'produtos','action']
  panelOpenState: false;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.pedidosService.read().subscribe(pedidos =>
      this.pedidos = pedidos
    )
  }
  deleteCliente(id: any) {

  }


}
