/**
 * Title: book-list.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/27/2023
 * Description: Book list component (book-list.component.ts)
 */
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books: Array<IBook> = [];
  //define this

  // header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  // this was used to define the table headers
  book: IBook;
  // this uses the books service. define this

  constructor(private BooksService: BooksService, private dialog: MatDialog) {
    // suscribe the getbooks() function
    this.BooksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author){
              return author.name;
            })
          }
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
            // this is the data
        })
      }
   }
  })
}
  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    // this.book = this.BooksService.getBook(isbn);
    this.book = this.books.find(book => book.isbn === isbn);
    //this function will be used to open the dialog window

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    });
    console.log(this.book);  
      
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm'){
          this.book = null;
        }
      });
  }
}
