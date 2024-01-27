import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Enterprise } from "../interfaces/Enterprise";
import { Observable } from "rxjs";

@Injectable()
export class EnterpriseService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}  

  getAll(): Observable<Enterprise[]> {
    const url = `${this.apiUrl}/enterprises/data`;
    return this.http.get<Enterprise[]>(url);
  }

  getById() {}

  getByName() {}

  getTotalsByEnterprise() {}

  getEnterprisesByCompany() {}
}
