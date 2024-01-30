import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [NavbarComponent, HeaderComponent]
})
export class AboutComponent {

    title = "Belanja di Fortuna Furniture"
    desc = "Penuhi kebutuhan rumahmu"
}
