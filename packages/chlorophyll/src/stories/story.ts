import { Story } from '@storybook/html'
import { TemplateDelegate } from 'handlebars'

export const story = <T>(template: TemplateDelegate, defaults: Partial<T> = {}): Story<T> => (
  (props: T): HTMLElement => {
    const html = template({...defaults, ...props})
    const element = document.createElement('div')
    element.innerHTML = html
    return element.firstChild as HTMLElement
  }
)
