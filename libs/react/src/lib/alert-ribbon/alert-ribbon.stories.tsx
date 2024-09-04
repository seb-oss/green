import AlertRibbon from './alert-ribbon'
import { Button } from '../form/button/button'

const Template = ({ children, ...props }) => (
  <AlertRibbon {...props}>{children}</AlertRibbon>
)

const Footer = () => (
  <>
    <Button>Stäng</Button>
  </>
)

const FooterInfo = () => (
  <>
    <Button>Info button</Button>
  </>
)

const FooterSuccess = () => (
  <>
    <Button>Success button</Button>
  </>
)

const FooterWarning = () => (
  <>
    <Button>Warning button</Button>
  </>
)

const FooterDanger = () => (
  <>
    <Button>Danger button</Button>
  </>
)

export default {
  title: 'Components/AlertRibbon',
  component: AlertRibbon,
}

export const AlertRibbon = {
  render: Template.bind({}),
  name: 'AlertRibbon',

  parameters: {
    componentIds: ['component-alertribbon'],
  },

  args: {
    type: '',
    header: 'Heading',
    footer: <Footer />,
    children:
      'Eftersom du vill låna med någon annan än din partner vill vi prata med dig. Du är välkommen att kontakta oss på 0771-365 365 eller boka ett rådgivningsmöte',
    isCloseable: false,
    closeText: '',
  },
}
