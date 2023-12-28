import { Routes } from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: ProductFormComponent},
  {path: 'edit-product/:id', component: ProductFormComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];
