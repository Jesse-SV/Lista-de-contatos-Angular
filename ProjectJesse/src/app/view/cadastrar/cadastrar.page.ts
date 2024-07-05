import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome: string;
  telefone: string;
  email: string;
  genero: number;

  constructor(private alertController: AlertController, private contatoService: ContatoService, private router : Router) { }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let c: Contato = new Contato(this.nome, this.telefone)
      if(this.email){
        c.email = this.email;
      }
      if(this.genero){
        c.genero = this.genero;
      }
      else{
        c.genero = 0;
      }
      this.contatoService.cadastrar(c);
      this.router.navigate(['/home']);
    }else{
      this.presentAlert('Erro', 'A falha está entre a cadeira e o monitor');
      this.nome = "";
      this.telefone = "";
    }
  }

  ngOnInit() {
  }

}
