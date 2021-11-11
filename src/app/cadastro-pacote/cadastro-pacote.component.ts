import { Component, OnInit } from '@angular/core';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-cadastro-pacote',
  templateUrl: './cadastro-pacote.component.html',
  styleUrls: ['./cadastro-pacote.component.css']
})
export class CadastroPacoteComponent implements OnInit {

  pacote: any = {
    detalhe: { }
  };

  constructor(private pacoteService : PacoteService) { }

  ngOnInit(): void {
  }

  salvarPacote() {
    
  }

}
