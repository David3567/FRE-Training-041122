import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app.component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-list'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-list');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'todo-list app is running!'
    );
  });
});
