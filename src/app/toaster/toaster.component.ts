import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  addCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  addWishlist(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeWishlist(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  placeOrder(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeOrder(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  clearCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
}
