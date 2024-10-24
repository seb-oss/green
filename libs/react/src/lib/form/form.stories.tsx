import AlertRibbon from '../alert-ribbon/alert-ribbon'
import {
  Button,
  ButtonGroup,
  Checkbox,
  EmailInput,
  Form,
  FormItems,
  NumberInput,
  RadioButton,
  RadioGroup,
  Text,
  TextInput,
} from './'

const Styles = () => (
  <style>
    {`
    form{
      padding: 1rem 2rem;
      background-color: white
    }
    .row .col-12 .form-group{
      width: 100%;
    }
    .row .col-6 .form-group{
      width: 100%;
    }
    .row .col-12 button{
      width: 100%
    }
    .row{
      margin-bottom: 1.2rem;
    }
    div[role='alert']{
      width: 100%
    }
  `}
  </style>
)

const Template = ({ children, ...props }) => (
  <Form {...props}>
    <Styles />
    <h1>Form example</h1>
    <div className="row">
      <div className="col-12">
        <AlertRibbon type="info" header="" isCloseable={false}>
          Alert content placed inside a paragraph. Inline link will inherit
          color from alert to make sure contrast is applied.
        </AlertRibbon>
      </div>
    </div>
    <h2>Inputs</h2>
    <div className="row mb-0">
      <div className="col-6 ">
        <FormItems
          name="text"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <TextInput id="namedField" label="Person name" />
        </FormItems>
      </div>
      <div className="col-6">
        <FormItems
          name="number"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <NumberInput label="Numeric field" min={-1} max={10} step={2} />
        </FormItems>
      </div>
      <div className="col-12">
        <FormItems
          name="email"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <EmailInput label="Email field" />
        </FormItems>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h2>Checkbox</h2>
        <FormItems
          name="checkbox"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <Checkbox label="Some checkbox" value="checkme" />
        </FormItems>
      </div>
      <div className="col-6">
        <h2 className="mb-3">Text</h2>
        <Text>Static text</Text>
      </div>
    </div>
    <div className="row mb-0">
      <div className="col-12 mb-5">
        <h2>Button Group</h2>
      </div>
      <div className="col-6">
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </div>
    </div>
    <div className="row mb-0">
      <div className="col-12 mb-5">
        <h2>Radio Group</h2>
      </div>
      <div className="col-6">
        <FormItems
          name="radiobtnGroup"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <RadioGroup label="Groups">
            <RadioButton label="Radio Button 1" value="button1" />
            <RadioButton label="Radio Button 2" value="button2" />
          </RadioGroup>
        </FormItems>
      </div>
    </div>
    <div className="row mb-0">
      <div className="col-12 mb-5">
        <h2>Buttons</h2>
      </div>
      <div className="col-12 mb-5">
        <Button type="reset">Reset</Button>
      </div>
      <div className="col-12 mb-5">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  </Form>
)

export default {
  title: 'Components/Form',
  component: Form,
}

export const Default = {
  render: Template.bind({}),
  name: 'Form',

  args: {
    onFormSubmit: (values) => {
      alert('You have submitted these values: ' + JSON.stringify(values))
    },
  },
}
