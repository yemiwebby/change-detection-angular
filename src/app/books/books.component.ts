import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements DoCheck {

  @Input() books;

  ngDoCheck() {
    console.log("Books Component is being checked!");
  }

}
