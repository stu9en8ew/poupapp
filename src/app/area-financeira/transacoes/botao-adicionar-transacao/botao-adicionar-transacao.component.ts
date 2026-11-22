import { Component, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao } from '../../compartilhados/transacao.model';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {

  modalAberto = signal(false);

  novaTransacaoForm = {
    nome : '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  }

  tiposTransacao = TipoTransacao;

  /*
  constructor(){
    effect(()=> {
      console.log('modalAblerto: ', this.modalAberto());
    })
  }
  */
  

  abrirModal(){
    this.modalAberto.set(true);
  }

  aoSubmeter(){
    console.log(this.novaTransacaoForm);
  }

}
