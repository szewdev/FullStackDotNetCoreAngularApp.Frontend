import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  isComplete: boolean = false;
  isError: boolean = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        console.log(products);
        this.products = products;
        this.isError = false;
      },
      error: (e) => {
        console.error(e);
        this.isError = true;
        this.isComplete = true;
      },
      complete: () => {
        console.log("is completed");
        this.isComplete = true;
      },
    });
  }
}
