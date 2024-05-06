import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoserviceComponent } from './components/cruds/autoservice/autoservice.component';

const routes: Routes = [
  {path: 'autoservice', component: AutoserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
