import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Grocery} from '../../grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  constructor(private http:HttpClient) { }

  GetGroceryInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/Groceries');
  }

  AddGroceryInformation(name:String,price:String,category:String,amount:String):Observable<any>{
    const grocery:Grocery = {name:name, price:price, category:category, amount:amount};
    return this.http.post('http://localhost:4000/api/Groceries', grocery)
  }

  DeleteGrocery(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/Groceries/'+id);
  }

  GetGrocery(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/Groceries/'+id);
  }

  UpdateGrocery(id:String,name:String, price:String, category:String, amount:String):Observable<any>{
    const grocery:Grocery = {name:name, price:price, category:category, amount:amount};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/Groceries/'+id, grocery);
  }



}