import { Component, OnInit } from '@angular/core';
// Importation du service
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Variables permettant de stocker la data
  products: any;

  // Injection du service
  constructor(private request: ProductService) {}

  // Récupération de la data et stockage dans products
  ngOnInit() {
    this.request.getPosts().subscribe((response) => {
      this.products = response;
    });
  }
}
