import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title: 'Change Detection Angular'
  books = [
    { title: 'b1'},
    { title: 'b2'},
    { title: 'b3'}
  ];

  constructor() {
    setTimeout(() => {}, 3000);
  }

  ngDoCheck() {
    console.log("AppComponent is being checked!");
  }

  onClick() {
    this.books[0] = { title: "My new title" }
  }
}
