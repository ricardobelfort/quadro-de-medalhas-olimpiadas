import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RankResponse } from '../models/rank.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  private readonly BASE_URL = 'https://apis.codante.io/olympic-games';
  service = inject(HttpClient);

  getRank(): Observable<RankResponse> {
    return this.service.get<RankResponse>(`${this.BASE_URL}/countries`);
  }
}
