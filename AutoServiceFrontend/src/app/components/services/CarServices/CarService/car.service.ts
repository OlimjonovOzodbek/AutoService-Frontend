import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CreateCarCommand } from '../../../models/models/CarModels/CreateCarCommand';
import { UpdateCarCommand } from '../../../models/models/CarModels/UpdateCarModel';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { GetAll } from '../../../models/viewmodels/CarQueries/getAllByUserId';
import { CarModel } from '../../../models/models/CarModels/CarModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(data: CreateCarCommand) {
    return this.http.post<ResponceModel>(`${this.apiUrl}AutoService/Create`, data);
  }

  update(data: UpdateCarCommand) {
    return 
  }

  delete(data: string) {
    return this.http.delete<ResponceModel>(`${this.apiUrl}AutoService/Delete?id=${data}`);
  }

  getAllByUser(data: GetAll) {
    return this.http.get<CarModel[]>(`${this.apiUrl}AutoService/GetAllAutoService?Pageindex=${data.PageIndex}&Size=${data.Size}UserId=${data.UserId}`);
  }

}
