import { Injectable } from '@angular/core';
import Contato from '../entities/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatos: Contato[] = [];

  constructor() { 
    let c1: Contato = new Contato('Walter White', '3132013');
      let c2: Contato = new Contato('Mike Tyson', '999999');
      let c3: Contato = new Contato('Peter Parker', '3132013');
      this.contatos.push(c1);
      this.contatos.push(c2);
      this.contatos.push(c3);
  }
  obterTodos() : Contato[]{
    return this.contatos;
  }
  obterPorIndice(indice: number) : Contato{
    return this.contatos[indice];
  }
  cadastrar(contato : Contato){
    this.contatos.push(contato);
  }
}
