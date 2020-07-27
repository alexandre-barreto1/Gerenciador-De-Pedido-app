import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClientesListComponent } from './components/cliente/clientes-list/clientes-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import {HttpClientModule} from "@angular/common/http";
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { ProdutosListComponent } from './components/produto/produtos-list/produtos-list.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { PedidosCreateComponent } from './components/pedidos/pedidos-create/pedidos-create.component';
import { PedidosListComponent } from './components/pedidos/pedidos-list/pedidos-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { PedidosUpdateComponent } from './components/pedidos/pedidos-update/pedidos-update.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ClienteFilter} from "./components/cliente/cliente-filter/cliente-filter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ClientesListComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
    ProdutosListComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    PedidosCreateComponent,
    PedidosListComponent,
    PedidosUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [ClienteFilter],
  bootstrap: [AppComponent]
})

export class AppModule { }
