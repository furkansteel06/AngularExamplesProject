import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "placeholders", // Lazy loading: sadece ihtiyaç halinde component yüklenir.
    loadChildren: () =>
      import("./place-holders/place-holders.module").then(
        (m) => m.PlaceHoldersModule
      ),
  },
  {
    path: "tables", // Lazy loading: sadece ihtiyaç halinde component yüklenir.
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
  },
  {
    path: "lists", // Lazy loading: sadece ihtiyaç halinde component yüklenir.
    loadChildren: () =>
      import("./lists/lists.module").then((m) => m.ListsModule),
  },
  {
    path: "popups", // Lazy loading: sadece ihtiyaç halinde component yüklenir.
    loadChildren: () =>
      import("./popups/popups.module").then((m) => m.PopupsModule),
  },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }, // "**" bulunmayan tüm path'lerde yönlendirilir.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
