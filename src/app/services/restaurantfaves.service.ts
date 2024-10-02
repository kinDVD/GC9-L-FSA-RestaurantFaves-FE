import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {
  url: string = "https://localhost:7090/api/Orders";
  constructor(private http:HttpClient) { }

  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }

  addOrder(o: Order):Observable<Order>{
    return this.http.post<Order>(this.url, o);
  }

  deleteOrder(id: number):Observable<void>{
    return this.http.delete<void>(this.url + `/${id}`);
  }

  updateOrder(id: number):Observable<Order>{
    return this.http.put<Order>(this.url + `/${id}`, {});
  }


}
