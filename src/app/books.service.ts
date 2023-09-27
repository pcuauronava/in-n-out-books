/**
 * Title: books.service.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/26/2023
 * Description: Books service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
//imported service to make API call


@Injectable({
  providedIn: 'root'
})
export class BooksService {
//this class needs to make an API call to get the books from the server.
//The service needs to be imported to use this feature.
  isbn: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];
  //this is the array of ISBNs that we will use to make the API call.

  constructor(private http: HttpClient) {
    //this is the constructor that injects the HttpClient service.
  }
  getBooks() {
    let params = new HttpParams();
    //this declares a new instance of HttpParams.
    params = params.append('bibkeys', `ISBN:${this.isbn.join(',')}`);
    //refresh the append method
    //this appends the ISBNs to the params object.
    //investigate the meaning of bibkeys https://www1.citavi.com/sub/manual4/pt/bibtex_keys.html#:~:text=A%20BibTeX%20key%20is%20a,with%20the%20correct%2C%20formatted%20citations.
    params = params.append('format', 'json');
    //this appends the format to the params object.
    params = params.append('jscmd', 'details');
    //this appends the jscmd to the params object.
    return this.http.get('https://openlibrary.org/api/books', { params: params });
    //this returns the API call. Some examples uses the .pipe() method to transform the data.
  }
}