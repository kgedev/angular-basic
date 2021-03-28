import {FormComponent} from './form.component';
import {FormBuilder} from '@angular/forms';

describe('form', () => {
  let formComponent: FormComponent

  beforeEach(() => {
    formComponent = new FormComponent(new FormBuilder())
  })

  it('should create form with 2 controls', () => {
    expect(formComponent.form.contains('login')).toBeTruthy()
    expect(formComponent.form.contains('email')).toBeTruthy()
  });

  it('should mark login ad invalid if empty value', () => {
    const control = formComponent.form.get('login')
    control.setValue('')

    expect(control.valid).toBeFalsy()
  })
})
