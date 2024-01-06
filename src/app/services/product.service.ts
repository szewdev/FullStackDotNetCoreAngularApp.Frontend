import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Product} from "../models/product.model";
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Service {

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(_ => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts'))
    );
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`).pipe(
      tap(_ => console.log('fetched product')),
      catchError(this.handleError<Product>('getProduct'))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap((newProduct: Product) => console.log(`added product w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  updateProduct(product: Product, id?: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  restoreProduct(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, null).pipe(
      tap(_ => console.log(`restored product id=${id}`)),
      catchError(this.handleError<any>('restoreProduct'))
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return throwError(() => error)
    };
  }
}
