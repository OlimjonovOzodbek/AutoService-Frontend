import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AutoServiceModel } from '../../models/models/AutoServiceModels/AutoService';
import { ResponceModel } from '../../models/models/ResponceModels/responcemodel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoserviceService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;

  Create(data: AutoServiceModel) {
    return this.http.post<ResponceModel>(`${this.apiUrl}AutoService/Create`, data);
  }

  Delete() {

  }
}
