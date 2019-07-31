import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Quest } from '../models/quest.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private questsUrl = window['questHost']+ '/api/v1/quest';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getQuests (): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.questsUrl);   
  }

  getQuestNo404<Data>(id: number): Observable<Quest> {
    const url = `${this.questsUrl}/?id=${id}`;
    return this.http.get<Quest[]>(url)
      .pipe(
        map(quests => quests[0]), 
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Quest>(`getQuest id=${id}`))
      );
  }

  getQuest(id: number): Observable<Quest> {
    const url = `${this.questsUrl}/${id}`;
    return this.http.get<Quest>(url);
  }

  addQuest (quest: Quest): Observable<Quest> {
    return this.http.post<Quest>(this.questsUrl, quest, httpOptions);
  }

  deleteQuest (quest: Quest | number): Observable<Quest> {
    const id = typeof quest === 'number' ? Quest : quest.id;
    const url = `${this.questsUrl}/${id}`;

    return this.http.delete<Quest>(url, httpOptions);
  }

  updateQuest (quest: Quest): Observable<any> {
    return this.http.put(this.questsUrl, quest, httpOptions);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
