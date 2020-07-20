import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente.model";
import {ClienteService} from "../cliente.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  private id: number;

  cliente = new class implements Cliente {
    id: null
    nome: ''
    cpf: ''
    dataNascimento:''
  };

  constructor(private clienteService: ClienteService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  update(): void{
    this.clienteService.update(this.cliente,this.id).subscribe(up=>
      this.clean()
  );
  }
  private clean(): void{
    this.router.navigate((['/cliente/update']));
    this.cliente = new class implements Cliente {
      id: null
      nome: ''
      cpf: ''
      dataNascimento:''
    };
    this.clienteService.showMessage("Cliente atualizado com sucesso", false)
  }

}
