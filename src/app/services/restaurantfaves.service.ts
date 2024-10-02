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

  getAll(restaurant?:string, orderAgain?:boolean):Observable<Order[]>{
    if(restaurant != undefined && orderAgain != undefined)
      {
        return this.http.get<Order[]>(this.url + `?restaurant=${restaurant}&orderAgain=${orderAgain}`);
      }
    else if(restaurant == undefined && orderAgain != undefined)
      {
        return this.http.get<Order[]>(this.url + `?orderAgain=${orderAgain}`);
      }
    else if(restaurant != undefined && orderAgain == undefined)
      {
        return this.http.get<Order[]>(this.url + `?restaurant=${restaurant}`);
      }
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
