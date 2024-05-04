import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateCompanyCommand } from '../../../models/models/CompanyModels/CompanyModel/CreateCompanyCommand';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCompanyCommand } from '../../../models/models/CompanyModels/CompanyModel/UpdateCompanyCommand';
import { GetAll } from '../../../models/viewmodels/CompanyQueries/getAllByCategoryCompany';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = environment.apiUrl + 'Company/';

  constructor(private http: HttpClient) { }

  Create(data: CreateCompanyCommand){
    return this.http.post<ResponceModel>(this.apiUrl + `CreateCompany`, data)
  }

  Update(data: UpdateCompanyCommand){
    return this.http.post<ResponceModel>(this.apiUrl + 'UpdateCompany', data)
  }

  Delete(id: string){
    return this.http.delete<ResponceModel>(this.apiUrl + `DeleteCompany?Id=${id}`)
  }

  GetAll(data: GetAll){
    return this.http.get<[]>(this.apiUrl + `GetAllCompany?PageIndex=${data.PageIndex}Size=${data.Size}CategoryName=${data.CategoryName}`)
  }
}
