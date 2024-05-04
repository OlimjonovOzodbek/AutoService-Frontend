import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateNewsComment } from '../../../models/models/NewsModels/NewsCommentModel/CreateNewsComment';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateNewsComment } from '../../../models/models/NewsModels/NewsCommentModel/UpdateNewsComment';
import { GetAll } from '../../../models/viewmodels/NewsQueries/getAllByNewsId';
import { NewsCommentModel } from '../../../models/models/NewsModels/NewsCommentModel/NewsCommentModel';

@Injectable({
  providedIn: 'root'
})
export class NewsCommentService {

  private apiUrl = environment.apiUrl + 'NewsComment/';

  constructor(private http: HttpClient) { }

  Create(data: CreateNewsComment){
    return this.http.post<ResponceModel>(this.apiUrl + `CreateNewsComment`, data)
  }

  Update(data: UpdateNewsComment){
    return this.http.post<ResponceModel>(this.apiUrl + 'UpdateNewsComment', data)
  }

  Delete(id: string){
    return this.http.delete<ResponceModel>(this.apiUrl + `DeleteNewsComment?commentId=${id}`)
  }

  GetAll(data: GetAll){
    return this.http.get<NewsCommentModel[]>(this.apiUrl + `GetAllNewsComment?PageIndex=${data.PageIndex}Size=${data.Size}NewsId=${data.NewsId}`)
  }
}
