import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private svc: TestService, private http : HttpClient) {
    this.svc.printToConsole("Hello world")
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/jacobs147');
    obs.subscribe((response) => console.log(response));
  }
}
