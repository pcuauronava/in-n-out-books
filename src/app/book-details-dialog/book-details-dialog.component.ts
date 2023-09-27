/**
 * Title: book-details-dialog.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/09/2021
 * Description: Book details dialog component (book-details-dialog.component.ts)
 */
import { IBook } from './../book.interface';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent {
  book: IBook;
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {book: IBook}) {
      this.book = data.book;
     }

     ngOnInit(): void {
     }
}
