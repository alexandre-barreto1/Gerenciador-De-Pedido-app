import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesListComponent} from "./components/cliente/clientes-list/clientes-list.component";
import {ClienteUpdateComponent} from "./components/cliente/cliente-update/cliente-update.component";
import {ClienteCreateComponent} from "./components/cliente/cliente-create/cliente-create.component";
import {ProdutosListComponent} from "./components/produto/produtos-list/produtos-list.component";
import {ProdutoCreateComponent} from "./components/produto/produto-create/produto-create.component";
import {ProdutoUpdateComponent} from "./components/produto/produto-update/produto-update.component";
import {PedidosCreateComponent} from "./components/pedidos/pedidos-create/pedidos-create.component";
import {PedidosListComponent} from "./components/pedidos/pedidos-list/pedidos-list.component";


const routes: Routes = [
  {
    path: "clientes",
    component: ClientesListComponent,
  },
  {
    path: "produtos",
    component: ProdutosListComponent,
  },
  {
    path: "pedidos",
    component: PedidosListComponent,
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent,
  },
  {
    path: "produto/update/:id",
    component: ProdutoUpdateComponent,
  },
  {
    path: "cliente/update",
    component: ClienteUpdateComponent,
  },
  {
    path: "produto/update",
    component: ProdutoUpdateComponent,
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent,
  },
  {
    path: "produto/create",
    component: ProdutoCreateComponent,
  },
  {
    path: "pedido/create",
    component: PedidosCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
