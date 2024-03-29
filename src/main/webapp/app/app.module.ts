import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BlogAppSharedModule } from 'app/shared/shared.module';
import { BlogAppCoreModule } from 'app/core/core.module';
import { BlogAppAppRoutingModule } from './app-routing.module';
import { BlogAppHomeModule } from './home/home.module';
import { BlogAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BlogAppSharedModule,
    BlogAppCoreModule,
    BlogAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BlogAppEntityModule,
    BlogAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class BlogAppAppModule {}
