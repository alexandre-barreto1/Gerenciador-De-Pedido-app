import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCreateComponent } from './pedidos-create.component';

describe('PedidosCreateComponent', () => {
  let component: PedidosCreateComponent;
  let fixture: ComponentFixture<PedidosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
