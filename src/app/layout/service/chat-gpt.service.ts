import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatGptDtoRequest } from '../model/ChatGptDto';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  constructor(private http: HttpClient) { }

  generateResponse(prompt: ChatGptDtoRequest[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.apiKey}`
    });

    const requestBody = {
      model:"gpt-3.5-turbo",
      messages: prompt
    };

    return this.http.post(environment.apiUrl, requestBody, { headers: headers });
  }
}
