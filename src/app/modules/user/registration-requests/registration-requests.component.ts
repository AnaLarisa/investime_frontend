import { Component } from '@angular/core';

export interface RegistrationRequest {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  requests: RegistrationRequest[] = [
    {
      first_name:"John",
      last_name:"Doe",
      email:"random@org.com",
      username:"MuhUsername",
    },
    {
      first_name:"John2",
      last_name:"Doe",
      email:"random@org.com",
      username:"MuhUsername",
    },
    {
      first_name:"John3",
      last_name:"Doe",
      email:"random@org.com",
      username:"MuhUsername",
    },
  ];

  acceptRequest(request: RegistrationRequest) {
    console.log(request);
  }

  rejectRequest(request: RegistrationRequest) {
    console.log(request);
  }
}