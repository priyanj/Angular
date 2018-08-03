import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DataTablesModule } from 'angular-datatables';
import { UsersRoutingModule } from './/users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTablesModule,
    HttpClientModule ],
  providers: [UsersService],
  declarations: [UsersComponent]
})
export class UsersModule { }
