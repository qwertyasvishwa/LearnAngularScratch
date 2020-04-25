import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn Angular';
  body = "Hello World"
  myObject = {
    gender : 'male',
    age: 33,
    location : "India"
  }
}
