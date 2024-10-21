import { Breadcrumb, BreadcrumbItem } from './breadcrumb'

const Template = () => (
  <div className="card">
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="">Cart</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="">Shopping</a>
      </BreadcrumbItem>
      <BreadcrumbItem>Billing</BreadcrumbItem>
    </Breadcrumb>
  </div>
)

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}

export const Default = {
  render: Template.bind({}),
  name: 'Breadcrumb',

  parameters: {
    componentIds: ['component-breadcrumb'],
  },
}
