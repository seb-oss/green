import { Button } from '../form/button/button'
import AlertRibbon from './alert-ribbon'

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

export const Default = {
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

export const Info = Template.bind({})
Info.args = {
  type: '',
  header: 'Info heading.',
  footer: null,
  children: (
    <>
      AlertRibbon content placed inside a paragraph. Inline links,{' '}
      <a href="#">info</a>, will inherit color from alert to make sure contrast
      is applied.
    </>
  ),
  isCloseable: false,
  closeText: '',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  header: 'Success heading.',
  footer: null,
  children: (
    <>
      AlertRibbon content placed inside a paragraph. Inline links,{' '}
      <a href="#">success</a>, will inherit color from alert to make sure
      contrast is applied.
    </>
  ),
  isCloseable: false,
  closeText: '',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  header: 'Warning heading.',
  footer: null,
  children: (
    <>
      AlertRibbon content placed inside a paragraph. Inline links,{' '}
      <a href="#">warning</a>, will inherit color from alert to make sure
      contrast is applied, like this .
    </>
  ),
  isCloseable: false,
  closeText: '',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  header: 'Danger heading.',
  footer: null,
  children: (
    <>
      AlertRibbon content placed inside a paragraph. Inline links,{' '}
      <a href="#">danger</a>, will inherit color from alert to make sure
      contrast is applied, like this .
    </>
  ),
  isCloseable: false,
  closeText: '',
}

export const InfoWithCloseButton = Template.bind({})
InfoWithCloseButton.args = {
  type: '',
  header: 'Info',
  footer: null,
  children: (
    <>
      This is an alert type <a href="#">info with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const SuccessWithCloseButton = Template.bind({})
SuccessWithCloseButton.args = {
  type: 'success',
  header: 'Success',
  footer: null,
  children: (
    <>
      This is an alert type <a href="#">success with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const WarningWithCloseButton = Template.bind({})
WarningWithCloseButton.args = {
  type: 'warning',
  header: 'Warning',
  footer: null,
  children: (
    <>
      This is an alert type <a href="#">warning with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const DangerWithCloseButton = Template.bind({})
DangerWithCloseButton.args = {
  type: 'danger',
  header: 'Danger',
  footer: null,
  children: (
    <>
      This is an alert type <a href="#">danger with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const InfoWithFooterButtons = Template.bind({})
InfoWithFooterButtons.args = {
  type: '',
  header: 'Info',
  footer: <FooterInfo />,
  children: (
    <>
      This is an alert type <a href="#">info with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const SuccessWithFooterButtons = Template.bind({})
SuccessWithFooterButtons.args = {
  type: 'success',
  header: 'Success',
  footer: <FooterSuccess />,
  children: (
    <>
      This is an alert type <a href="#">success with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const WarningWithFooterButtons = Template.bind({})
WarningWithFooterButtons.args = {
  type: 'warning',
  header: 'Warning',
  footer: <FooterWarning />,
  children: (
    <>
      This is an alert type <a href="#">warning with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}

export const DangerWithFooterButtons = Template.bind({})
DangerWithFooterButtons.args = {
  type: 'danger',
  header: 'Danger',
  footer: <FooterDanger />,
  children: (
    <>
      This is an alert type <a href="#">danger with a link</a>.
    </>
  ),
  isCloseable: true,
  closeText: '',
}
