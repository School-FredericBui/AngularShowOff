import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Création d'un service permettant de récupérer les données d'une API

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url);
  }
}
