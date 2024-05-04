import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CreateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/CreateCarSeat';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/UpdateCarSeat';
import { DeleteCarSeat } from '../../../models/models/ShopModels/CarSeatModels/DeleteCarSeat';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';
import { CarSeatModel } from '../../../models/models/ShopModels/CarSeatModels/CarSeatModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarSeatServiceService {

  private apiUrl = environment.apiUrl + 'CarSeat/';
  constructor(private http: HttpClient) {}

  Create(date: CreateCarSeat) {
    return this.http.post<ResponceModel>(
      this.apiUrl + `CreateCarSeatBrand`,
      date
    );
  }

  update(date: UpdateCarSeat) {
    return this.http.put<ResponceModel>(
      this.apiUrl + `UpdateCarSeatBrand`,
      date
    );
  }

  delete(date: DeleteCarSeat) {
    return this.http.delete<ResponceModel>(
      this.apiUrl + `DeleteCarSeatBrand?id=${date}`
    );
  }

  getAll(date: GetAll) {
    return this.http.get<CarSeatModel[]>(
      this.apiUrl +
        `GetAllCarSeatBrand?PageIndex=${date.PageIndex}Size=${date.Size}`
    );
  }
}
