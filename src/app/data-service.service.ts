import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { User } from './models/user.model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  private urlGetBrands = environment.apiUrl + '/brands';
  private urlGetProducts = environment.apiUrl + '/products';
  private urlGetProductById = environment.apiUrl + '/product';
  private urlGetAllOrders = environment.apiUrl + '/orders';
  private urlGetDashData = environment.apiUrl + '/statistic';

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getProducts();
  }

  getDashboardData() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(this.urlGetDashData, { headers });

  }

  getBrands() {
    return this.http.get(this.urlGetBrands);
  }

  getAllOrders() {

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(this.urlGetAllOrders, { headers });
  }

  getProducts() {
    return this.http.get(this.urlGetProducts);
  }

  getProductById(id: any) {
    const url = `${this.urlGetProductById}/${id}`;
    return this.http.get(url);
  }

  getRelatedProducts(id: number) {
    return this.http.get(`${this.urlGetProductById}/${id}/related`);
  }

}
