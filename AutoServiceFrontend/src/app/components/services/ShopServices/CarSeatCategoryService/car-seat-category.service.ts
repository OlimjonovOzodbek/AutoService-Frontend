import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/CreateCarSeat';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { CreateCarSeatCategory } from '../../../models/models/ShopModels/CraSeatCategoryModels/CreateCarSeatCategory';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';
import { CarSeatCategoryModel } from '../../../models/models/ShopModels/CraSeatCategoryModels/CarSeatCategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CarSeatCategoryService {

  private apiUrl = environment.apiUrl + 'CarSeat/';
  constructor(private http: HttpClient) {}

  Create(date: CreateCarSeatCategory) {
    return this.http.post<ResponceModel>(
      this.apiUrl + `CreateCarSeatBrand`,
      date
    );
  }

  getAll(date: GetAll) {
    return this.http.get<CarSeatCategoryModel[]>(
      this.apiUrl +
        `GetAllCarSeatBrand?PageIndex=${date.PageIndex}Size=${date.Size}`
    );
  }
  
}
