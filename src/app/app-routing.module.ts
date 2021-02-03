import { NgModule } from '@angular/core';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from "./pages/search/search.component";
import { Routes,RouterModule } from "@angular/router";

const app_routes: Routes = [
    {path:'inicio', component:PortafolioComponent},
    {path:'about',component:AboutComponent},
    {path:'producto/:id',component:ItemComponent},
    {path:'search/:termino',component:SearchComponent},
    {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}