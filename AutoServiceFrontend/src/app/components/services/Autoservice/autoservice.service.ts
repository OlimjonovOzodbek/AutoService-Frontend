import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AutoServiceModel } from '../../models/models/AutoServiceModels/AutoService';
import { map } from 'rxjs/operators';
import { GetAll } from '../../models/viewmodels/getAllOnlyByPage';
import { ResponceModel } from '../../models/models/ResponceModels/responcemodel';
import { CreateAutoServiceCommand } from '../../models/models/AutoServiceModels/CreateAutoServiceCommand';

@Injectable({
  providedIn: 'root'
})
export class AutoserviceService {

  private apiUrl = environment.apiUrl; // Marked as private if not used outside

  constructor(private http: HttpClient) { }

  create(data: CreateAutoServiceCommand) {
    return this.http.post<ResponceModel>(`${this.apiUrl}AutoService/Create`, data);
  }

  delete(data: number) {
    return this.http.delete<ResponceModel>(`${this.apiUrl}AutoService/Delete?id=${data}`);
  }

  getAll(data: GetAll) {
    return this.http.get<AutoServiceModel>(`${this.apiUrl}AutoService/GetAllAutoService?Pageindex=${data.PageIndex}&Size=${data.Size}`);
  }
}
