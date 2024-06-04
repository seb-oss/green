import { render, screen } from '@testing-library/react'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'

describe('Breadcrumb', () => {
  it('Should render', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>Item 1</BreadcrumbItem>
        <BreadcrumbItem>Item 2</BreadcrumbItem>
        <BreadcrumbItem>Item 3</BreadcrumbItem>
      </Breadcrumb>,
    )
    expect(screen.getAllByText(/Item/)).toHaveLength(3)
  })
})
