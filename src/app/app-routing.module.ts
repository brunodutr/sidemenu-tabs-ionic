import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs/tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomePageModule"
          }
        ]
      },
      {
        path: "list",
        children: [
          {
            path: "",
            loadChildren: "./list/list.module#ListPageModule"
          }
        ]
      },
      {
        path: "tabs",
        children: [
          {
            path: "",
            loadChildren: "./tabs/tabs.module#TabsPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
