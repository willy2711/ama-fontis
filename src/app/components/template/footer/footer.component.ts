import { Location, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [NgOptimizedImage]
})
export class FooterComponent implements OnInit{

  data!: number;

  constructor(private location: Location){}

  ngOnInit(): void {
    this.data = new Date().getFullYear()
  }

  goToUrl(url: any){
    window.open(url, "_blank")
  }

}
