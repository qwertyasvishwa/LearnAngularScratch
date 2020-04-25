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
  myArr = [24, 36, 4];

  myImage = 'http://vishwaraj.in/img/1.jpg';

  buttonStatus = false;
}
