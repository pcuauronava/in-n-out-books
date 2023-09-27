/**
 * Title: book.interface.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/06/2023
 * Description: Book interface
 */
export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}
