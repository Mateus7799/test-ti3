import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  user: any;

  // Dados mockados para exibir na tela
  mockCards = [
    { title: 'Relatórios', description: 'Acompanhe os relatórios do sistema.' },
    { title: 'Usuários', description: 'Gerencie os usuários cadastrados.' },
    { title: 'Configurações', description: 'Ajuste as configurações do sistema.' }
  ];

  mockUsers = [
    { nome: 'Funcionário 1', setor: 'Financeiro', status: 'Ativo' },
    { nome: 'Funcionário 2', setor: 'RH', status: 'Ativo' },
  ];

  mockTasks = [
    { titulo: 'Relatório Mensal', prazo: '10/09/2025', concluido: false },
    { titulo: 'Auditoria', prazo: '15/09/2025', concluido: true },
  ];

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
