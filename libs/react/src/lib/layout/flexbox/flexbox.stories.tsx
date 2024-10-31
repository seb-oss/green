import { Flexbox } from '../'
import { Card } from '../../card/card'

const Template = (props) => (
  <div className="custom-card-storybook">
    <Styles />
    <Flexbox {...props}>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
      <Card>5</Card>
    </Flexbox>
  </div>
)

const Styles = () => (
  <style>
    {`
    .custom-card-storybook .card{
      border: 3px solid #007ac7;
      margin: 1rem;
      min-width: 8rem;
    }
    .custom-card-storybook .card p {
      text-align:center;
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}
  </style>
)

export default {
  title: 'Components/Layout/Flexbox',
  component: Flexbox,
}

export const Default = {
  render: Template.bind({}),
  name: 'Flexbox',

  args: {
    justifyContent: 'between',
  },
}
