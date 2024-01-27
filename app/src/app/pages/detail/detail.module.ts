import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail.component';
import { ClientService } from 'src/app/services/client.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export const DetailRoutes: Routes = [
  {
    path: 'client/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: [DetailComponent],
  providers: [ClientService]
})
export class DetailModule {}
