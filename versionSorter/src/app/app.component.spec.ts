import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'versionSorter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('versionSorter');
  });

  describe('isNumber()', () => {
    it('it should return true for a vaild number', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.isNumber('4')).toBeTruthy();
    })
    it('it should return true for a vaild number'), () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.isNumber('a')).toBeFalsy();
    }
  })

  describe('parseVersion()', () => {
    it ('should return null if too many parts', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;
      expect(app.parseVersion("4.4.4.4")).toBeNull();
    })
    it ('should return null if NaN', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;
      expect(app.parseVersion("a.4.4")).toBeNull();
    })
    it ('should return null if empty string', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;
      expect(app.parseVersion('')).toBeNull(); 
    })
  })

  describe ('compareVersion()', () => {
    it ('should return true if > and false if <', () => {
      const app = TestBed.createComponent(AppComponent).componentInstance;
      expect(app.compareVersion([2,1,1], [1,1,1])).toBeTruthy();
      expect(app.compareVersion([2,1,1], [1,2,1])).toBeTruthy();
      expect(app.compareVersion([2,2,1], [2,1,1])).toBeTruthy();
      expect(app.compareVersion([2,1,1], [2,1,1])).toBeTruthy();
      expect(app.compareVersion([1,2,2], [1,2,1])).toBeTruthy();
      expect(app.compareVersion([1,2,1], [1,2,2])).toBeFalsy();
      expect(app.compareVersion([2], [1,1,1])).toBeTruthy();
      expect(app.compareVersion([2], [2])).toBeTruthy();
      expect(app.compareVersion([2,1], [2])).toBeTruthy();
      expect(app.compareVersion([2], [2,1])).toBeFalsy();
    })
  })





});
