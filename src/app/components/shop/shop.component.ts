import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";



@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [ProductListComponent, HeaderComponent, NavbarComponent]
})
export class ShopComponent {
    title = "Belanja di Fortuna Furniture"
    desc = "Penuhi kebutuhan rumahmu"
}
