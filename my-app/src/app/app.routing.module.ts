import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewHomeComponent } from "./components/templates/view-home/view-home.component";
import { ViewLoginComponent } from "./components/templates/view-login/view-login.component";

const routes: Routes =[
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:ViewHomeComponent},
    {path:'login', component:ViewLoginComponent},
    
    

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
