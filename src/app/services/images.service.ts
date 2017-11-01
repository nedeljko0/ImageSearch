import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImagesService {
  private query: string;
  private limit: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=";

  constructor(private _http:Http) { }

  getImage(query, limit){
    return this._http.get(this.URL + query + '&per_page=' + limit)
    .map(res => res.json());
  }

}
