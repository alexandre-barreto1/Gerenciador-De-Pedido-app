import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente.model";
import {ClienteService} from "../cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[];
  displayedColumns = ['name', 'cpf', 'dataNascimento', 'action']

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  deleteCliente(id: number): void{
    this.clienteService.delete(id).subscribe(del =>
      this.listarClientes()
    );
    this.clienteService.showMessage("Cliente deletado com sucesso",false);
  }

  private listarClientes():void{
    this.clienteService.read().subscribe(clientes =>
        this.clientes = clientes,
    )
    this.router.navigate((['/clientes']))
  }
}
