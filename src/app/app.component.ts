import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RankService } from './services/rank.service';
import { map } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Olimpíadas de Paris 2024';
  tagline =
    'Este é um aplicativo da web que permite que você visualize o quadro de medalhas dos Jogos Olímpicos de Paris 2024 em tempo real';
  service = inject(RankService);

  control = new FormControl<string>('', { nonNullable: true });

  countries$ = this.service.getRank().pipe(
    // Todo: Add debounceTime, distinctUntilChanged, filter, and map operators
    map((res) => res.data),
  );
}
