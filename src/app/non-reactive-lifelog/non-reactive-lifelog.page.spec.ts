import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {nonReactiveLifelogPage} from './non-reactive-lifelog.page';

describe('nonReactiveLifelogPage', () => {
  let component: nonReactiveLifelogPage;
  let fixture: ComponentFixture<nonReactiveLifelogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [nonReactiveLifelogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(nonReactiveLifelogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
