import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBannerComponent } from './homePageComponents/head-banner/head-banner.component';
import { AboutUsComponent } from './homePageComponents/about-us/about-us.component';
import { OurServicesComponent } from './homePageComponents/our-services/our-services.component';
import { OurTeamComponent } from './homePageComponents/our-team/our-team.component';
import { PhotoGallaryComponent } from './homePageComponents/photo-gallary/photo-gallary.component';
import { ContactUsComponent } from './homePageComponents/contact-us/contact-us.component';
import { MailUsComponent } from './homePageComponents/mail-us/mail-us.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBannerComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurTeamComponent,
    PhotoGallaryComponent,
    ContactUsComponent,
    MailUsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
