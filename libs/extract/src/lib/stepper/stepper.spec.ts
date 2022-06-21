import { createStepper, AbstractStepper, StepperData } from './stepper'

describe('stepper', () => {
  let stepper: AbstractStepper
  let data: StepperData


  const setData = (_data: StepperData) => { data = _data }

  it('instantiates and sets data', () => {
    stepper = createStepper({ }, setData)

    expect(stepper).toBeTruthy()
    expect(data).toBeTruthy()
  })
  it('sets id', () => {
    stepper = createStepper({ }, setData)
    expect(data.id).toBeTruthy()
  })
  it('sets step to 1', () => {
    stepper = createStepper({ }, setData)
    expect(data.step).toEqual(1)
  })
  it('respects args', () => {
    stepper = createStepper({
      id: 'foo',
      max: 100,
      min: 20,
      step: 10,
      value: 50,
    }, setData)
    expect(data).toEqual({
      id: 'foo',
      max: 100,
      min: 20,
      step: 10,
      value: 50,
    })
  })
  describe('change', () => {
    beforeEach(() => {
      stepper = createStepper({}, setData)
    })
    describe('up', () => {
      it('sets value to 1 from undefined', () => {
        stepper.up()
        expect(data.value).toEqual(1)
      })
      it('sets value to 2 from 1', () => {
        stepper.up()
        stepper.up()
        expect(data.value).toEqual(2)
      })
      it('sets value to 10 from undefined for up(10)', () => {
        stepper.up(10)
        expect(data.value).toEqual(10)
      })
      it('sets value to 20 from 10 for up(10)', () => {
        stepper.up(10)
        stepper.up(10)
        expect(data.value).toEqual(20)
      })
    })
    describe('down', () => {
      it('sets value to -1 from undefined', () => {
        stepper.down()
        expect(data.value).toEqual(-1)
      })
      it('sets value to 2 from 1', () => {
        stepper.down()
        stepper.down()
        expect(data.value).toEqual(-2)
      })
      it('sets value to 10 from undefined for down(10)', () => {
        stepper.down(10)
        expect(data.value).toEqual(-10)
      })
      it('sets value to 20 from 10 for down(10)', () => {
        stepper.down(10)
        stepper.down(10)
        expect(data.value).toEqual(-20)
      })
    })
    describe('setValue', () => {
      it('sets value', () => {
        stepper.setValue(20)
        expect(data.value).toEqual(20)
      })
    })
    describe('setStep', () => {
      it('affects up', () => {
        stepper.setStep(10)
        stepper.up()

        expect(data.value).toEqual(10)
      })
      it('ignores changes < 1', () => {
        stepper.setStep(-10)
        stepper.up()

        expect(data.value).toEqual(1)
      })
    })
    describe('setMin', () => {
      it('sets min', () => {
        stepper.setMin(0)

        expect(data.min).toEqual(0)
      })
      it('sets a lower bound on value for down()', () => {
        stepper.setMin(0)
        stepper.down(10)

        expect(data.value).toEqual(0)
      })
      it('sets a lower bound on value for setValue()', () => {
        stepper.setMin(0)
        stepper.setValue(-10)

        expect(data.value).toEqual(0)
      })
      it('removes min', () => {
        stepper.setMin(0)
        stepper.down(10)
        expect(data.value).toEqual(0)
        
        stepper.setMin()
        stepper.down(10)
        expect(data.value).toEqual(-10)
      })
    })
    describe('setMax', () => {
      it('sets min', () => {
        stepper.setMax(10)

        expect(data.max).toEqual(10)
      })
      it('sets a lower bound on value for up()', () => {
        stepper.setMax(10)
        stepper.up(20)

        expect(data.value).toEqual(10)
      })
      it('sets a lower bound on value for setValue()', () => {
        stepper.setMax(10)
        stepper.setValue(20)

        expect(data.value).toEqual(10)
      })
      it('removes min', () => {
        stepper.setMax(10)
        stepper.up(20)
        expect(data.value).toEqual(10)
        
        stepper.setMax()
        stepper.up(10)
        expect(data.value).toEqual(20)
      })
    })
  })
})
