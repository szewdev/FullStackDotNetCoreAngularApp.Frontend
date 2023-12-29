import {Routes} from '@angular/router';
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

export const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductFormComponent},
  {path: 'products/:id/edit', component: ProductFormComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];
