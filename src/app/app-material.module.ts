import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    Material.MatToolbarModule,
    Material.MatCardModule,
    Material.MatDividerModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatButtonModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatCardModule,
    Material.MatDividerModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatButtonModule
  ]
})
export class AppMaterialModule { }
