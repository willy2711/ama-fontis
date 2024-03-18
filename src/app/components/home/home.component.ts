import { Component } from '@angular/core';
import { HeaderComponent } from '../template/header/header.component';
import { FooterComponent } from "../template/footer/footer.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [HeaderComponent, HeaderComponent, FooterComponent]
})
export class HomeComponent {

}
