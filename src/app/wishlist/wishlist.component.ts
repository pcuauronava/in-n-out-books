/**
 * Title: wishlist.component.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/13/2023
 * Description: Wishlist component (Wishlist page)
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  items: Array<IWishlistItem> = [];
  constructor() { }
  ngOnInit(): void {
    
  }
  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updatesHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }
}
