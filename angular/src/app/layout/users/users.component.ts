import { AfterViewInit ,Component, OnInit, Renderer  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsersService } from './users.service';
import { Subject } from 'rxjs';
// class Person {
//   username : String;
// }

// class DataTablesResponse {
//   data: any[];
//   draw: number;
//   recordsFiltered: number;
//   recordsTotal: number;
// }


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  //persons: Person[];

  AllData : any = [];
  constructor(private getData : UsersService) { 
   
  }


  // constructor(private renderer: Renderer, private router: Router,private http: HttpClient) { 
   
  // }

   ngOnInit(): void{

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true,
    //   columnDefs: [
    //     {
    //       "targets": [ 2 ],
    //       "visible": false,
    //       // "searchable": false
    //   }
    // ]
    };

  this.getData.CollectData().subscribe(result => 
    {
       this.AllData = result ;
       this.dtTrigger.next();
       console.log(this.AllData);
      });
      
     
   }
  }
  //: void {
  //   const that = this;

  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 2,
  //     serverSide: true,
  //     processing: true,
  //     ajax: (dataTablesParameters: any, callback) => {
  //       that.http
  //         .post<DataTablesResponse>(
  //           'http://localhost:8090/user/getuser',
  //           dataTablesParameters, {}
  //         ).subscribe(resp => {
  //           that.persons = resp.data;

  //           callback({
  //             recordsTotal: resp.recordsTotal,
  //             recordsFiltered: resp.recordsFiltered,
  //             data: []
  //           });
  //         });
  //     },
  //     columns: [{ data: 'username' }, { data: 'username' }, { data: 'username' }]
  //   };
  // }
  //   this.dtOptions = {
  //     "ajax": {
  //       "url": 'http://localhost:8090/user/getuser',
  //       "dataSrc": "users"
  //    },
  //     //ajax: 'http://localhost:8080/user/getuser',
  //     columns: [
  //       {
  //         title: 'Username',
  //         data: 'username'
  //       }
  //       ]
  //   };
  // }



