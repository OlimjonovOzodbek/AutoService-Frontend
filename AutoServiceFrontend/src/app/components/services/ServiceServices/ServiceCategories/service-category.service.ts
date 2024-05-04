
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateServiceCategory } from '../../../models/models/ServiceModels/ServicesCategoryModels/CreateServiceCategory';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateServiceCategory } from '../../../models/models/ServiceModels/ServicesCategoryModels/UpdateServiceCategory';
import { ServiceCategoryModel } from '../../../models/models/ServiceModels/ServicesCategoryModels/ServiceCategoryModel';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  create(date: CreateServiceCategory) {
    return this.http.post<ResponceModel>(
      `${this.apiUrl}ServiceCategory/CreateServiceCategory`,
      date
    );
  }

  delete(date: string) {
    return this.http.delete<ResponceModel>(
      `${this.apiUrl}ServiceCategory/DeleteServiceCategory?id=${date}`
    );
  }

  update(date: UpdateServiceCategory) {
    return this.http.put<ResponceModel>(
      `${this.apiUrl}ServiceCategory/UpdateServiceCategory`,
      date
    );
  }

  getAll(data: GetAll) {
    return this.http.get<ServiceCategoryModel[]>(
      `${this.apiUrl}ServiceCategory/GetAllServiceCategory?PageIndex=${data.PageIndex}&Size=${data.Size}`
    );
  }
}
