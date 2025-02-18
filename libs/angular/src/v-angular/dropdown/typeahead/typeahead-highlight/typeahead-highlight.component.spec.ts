import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NggvTypeaheadHighlightComponent } from './typeahead-highlight.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // TypeaheadHighlightComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TypeaheadHighlightComponent', () => {
    let component: NggvTypeaheadHighlightComponent
    let fixture: ComponentFixture<NggvTypeaheadHighlightComponent>

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [NggvTypeaheadHighlightComponent],
      })
      fixture = TestBed.createComponent(NggvTypeaheadHighlightComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })

    describe('updateValues', () => {
      it('splits and make text inputs lowercase', () => {
        const spy = jest.spyOn(component as any, 'getHighlightedPart')
        component.text = 'opTION'
        component.input = 'tIO'
        ;(component as any).updateValues()
        const expectedText = ['o', 'p', 't', 'i', 'o', 'n']
        const expectedInput = ['t', 'i', 'o']
        expect(spy).toHaveBeenCalledWith(expectedText, expectedInput)
      })

      it('resets option if no match is found', () => {
        jest
          .spyOn(component as any, 'getHighlightedPart')
          .mockReturnValue({ start: -1, end: -1 })
        component.text = 'opTION'
        component.input = 'tIO'

        component.prefix = 'dummy1'
        component.match = 'dummy2'
        component.suffix = 'dummy3'

        expect(component.prefix).toEqual('dummy1')
        expect(component.match).toEqual('dummy2')
        expect(component.suffix).toEqual('dummy3')
        ;(component as any).updateValues()

        expect(component.prefix).toEqual('')
        expect(component.prefix).toEqual('')
        expect(component.prefix).toEqual('')
      })

      it('updates variables when a match is found', () => {
        component.text = 'opTION'
        component.input = 'tIO'
        ;(component as any).updateValues()

        expect(component.prefix).toEqual('op')
        expect(component.match).toEqual('TIO')
        expect(component.suffix).toEqual('N')
      })
    })

    describe('getHighlightedPart', () => {
      it.each`
        text                | input       | expected
        ${'option'}         | ${'x'}      | ${{ start: -1, end: -1 }}
        ${'option'}         | ${'op'}     | ${{ start: 0, end: 2 }}
        ${'option'}         | ${'on'}     | ${{ start: 4, end: 6 }}
        ${'option'}         | ${'option'} | ${{ start: 0, end: 6 }}
        ${'OPTION'}         | ${'option'} | ${{ start: -1, end: -1 }}
        ${'option'}         | ${'OPTION'} | ${{ start: -1, end: -1 }}
        ${'kaka'}           | ${'ka'}     | ${{ start: 0, end: 2 }}
        ${'kakan'}          | ${'kan'}    | ${{ start: 2, end: 5 }}
        ${'kaffe och kaka'} | ${'eo'}     | ${{ start: 4, end: 7 }}
      `(
        'Without spaces: $text and $input produces: $expected',
        ({ text, input, expected }) => {
          const splittedText = text.split('')
          const splittedInput = input.split('')
          const res = (component as any).getHighlightedPart(
            splittedText,
            splittedInput,
          )
          expect(res).toEqual(expected)
        },
      )

      it.each`
        text                | input        | expected
        ${'kaffe och kaka'} | ${'eo'}      | ${{ start: 4, end: 7 }}
        ${'kaffe och kaka'} | ${'e o'}     | ${{ start: 4, end: 7 }}
        ${'kaffe och kaka'} | ${'e  o'}    | ${{ start: -1, end: -1 }}
        ${'kaffe och kaka'} | ${'e och k'} | ${{ start: 4, end: 11 }}
        ${'kaffe och kaka'} | ${'e ochk'}  | ${{ start: 4, end: 11 }}
        ${'kaffe och kaka'} | ${'eoch k'}  | ${{ start: 4, end: 11 }}
        ${'kaffe och kaka'} | ${'eochk'}   | ${{ start: 4, end: 11 }}
        ${'kaffe och kaka'} | ${'och'}     | ${{ start: 6, end: 9 }}
        ${'kaffe och kaka'} | ${' och'}    | ${{ start: 5, end: 9 }}
        ${'kaffe och kaka'} | ${'och '}    | ${{ start: 6, end: 10 }}
        ${'kaffe och kaka'} | ${' och '}   | ${{ start: 5, end: 10 }}
      `(
        'With spaces: $text and $input produces: $expected',
        ({ text, input, expected }) => {
          const splittedText = text.split('')
          const splittedInput = input.split('')
          const res = (component as any).getHighlightedPart(
            splittedText,
            splittedInput,
          )
          expect(res).toEqual(expected)
        },
      )
    })
  })
})
