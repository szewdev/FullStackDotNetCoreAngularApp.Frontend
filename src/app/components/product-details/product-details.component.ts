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

  onDelete() {
    if (this.product) {
      this.productService.deleteProduct(this.product.id).subscribe({
        next: (data: any) => {
          this.product!.isActive = false;
        },
        error: (error: any) => {
          console.error('Error deleting product!', error);
        }
      });
    }
  }

  onRestore() {
    if (this.product) {
      this.productService.restoreProduct(this.product.id).subscribe({
        next: (data: any) => {
          this.product!.isActive = true;
        },
        error: (error: any) => {
          console.error('Error restoring product!', error);
        }
      });
    }
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


