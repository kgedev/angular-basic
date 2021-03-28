import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent
  //beforeAll(() => {})
  //afterEach(() => {})
  //afterAll(() => {})
  beforeEach(() => {
    component = new CounterComponent()
  })

  it('should increment counter by 1', () => {
    component.increment()
    expect(component.counter).toBe(1)
  })

  xit('should decrement counter by 1', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })
})
