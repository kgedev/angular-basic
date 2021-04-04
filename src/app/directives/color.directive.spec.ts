import {ColorDirective} from './color.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <div appColor="yellow">text 1</div>
    <div appColor>text 2</div>
  `
})
class HostComponent {}

describe('ColorDirective', () => {
  let fixture: ComponentFixture<HostComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent]
    })
    fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    const directive = new ColorDirective(null)
    expect(directive).toBeTruthy()
  })

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('div'))[0]
    let directive = de.injector.get(ColorDirective)
    expect(de.nativeElement.style.backgroundColor).toBe(directive.color)
  })

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('div'))[1]
    let directive = de.injector.get(ColorDirective)
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor)
  })
})
