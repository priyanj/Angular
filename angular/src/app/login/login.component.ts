import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import {ILogin} from './login';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public userdata;
    public userDetails : ILogin[];
    constructor(private loginService:LoginService) {}

    ngOnInit() {
    }

    async getUserData(userForm){
        this.loginService.getUserByUserName(userForm).map((response) => {let data = response;
                // .text() ? response.json() : [{}];
                 if (data){
                   this.userDetails = data;
                 // return userdata
                  console.log(this.userDetails); 
                 }
                });
                
       //return await this.loginService.getUserByUserName(userForm).subscribe((data) => {return this.userdata = data, console.log(this.userdata);});
       // return  this.userDetails;
    }

    onLoggedin(userForm) {
       
        var info : string = 'Invalid Name or password';
        var username : string;
        let password : String;
      
        
        return this.loginService.getUserByUserName(userForm).subscribe(data =>{ this.userDetails = data;
        console.log(this.userDetails);
        console.log(this.userDetails[0].password);
        if(this.userDetails)
        {
            password = this.userDetails[0].password;
            username = this.userDetails[0].username;
            console.log(password);
        
        if(password == this.userDetails[0].password)
        {
           console.log("You are successfully logedin" + this.userDetails[0].password);
            localStorage.setItem('isLoggedin', 'true');
        }
        else{
            //alert("Invalid Name or password");
        }
        }
        else{
            //alert("Invalid Name or password");
        }});
       // console.log("password is " ,this.userDetails[0].password);

    
        //console.log(this.userDetails.password);
        // this.loginService.getUserByUserName(userForm).map((response) => {let data = response
        //     // .text() ? response.json() : [{}];
        //      if (data){
        //        this.userDetails = data;
        //      // return userdata
        //       console.log(this.userDetails); 
        //      }
        //     // return this.userdata;
        //     //console.log(this.userDetails);
        //     username = this.userDetails.password;
        //      password = this.userDetails.username;
        //     console.log(this.userDetails.password);
        //     console.log(this.userDetails.username);
        //   } 
        //  // console.log(this.userDetails)
        // ).subscribe(data1 => this.userdata =  data1);

        //   console.log(this.userDetails);
        //   console.log(username);
        //   console.log(password);




       // console.log(this.userdata);
        // console.log(this.userDetails.username);
        // console.log(this.userDetails.password);
      
        // this.loginService.getUserByUserName(userForm).map((response) => {let data = response.text() ? response.json() : [{}];
    //    if (data){
    //     this.userDetails = data;
    //     console.log(this.userDetails); 
    //    }
    // } );
       // console.log(this.userDetails);
       
        //localStorage.setItem('isLoggedin', 'true');
        //console.log(this.userDetails.password);
        
    }
}
