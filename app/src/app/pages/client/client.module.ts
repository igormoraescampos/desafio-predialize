import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [ClientService]
})
export class ClientModule {}
