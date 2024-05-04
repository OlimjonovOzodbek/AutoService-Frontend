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

  private apiUrl = environment.apiUrl + 'Car/';

  constructor(private http: HttpClient) { }

  create(data: CreateCarCommand) {
    return this.http.post<ResponceModel>(`${this.apiUrl}CreateCar`, data);
  }

  update(data: UpdateCarCommand) {
    return this.http.put<ResponceModel>(`${this.apiUrl}UpdateCar`, data);
  }

  delete(data: string) {
    return this.http.delete<ResponceModel>(`${this.apiUrl}DeleteCar?id=${data}`);
  }

  getAllByUser(data: GetAll) {
    return this.http.get<CarModel[]>(`${this.apiUrl}GetAllCars?Pageindex=${data.PageIndex}&Size=${data.Size}UserId=${data.UserId}`);
  }

}
