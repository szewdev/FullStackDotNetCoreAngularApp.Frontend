import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (!productId) {
      this.router.navigate(['/products']).then(() => {
      });
      return;
    }

    this.getProductData(productId);
  }

  private getProductData(productId: number) {
    this.productService.getProduct(productId).subscribe({
      next: (product: Product) => {
        console.log(product);
        this.product = product;
      },
      error: (e) => {
        console.error(e);
        this.router.navigate(['/products']).then(() => {
        });
        return;
      },
      complete() {
        console.log("is completed");
      },
    });
  }
}


