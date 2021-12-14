import { Component, OnInit } from '@angular/core';


// export interface LoginElement {
//   email: string;
//   password: string;
// }

// const ELEMENT_DATA: LoginElement[] = [
//   {email: 'email1', password: 'pw1'},
//   {email: 'email2', password: 'pw2'}
// ];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }
  columnDefs = [
    {headerName: 'Id', field: 'id'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Password', field: 'password'},
    {headerName: 'Name', field: 'name'},
    {headerName: 'Gender', field: 'gender'},
    {headerName: 'Type', field: 'type'}
];

rowData = [
    {id: 2, email: 'Celica@gmail.com', password: '@rherrsdf1',name: 'Mark',gender:'M',type:'Admin'}
    
];

}
