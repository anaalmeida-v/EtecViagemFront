import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacoteService } from '../services/pacote.service';

@Component({
  selector: 'app-exclusao-pacote',
  templateUrl: './exclusao-pacote.component.html',
  styleUrls: ['./exclusao-pacote.component.css']
})
export class ExclusaoPacoteComponent implements OnInit {

  pacote: any;

  constructor(private route: ActivatedRoute,
              private service : PacoteService) {

  }


  ngOnInit(): void {
    this.service.buscarPorId(this.route.snapshot.paramMap.get("id"))
                .subscribe(e => this.pacote = e);

  }

}
