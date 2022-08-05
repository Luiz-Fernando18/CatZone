import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { gatos } from './catsobject';

@Injectable({
  providedIn: 'root'
})
export class CatAPIService {

  url: string = 'https://api.thecatapi.com/v1'
  httpOptions = {headers: new HttpHeaders({
    'x-api-key':'1754cb06-32e1-44f6-9b7f-f0ba227c627e'
  })}

  constructor(private cliente: HttpClient) { }

  getCat():Observable<gatos[]> {
    return this.cliente.get<gatos[]>(
      this.url + '/images/search?has_breeds=1&limit=50', this.httpOptions
    ).pipe(retry(1), 
    catchError(this.fail))
  }
  fail(error: HttpErrorResponse){
    console.log(error)
    return throwError(error)
  }
  favAdd(catFavId: string):Observable<string>{
    return this.cliente.post<string>(this.url+`/favourites`, {image_id: catFavId, sub_id: 'Alan'},this.httpOptions)
  }

  pullFavCats():Observable<gatos[]>{
    return this.cliente.get<gatos[]>(
      this.url + '/favourites?sub_id=Alan', this.httpOptions
    )
  }

  delFav(idDel: number):Observable<void>{
    return this.cliente.delete<void>(
      this.url + `/favourites/${idDel}`,this.httpOptions
    )
  }
  }
