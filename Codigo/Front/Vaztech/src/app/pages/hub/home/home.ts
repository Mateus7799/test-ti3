import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  // Usuário mockado
  user = {
    nome: 'Usuário Teste',
    role: 'Admin',
  };

  // Cards mockados
  mockCards = [
    { title: 'Relatórios', description: 'Acompanhe os relatórios do sistema.' },
    { title: 'Usuários', description: 'Gerencie os usuários cadastrados.' },
    { title: 'Configurações', description: 'Ajuste as configurações do sistema.' }
  ];
}
