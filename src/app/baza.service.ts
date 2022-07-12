import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class BazaService {
host = 'https://imsi.pl:5000/player/user2'; 
// użytkownika należy wcześniej wygenerować z wykorzystaniem ARC
constructor(private http: HttpClient) { }
// deklaracja metody serwisu wykorzystującej GET RestAPI
getUser(): Observable<User> {
    return this.http.get<User>( this.host );
}
updateUser(user: { id: string; }): Observable<User> {
  return this.http.put<User>(this.host+'s/'+user.id, user);
}
// tu możemy deklarować kolejne metody
}

