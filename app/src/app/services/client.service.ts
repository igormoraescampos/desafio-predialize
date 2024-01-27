import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Client } from "../interfaces/Client";
import { ClientDetail } from "../interfaces/Client-Detail";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getById(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  getGeneralTotals(): Observable<ClientDetail[]> {
    const url = `${this.apiUrl}/clients/data`;
    return this.http.get<ClientDetail[]>(url);
  }
  
  getByName() {}

  getTotalsByCompany() {}
}
