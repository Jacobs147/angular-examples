import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToConsole(arg : any) {
    console.log(arg);
  }
}
