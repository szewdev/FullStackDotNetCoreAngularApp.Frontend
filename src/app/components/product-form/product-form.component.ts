import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productId: number | undefined;
  productForm: FormGroup;

  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  isEditMode: boolean = false;
  isError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({ //TODO ksz define & use product-form.model.ts
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      description: []
    });
  }

  ngOnInit(): void {
    if (this.router.url.endsWith('edit')) {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));
      if (!this.productId) {
        this.router.navigate(['/products']).then(() => {
        });
        return;
      }

      this.isEditMode = true;

      this.getProductData();
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.productForm.invalid) {
      return;
    }
    if (this.isEditMode) {
      this.update();
    } else {
      this.create();
    }
  }

  private getProductData() {
    this.productService.getProduct(this.productId!).subscribe({
      next: (product: Product) => {
        console.log(product);
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          description: product.description
        })
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

  private create() {
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (data: Product) => {
        console.log(data);
        this.isSuccess = true;
        this.isError = false;
        this.router.navigate([`/products/${data.id}`]).then(() => {
        });
      },
      error: (error: any) => {
        console.error('Error adding product!', error);
        this.isSuccess = false;
        this.isError = true;
      }
    });
  }

  private update() {
    this.productService.updateProduct(this.productForm.value, this.productId).subscribe({
      next: (data: Product) => {
        console.log(data);
        this.isSuccess = true;
        this.isError = false;
        this.router.navigate([`/products/${this.productId}`]).then(() => {
        });
      },
      error: (error: any) => {
        console.error('Error updating product!', error);
        this.isSuccess = false;
        this.isError = true;
      }
    });
  }
}
