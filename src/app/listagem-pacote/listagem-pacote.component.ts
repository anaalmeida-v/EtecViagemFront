import { Component, OnInit } from '@angular/core';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-listagem-pacote',
  templateUrl: './listagem-pacote.component.html',
  styleUrls: ['./listagem-pacote.component.css']
})
export class ListagemPacoteComponent implements OnInit {

  pacotes: Array<any> = [];

  constructor(private service : PacoteService) {
    
  }


  ngOnInit(): void {
    this.service.todos().subscribe(e => this.pacotes = e);
  }


}
