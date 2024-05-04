import { UpdtateService } from '../../../models/models/ServiceModels/ServiceModels/UpdtateService';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateService } from '../../../models/models/ServiceModels/ServiceModels/CreateService';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { ServiceModel } from '../../../models/models/ServiceModels/ServiceModels/ServiceModel';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  create(date: CreateService) {
    return this.http.post<ResponceModel>(
      `${this.apiUrl}Service/CreateService`,
      date
    );
  }

  update(date: UpdtateService) {
    return this.http.put<ResponceModel>(
      `${this.apiUrl}Service/UpdateService`,
      date
    );
  }

  delete(date: string) {
    return this.http.delete<ResponceModel>(
      `${this.apiUrl}Service/DeleteService?id=${date}`
    );
  }

  getAll(data: GetAll) {
    return this.http.get<ServiceModel[]>(
      `${this.apiUrl}Service/GetAllService?PageIndex=${data.PageIndex}&Size=${data.Size}`
    );
  }
}
