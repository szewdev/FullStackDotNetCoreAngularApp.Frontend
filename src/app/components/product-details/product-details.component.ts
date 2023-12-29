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
  productId: number | null = null;
  product: Product | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.productId) {
      this.router.navigate(['/products']);
      return;
    }

    this.productService.getProduct(this.productId).subscribe({
      next: (product: Product) => {
        console.log(product);
        this.product = product;
      },
      error: (e) => {
        console.error(e);
      },
      complete() {
        console.log("is completed");
      },
    });
  }
}


