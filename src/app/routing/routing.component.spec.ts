import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {Subject} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

class RouterStub {
  navigate(path: String[]) {}
}

class ActivatedRouteStub {
  private subject = new Subject<Params>()

  push (params: Params) {
    this.subject.next(params)
  }

  get params() {
    return this.subject.asObservable()
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to posts if go back', () =>  {
    let router = TestBed.inject(Router)
    let spy = spyOn(router, 'navigate')
    component.goBack()
    expect(spy).toHaveBeenCalledWith(['/posts'])
  });

  it('should navigate to 404 if id = 0', function() {
    let router = TestBed.inject(Router)
    let route: ActivatedRouteStub = TestBed.inject<ActivatedRouteStub>(ActivatedRoute as any)
    let spy = spyOn(router, 'navigate')

    route.push({id: '0'})

    expect(spy).toHaveBeenCalledWith(['/404'])
  });

  it('should have router-outlet directive', function() {
    let de = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(de).not.toBeNull()
  });

});
