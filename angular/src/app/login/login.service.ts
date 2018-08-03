import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './login';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private getUserByUserName_url = 'http://localhost:8090/users/getUserByUsername&password';
  constructor(private http:HttpClient) {}
  public userdata ;
     getUserByUserName(Data:any):Observable<ILogin[]>{
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      console.log(JSON.stringify(Data));
      console.log(Data);
       return this.http.post<ILogin[]>(this.getUserByUserName_url,JSON.stringify(Data),{headers: headers});
    
       //userdata = this.http.post<ILogin[]>(this.getUserByUserName_url,JSON.stringify(Data),{headers: headers});
      
      

      //  return  this.http.post(this.getUserByUserName_url,JSON.stringify(Data),{headers: headers})
      //  .map((response : Response) => 
      //  {
      //    const data = response.json();
      //    return response;
      //   });
      
       // return  this.http.post(this.getUserByUserName_url,JSON.stringify(Data),{headers: headers})
        // .map((response) => {let data = response
        //   // .text() ? response.json() : [{}];
        //    if (data){
        //      this.userdata = data;
        //    // return userdata
        //     console.log(this.userdata); 
        //    }
        //    console.log(this.userdata)
        //    return this.userdata;
        // }
        //      );
      


    }

   
}
