import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../cliente.service";
import {Router} from "@angular/router";
import {Cliente} from "../cliente.model";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router) { }

  cliente = new class implements Cliente {
    id: null
    nome: ''
    cpf: ''
    dataNascimento:''
  };

  ngOnInit(): void {
  }

  create(): void{
      this.clienteService.create(this.cliente).subscribe(create =>
        this.clean()
      );
  }

  private clean(): void{
    this.router.navigate((['/cliente/create']));
    this.cliente = new class implements Cliente {
      id: null
      nome: ''
      cpf: ''
      dataNascimento:''
    };
    this.clienteService.showMessage("Cliente criado com sucesso", false)
  }
}
