import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommodityComponent } from './commodity/commodity.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: CommodityComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'productdetails', component: ProductdetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommodityComponent,
    FooterComponent,
    AddproductComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
