import { Injectable } from '@angular/core';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCompanyCategory } from '../../../models/models/CompanyModels/CompanyCategoryModel/UpdateCompanyCategory';
import { CreateCompanyCommand } from '../../../models/models/CompanyModels/CompanyModel/CreateCompanyCommand';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';

@Injectable({
  providedIn: 'root'
})
export class CompanyCategoryService {

  private apiUrl = environment.apiUrl + 'CompanyCategory/';

  constructor(private http: HttpClient) { }

  Create(data: CreateCompanyCommand){
    return this.http.post<ResponceModel>(this.apiUrl + `CreateCompanyCategory`, data)
  }

  Update(data: UpdateCompanyCategory){
    return this.http.post<ResponceModel>(this.apiUrl + 'UpdateCompanyCategory', data)
  }

  Delete(id: string){
    return this.http.delete<ResponceModel>(this.apiUrl + `DeleteCompanyCategory?ctgId=${id}`)
  }

  GetAll(data: GetAll){
    return this.http.get<[]>(this.apiUrl + `GetAllCompany?PageIndex=${data.PageIndex}Size=${data.Size}`)
  }
}

