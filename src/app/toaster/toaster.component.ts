import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
 

  constructor(private data : ToasterService) { }

  ngOnInit(): void {
  }

  addCart(message: string, action: string){
    this.data.addCart('One Item added to cart','close');
  }
  removeCart(message: string, action: string){
    this.data.removeCart('Product removed from cart','close');
  }
  addWishlist(message: string, action: string){
    this.data.addWishlist('Item added to your wishlist','close');

  }
  removeWishlist(message: string, action: string){
    this.data.removeWishlist('Item removed from your wishlist','close');
  }
  placeOrder(message: string, action: string){
    this.data.placeOrder('Order placed successfully','close');
  }
  removeOrder(message: string, action: string){
    this.data.removeOrder('Product removed from order','close');
  }
  clearCart(message: string, action: string){
    this.data.clearCart('Cart list Cleared','close');
  }
}
