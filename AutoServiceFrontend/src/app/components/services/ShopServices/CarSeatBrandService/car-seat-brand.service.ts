import { UpdateCarCommand } from './../../../models/models/CarModels/UpdateCarModel';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateCarSeatBrand } from '../../../models/models/ShopModels/CarSeatBrandModels/CreateCarSeatBrand';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCarSeatBrand } from '../../../models/models/ShopModels/CarSeatBrandModels/UpdateCarSeatBrand';
import { DeleteCarSeatBrand } from '../../../models/models/ShopModels/CarSeatBrandModels/DeleteCarSeatBrand';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';
import { CarSeatBrandModel } from '../../../models/models/ShopModels/CarSeatBrandModels/CarSeatBrandModel';

@Injectable({
  providedIn: 'root',
})
export class CarSeatBrandService {
  private apiUrl = environment.apiUrl + 'CarSeatBrand/';
  constructor(private http: HttpClient) {}

  Create(date: CreateCarSeatBrand) {
    return this.http.post<ResponceModel>(
      this.apiUrl + `CreateServiceCategory`,
      date
    );
  }

  update(date: UpdateCarSeatBrand) {
    return this.http.put<ResponceModel>(
      this.apiUrl + `UpdateServiceCategory`,
      date
    );
  }

  delete(date: DeleteCarSeatBrand) {
    return this.http.delete<ResponceModel>(
      this.apiUrl + `DeleteServiceCategory?id=${date}`
    );
  }

  getAll(date: GetAll) {
    return this.http.get<CarSeatBrandModel[]>(
      this.apiUrl +
        `GetAllServiceCategory?PageIndex=${date.PageIndex}Size=${date.Size}`
    );
  }
}
