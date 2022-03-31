import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {BindingSamplesComponent} from "./binding-samples/binding-samples.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PipeSamplesComponent} from "./pipe-samples/pipe-samples.component";
import {DirectiveSamplesComponent} from "./directive-samples/directive-samples.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'bindings', component: BindingSamplesComponent
    /*
    ,children: [
      { path: '', component: PipeSamplesComponent },
      { path: 'directive', component: DirectiveSamplesComponent },
    ]
    */
  },
  { path: '404', component: NotFoundComponent },
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
