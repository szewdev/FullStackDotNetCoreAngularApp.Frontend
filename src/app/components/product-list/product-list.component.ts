import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    standalone: true,
    imports: [
        NgForOf
    ],
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: (products: Product[]) => {
                console.log(products);
                this.products = products;
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
