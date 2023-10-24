import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers(){
return this.http.get("http://localhost:3000/users")
  }
  fetchUserById(id:any){
return this.http.get("http://localhost:3000/users/"+id)
  }
  removeUser(id:any){
   return this.http.delete("http://localhost:3000/users/"+id)
  }
}
