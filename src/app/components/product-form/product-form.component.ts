import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

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
  productForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      description: []
    });
  }

  ngOnInit(): void {
    //todo ksz edit product
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.success = true;
        setTimeout(() => {
            this.router.navigate(['/products']);
          },
          1500);
      },
      error: (error: any) => {
        console.error('Error adding product!', error);
        this.success = false;
      }
    });
  }
}
