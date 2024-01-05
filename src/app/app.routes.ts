import {Routes} from '@angular/router';
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

export const routes: Routes = [
  {path: 'products', component: ProductListComponent, title: 'List of Products'},
  {path: 'products/add', component: ProductFormComponent, title: 'Add new Product'},
  {path: 'products/:id/edit', component: ProductFormComponent, title: 'Edit Product'},
  {path: 'products/:id', component: ProductDetailsComponent, title: 'Product details'},
  {path: '', component: HomeComponent, pathMatch: 'full', title: 'Frontend App'}
];
