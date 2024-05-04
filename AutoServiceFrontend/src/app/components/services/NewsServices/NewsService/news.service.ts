import { Injectable } from '@angular/core';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';
import { CreateNewModelCommand } from '../../../models/models/NewsModels/NewsModel/CreateNewsModelCommand';
import { UpdateNewModelCommand } from '../../../models/models/NewsModels/NewsModel/UpdateNewsModelCommand';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = environment.apiUrl + 'News/';

  constructor(private http: HttpClient) { }

  Create(data: CreateNewModelCommand){
    return this.http.post<ResponceModel>(this.apiUrl + `CreateNews`, data)
  }

  Update(data: UpdateNewModelCommand){
    return this.http.post<ResponceModel>(this.apiUrl + 'UpdateNews', data)
  }

  Delete(id: string){
    return this.http.delete<ResponceModel>(this.apiUrl + `DeleteNews?newsId=${id}`)
  }

  GetAll(data: GetAll){
    return this.http.get<[]>(this.apiUrl + `GetAllNews?PageIndex=${data.PageIndex}Size=${data.Size}`)
  }
}
