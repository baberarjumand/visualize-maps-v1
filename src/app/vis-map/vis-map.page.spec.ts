import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisMapPage } from './vis-map.page';

describe('VisMapPage', () => {
  let component: VisMapPage;
  let fixture: ComponentFixture<VisMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
