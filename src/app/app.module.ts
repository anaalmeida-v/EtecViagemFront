import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroPacoteComponent } from './cadastro-pacote/cadastro-pacote.component';
import { DetalhesPacoteComponent } from './detalhes-pacote/detalhes-pacote.component';
import { ExclusaoPacoteComponent } from './exclusao-pacote/exclusao-pacote.component';
import { ListagemPacoteComponent } from './listagem-pacote/listagem-pacote.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AprovacaoPacoteComponent } from './aprovacao-pacote/aprovacao-pacote.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPacoteComponent,
    DetalhesPacoteComponent,
    ExclusaoPacoteComponent,
    ListagemPacoteComponent,
    HeaderComponent,
    HomeComponent,
    AprovacaoPacoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
