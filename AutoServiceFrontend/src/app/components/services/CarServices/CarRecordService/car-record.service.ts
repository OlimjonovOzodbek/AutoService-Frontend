import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { CreateCarRecordCommand } from '../../../models/models/CarModels/CreateCarRecordCommand';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { DeleteCarRecordCommand } from '../../../models/models/CarModels/DeleteCarRecordCommand';
import { GetAll } from '../../../models/viewmodels/CarRecordQueries/getAllByCarId';
import { CarRecordModel } from '../../../models/models/CarModels/CarRecord';

@Injectable({
  providedIn: 'root'
})
export class CarRecordService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  Create(data: CreateCarRecordCommand){
    return this.http.post<ResponceModel>(this.baseUrl + `CreateCarRecord`, data)
  }

  Delete(id: number){
    return this.http.delete<ResponceModel>(this.baseUrl + `DeleteCarRecord?id=${id}`)
  }

  GetAllByCar(data: GetAll){
    return this.http.get<CarRecordModel>(this.baseUrl + `GetAllCarRecord?CarId=${data.CarId}`)
  }
}
