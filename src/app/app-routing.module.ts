import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'checkout',component:CheckoutComponent},


  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
