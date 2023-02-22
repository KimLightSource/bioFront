import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {lifelogPage} from './lifelog.page';

describe('lifelogPage', () => {
  let component: lifelogPage;
  let fixture: ComponentFixture<lifelogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [lifelogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(lifelogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
