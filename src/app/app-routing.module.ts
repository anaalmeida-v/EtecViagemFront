import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPacoteComponent } from './cadastro-pacote/cadastro-pacote.component';
import { DetalhesPacoteComponent } from './detalhes-pacote/detalhes-pacote.component';
import { ExclusaoPacoteComponent } from './exclusao-pacote/exclusao-pacote.component';
import { HomeComponent } from './home/home.component';
import { ListagemPacoteComponent } from './listagem-pacote/listagem-pacote.component';

const routes: Routes = [

  { path: 'cadastro-pacote', component: CadastroPacoteComponent },
  { path: 'listagem-pacote', component: ListagemPacoteComponent },
  { path: 'exclusao-pacote/:id', component: ExclusaoPacoteComponent },
  { path: 'detalhes-pacote/:id', component: DetalhesPacoteComponent },
  { path: '', redirectTo: '/listagem-pacote', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
