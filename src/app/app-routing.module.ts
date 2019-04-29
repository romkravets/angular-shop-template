import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImprintComponent } from './components/pages/imprint/imprint.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
