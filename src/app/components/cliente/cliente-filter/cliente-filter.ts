import {Cliente} from "../cliente.model";
import {ClienteService} from "../cliente.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClienteFilter {

  constructor(private service: ClienteService) {}

  private cpf;

  validarCliente(cliente: Cliente): Cliente{
    if(!cliente.nome || !cliente.cpf || !cliente.dataNascimento){
      this.service.showMessage("Por favor preecha todos os campos", true);
      return null;
    }

    let data, ano, mes, dia, diaN, mesN, anoN;
    cliente.nome.replace(/^[a-záàâãéèêíïóôõöúçñ ]+$/i,"")
    this.cpf = cliente.cpf.replace(/[^0-9]/g,'');
    data = cliente.dataNascimento.replace(/[^0-9]/g,'');

    if(cliente.nome.length >= 76){
      this.service.showMessage("O campo nome deve conter no maximo 76 digitos alfabéticos", true);
      return null;
    }
    if(this.cpf.length != 11){
      this.service.showMessage("O cpf deve conter 11 digitos numericos", true);
      return null;
    }
    if(data.length != 8 && data.length != 6){
      this.service.showMessage("O campo de data de nascimento deve ser digitado no padrão DIA/MÊS/ANO", true);
      return null;
    }
    dia = data.substring(0,2);
    mes = data.substring(2,4);
    ano = data.substring(4,8);

    anoN = parseInt(ano,10);
    mesN = parseInt(mes,10);
    diaN = parseInt(dia,10);

    if(diaN > 31 || diaN < 0
      && mesN > 12 || mesN < 0
      && anoN > 2020 || anoN < 1900){
      this.service.showMessage("Por favor insira uma data valida ", true);
      return null;
    }

    cliente.nome = cliente.nome.toUpperCase();
    cliente.cpf = this.cpf;
    cliente.dataNascimento = dia+"/"+mes+"/"+ano;

    return cliente;
  }

  listarClientes(cliente: Cliente[]): Cliente[]{
    let cpf1, cpf2, cpf3;
    let i = 0;
    while (i < cliente.length){
      this.cpf = cliente[i].cpf.substring(0,3);
      cpf1 = cliente[i].cpf.substring(3,6);
      cpf2 = cliente[i].cpf.substring(6,9);
      cpf3 = cliente[i].cpf.substring(9,11);
      cliente[i].cpf = this.cpf+"."+cpf1+"."+cpf2+"-"+cpf3;
      i = i+1;
    }

    return cliente;
  }
}
