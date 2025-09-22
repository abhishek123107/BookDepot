import { Routes } from '@angular/router';
import { ProfileComponent } from './customer/profile.component';
import { ServiceComponent } from './customer/service/service.component';
import { AboutComponent } from './customer/about/about.component';
import { HomeComponent } from './customer/home/home.component';
import { EducationalComponent } from './customer/educational/educational.component';
import { ShopingPageComponent } from './customer/shoping-page/shoping-page.component';
import { OrderPageComponent } from './customer/order-page/order-page.component';
import { SellingPageComponent } from './customer/payment-page/selling-page.component';
import { BankDetailComponent } from './customer/bank-detail/bank-detail.component';
import { PaymentCinfrmComponent } from './customer/payment-cinfrm/payment-cinfrm.component';
import { FictionComponent } from './customer/fiction/fiction.component';
import { NonFictionComponent } from './customer/non-fiction/non-fiction.component';
import { ChildrenComponent } from './customer/children/children.component';
import { ReligiousComponent } from './customer/religious/religious.component';
import { HobbiesComponent } from './customer/hobbies/hobbies.component';
import { ComptativeComponent } from './customer/comptative/comptative.component';
import { LoginComponent } from './customer/login/login.component';
import { RegistrationFormComponent } from './customer/login/registration-form/registration-form.component';
import { LibararyComponent } from './customer/libarary/libarary.component';
import { ForgatePasswordComponent } from './customer/forgate-password/forgate-password.component';
import { ResetPasswordComponent } from './customer/forgate-password/reset-password/reset-password.component';
import { ContactComponent } from './customer/contact/contact.component';


export const routes: Routes = [
  { path: 'customer/profile', component: ProfileComponent },
  { path: 'customer/service', component: ServiceComponent },
  { path: 'customer/about', component: AboutComponent },

  { path: '', redirectTo: 'customer/home', pathMatch: 'full' },
  { path: 'customer/home', component: HomeComponent },
  { path: 'customer/home/educational', component: EducationalComponent },
  { path: 'customer/home/educational/shoping', component: ShopingPageComponent },
  { path: 'customer/home/educational/shoping/order', component: OrderPageComponent },
  { path: 'customer/home/educational/shoping/order/payment', component: SellingPageComponent },
  { path: 'customer/home/educational/shoping/order/payment/bank-detail', component: BankDetailComponent },
  { path: 'customer/home/educational/shoping/order/payment/bank-detail/payment-confirmation', component: PaymentCinfrmComponent },

  { path: 'customer/home/fiction', component: FictionComponent },
  { path: 'customer/home/fictional/shoping', component: ShopingPageComponent },
  
  { path: 'customer/home/non-fiction', component: NonFictionComponent },
  { path: 'customer/home/non-fictional/shoping', component: ShopingPageComponent },

  { path: 'customer/home/children', component: ChildrenComponent },
  { path: 'customer/home/children/shoping', component: ShopingPageComponent },

  { path: 'customer/home/religious', component: ReligiousComponent },
  { path: 'customer/home/religious/shoping', component: ShopingPageComponent },
  { path: 'customer/home/religious/shoping/order', component: OrderPageComponent },

  { path: 'customer/home/hobbies', component: HobbiesComponent },
  { path: 'customer/home/hobbies/shoping', component: ShopingPageComponent },

  { path: 'customer/home/comptative', component: ComptativeComponent },
  { path: 'customer/home/comptative/shoping', component: ShopingPageComponent },

  { path: 'customer/login', component: LoginComponent },

  { path: 'customer/registrationForm', component: RegistrationFormComponent },

  { path: 'customer/order-page', component: OrderPageComponent },
  { path: 'customer/libarary', component: LibararyComponent },
  { path: 'customer/forgatePassword', component: ForgatePasswordComponent },
  { path: 'customer/forgatePassword/reset', component: ResetPasswordComponent },

  { path: '**', redirectTo: '/customer/home' },
  { path: 'customer/contact', component:ContactComponent }
];
