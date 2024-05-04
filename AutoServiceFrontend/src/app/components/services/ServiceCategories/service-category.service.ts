import { ServiceCategoryModel } from '../../models/models/ServiceModels/ServicesCategoryModels/ServiceCategoryModel';
import { DeleteServiceCategory } from '../../models/models/ServiceModels/ServicesCategoryModels/DeleteServiceCategory';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateServiceCategory } from '../../models/models/ServiceModels/ServicesCategoryModels/CreateServiceCategory';
import { ResponceModel } from '../../models/models/ResponceModels/responcemodel';
import { UpdateServiceCategory } from '../../models/models/ServiceModels/ServicesCategoryModels/UpdateServiceCategory';

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

  getAll(date: number, date2: number) {
    return this.http.get<ServiceCategoryModel[]>(
      `${this.apiUrl}ServiceCategory/GetAllServiceCategory?PageIndex=${date}&Size=${date2}`
    );
  }
}
