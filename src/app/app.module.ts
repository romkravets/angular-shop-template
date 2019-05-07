import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ImprintComponent } from './components/pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { MainComponent } from './components/pages/main/main.component';
import { DeliveryComponent } from './components/sections/main-sections/delivery/delivery.component';
import { ButtonComponent } from './components/sections/button/button.component';
import { WorkComponent } from './components/sections/main-sections/work/work.component';
import { CollageComponent } from './components/sections/main-sections/collage/collage.component';
import { PolicyComponent } from './components/sections/main-sections/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    JobsComponent,
    MainComponent,
    DeliveryComponent,
    ButtonComponent,
    WorkComponent,
    CollageComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
