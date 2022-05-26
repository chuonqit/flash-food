import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from 'src/app/layouts/customer/customer-layout/customer-layout.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberRegisterComponent } from './member-register/member-register.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'dang-nhap',
        component: MemberLoginComponent,
      },
      {
        path: 'dang-ky',
        component: MemberRegisterComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dang-nhap',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
