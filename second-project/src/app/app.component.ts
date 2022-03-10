import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user : User;
  inputText : string = "initial value";

  constructor() {
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.title = 'Software Deveoloper';
    this.user.address = '1234 Main St, City, State, 10010';
    this.user.phone = [
      '123-123-1234',
      '456-456-4567'
    ];
  }
}
