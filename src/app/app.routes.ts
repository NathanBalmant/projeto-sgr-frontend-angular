import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MoradorCadastroComponent } from './pages/morador-cadastro/morador-cadastro.component';

export const routes: Routes = [
      {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
      {
        path: 'morador',
        component: MoradorCadastroComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      } 
];
