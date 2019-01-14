import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from "./meu-primeiro/meu-primeiro.component";
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';

import {CursosModule} from "./cursos/cursos.module";
import { DataBindingComponent } from './data-binding/data-binding.component';

//D3
import { D3Service, D3_DIRECTIVES } from './d3';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';

//Cytoscape
import { InfrastructureComponent } from './cytoscape/infrastructure/infrastructure.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './cytoscape/routing/routing.module';
import { PadiCytoscape } from '../padicytoscape';
import { MatMenuModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBTSDialogComponent } from './cytoscape/add-btsdialog/add-btsdialog.component'
import { FormsModule } from '@angular/forms';
import { AddLinkDialogComponent } from './cytoscape/add-link-dialog/add-link-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    DataBindingComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    InfrastructureComponent,
    AddBTSDialogComponent,
    AddLinkDialogComponent

  ],
  entryComponents:[AddBTSDialogComponent,AddLinkDialogComponent],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    RouterModule,
    RoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [D3Service, PadiCytoscape],
  bootstrap: [AppComponent]
})
export class AppModule { }
