import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberRegisterComponent } from './member-register/member-register.component';

@NgModule({
  declarations: [MemberLoginComponent, MemberRegisterComponent],
  imports: [CommonModule, MemberRoutingModule],
})
export class MemberModule {}
