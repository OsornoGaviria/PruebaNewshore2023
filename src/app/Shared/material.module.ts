import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule
  ]
})

export class MaterialModule { }
