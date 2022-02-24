import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})

export class MatirialModule { }