import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuService } from '../../services/menu.service';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabnavComponent } from './tabnav/tabnav.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { FooterComponent } from './footer/footer.component';

const Components = [
  HeaderComponent,
  SidenavComponent,
  TabnavComponent,
  BreadcrumbsComponent,
  FloatingButtonComponent,
  FooterComponent
]

@NgModule({
  declarations: Components,
  exports: Components,
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    MenuService
  ]
})

export class SharedModule { }
