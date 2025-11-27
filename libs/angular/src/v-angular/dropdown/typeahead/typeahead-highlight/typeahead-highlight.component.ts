import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
    selector: 'nggv-typeahead-highlight',
    templateUrl: './typeahead-highlight.component.html',
    styleUrls: ['./typeahead-highlight.component.scss'],
    standalone: false
})
export class NggvTypeaheadHighlightComponent implements OnChanges {
  /** The text that is displayed in the dropdown list */
  @Input() textContent?: string
  /** The substring that should be highlighted within textContent */
  @Input() textToHighlight?: string

  prefix?: string // Substring before the match
  match?: string // The match
  suffix?: string // Substring after the match

  text = ''
  input = ''

  /**
   * Regexp of characters that are allowed in textContent without being found in textToHighlight
   * Allow whitespaces.
   * */
  allowedNonMatchingChars = new RegExp(/\s/)

  ngOnChanges(changes: SimpleChanges) {
    const { textContent, textToHighlight } = changes
    if (textContent?.currentValue != null)
      this.text = `${textContent.currentValue}`
    if (textToHighlight?.currentValue != null)
      this.input = `${textToHighlight.currentValue}`
    this.updateValues()
  }

  private updateValues() {
    const splittedText = this.text.toLocaleLowerCase().split('')
    const splittedInput = this.input.toLocaleLowerCase().split('')

    const { start, end } = this.getHighlightedPart(splittedText, splittedInput)

    // If user input is not found within the textcontent, reset options and return.
    if (start === -1 || end === -1) {
      this.prefix = this.match = this.suffix = ''
      return
    }
    this.prefix = this.text.substring(0, start)
    this.match = this.text.substring(start, end)
    this.suffix = this.text.substring(end)
  }

  /**
   * Function that finds the start and end index of where the input is located within the text to display.
   * First occurence is returned. Allows for spaces to occur despite input not matching space.
   * Loops through each character in splittedText and when a char in splittedText equlas the first character of
   * splittedInput, evaluate wether it's match on the entire input.
   * - If it's => return indexes.
   * - If it's not => break out and check next char in outer loop.
   * @param splittedText the text content splitted in an array
   * @param splittedInput the input splitted in an array
   * @returns { start: number, end: number } Indexes of where the match starts and ends in the text displatyed
   */
  private getHighlightedPart(
    splittedText: string[],
    splittedInput: string[],
  ): { start: number; end: number } {
    let start = -1
    let end = -1

    for (let i = 0; i < splittedText.length; i++) {
      // If start and end have been set, break and return
      if (start > -1 || end > -1) break

      // If current char match first in input, try see if whole input match from that index
      if (splittedText[i] === splittedInput[0]) {
        let matches = 1
        for (let t = 1; t <= splittedText.length; t++) {
          // If match on last character of input, we're finished.
          if (matches === splittedInput.length) {
            start = i
            end = start + t
            break
          }
          if (splittedText[t + i] === splittedInput[matches]) matches++
          else if (this.allowedNonMatchingChars.test(splittedText[t + i]))
            continue // Ignore whitespace, continue
          else break // No match, break out of inner loop to check next char in text
        }
      }
    }
    return { start, end }
  }
}
