import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateSelectArg} from "@fullcalendar/core";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent {


  readonly options = [
    "Luca",
    "Matei"
  ]
  private user = {
    first_name: "Mehrab",
    last_name: "Bozorgi",
    email: "Mehrabbozorgi.business@gmail.com",
    address: "Too long to write it lul",
    phone: "+42000000",
    username: "Username",
    city: "Mehrab",
    manager_username: "Luca",
  };
  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {}

  readonly form = this._formBuilder.group({
    // @ts-ignore
    first_name: [this.user.first_name, Validators.required],
    // @ts-ignore
    last_name: [this.user.last_name, Validators.required],
    // @ts-ignore
    email: [this.user.email, Validators.required],
    // @ts-ignore
    address: [this.user.address, Validators.required],
    // @ts-ignore
    phone: [this.user.phone, Validators.required],
    // @ts-ignore
    username: [this.user.username, Validators.required],
    // @ts-ignore
    city: [this.user.city, Validators.required],
    // @ts-ignore
    manager_username: ["", Validators.required],
  });
  save() {
    console.log(this.form.value)
  }
}