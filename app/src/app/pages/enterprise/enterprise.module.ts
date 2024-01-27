import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  }
];

@NgModule({
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
  declarations: [EnterpriseComponent],
  providers: [EnterpriseService]
})
export class EnterpriseModule {}
