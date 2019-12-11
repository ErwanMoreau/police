import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface MyData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private readonly http: HttpClient) { }

  AddUserDetails(nom, prenom, email, password, matricule, id_grade) {
    // post the details to API server return value
    return this.http.post<MyData>('/api/create_user.php', {
      nom,
      prenom,
      email,
      password,
      matricule,
      id_grade
    });
  }
}
