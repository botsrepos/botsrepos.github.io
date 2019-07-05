import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataTableItem} from './data-table-item.model' ;
import {Observable} from 'rxjs';
import {Data} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DataTableService {
  url = 'https://63f4ba0c.ngrok.io/';
  data: DataTableItem[];

  constructor(private http: HttpClient) {}

  getData(): Observable<DataTableItem[]> {
    return this.http.get<DataTableItem[]>(this.url);
  }
}
