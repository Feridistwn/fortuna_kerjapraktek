import { Component, Input, LOCALE_ID } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../shopping-cart.service';
import { AddToCartSuccessComponent } from "../../add-to-cart-success/add-to-cart-success.component";
import { CommonModule, NgIf, registerLocaleData } from '@angular/common';
import { RouterLink } from '@angular/router';

import localeId from '@angular/common/locales/id';

registerLocaleData(localeId, 'id');

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [CommonModule, AddToCartSuccessComponent, NgIf, RouterLink],
  providers: [{ provide: LOCALE_ID, useValue: "id-ID" },],
})
export class ProductComponent {
  @Input() product: Product | undefined;
  showSuccessMessage = false;


  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(): void {
    this.shoppingCartService.addToCart(this.product!, 1);

    this.shoppingCartService.updateCart();

    this.showSuccessMessage = true;

    console.log('added ' + this.product!.name);

    // Hide the success message after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}
