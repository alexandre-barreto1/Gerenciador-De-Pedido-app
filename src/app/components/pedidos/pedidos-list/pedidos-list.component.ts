import { Component, OnInit } from '@angular/core';
import {Pedidos} from "../pedidos.model";
import {ClienteService} from "../../cliente/cliente.service";
import {Router} from "@angular/router";
import {PedidosService} from "../pedidos.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  pedidos: Pedidos[];
  displayedColumns = ['nameCliente', 'totalCompra', 'dataCompra', 'produtos','action']

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.pedidosService.read().subscribe(pedidos =>
      this.pedidos = pedidos)
  }

  deleteCliente(id: any) {
    
  }
}
