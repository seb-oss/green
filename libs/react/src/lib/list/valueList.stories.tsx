import ValueList from './valueList'

const meta: Meta = {
  title: 'Components/Lists/ValueList',
  component: ValueList,
}

export default meta

export const Primary = {
  render: (props) => (
    <ValueList.List {...props}>
      <ValueList.Label>Ni vill sälja</ValueList.Label>
      <ValueList.Value>Fritidshus</ValueList.Value>
      <ValueList.Label>Lån på bostaden</ValueList.Label>
      <ValueList.Value>1 000 000 kr</ValueList.Value>
      <ValueList.Label>Ni köpte bostaden för</ValueList.Label>
      <ValueList.Value>5 000 000 kr</ValueList.Value>
      <ValueList.Label>Lägsta försäljningsbelopp</ValueList.Label>
      <ValueList.Value>2 500 000 kr</ValueList.Value>
      <ValueList.Label>Mäklararvode</ValueList.Label>
      <ValueList.Value>50 000 kr</ValueList.Value>
      <ValueList.Label>Kontantinsats från överskottet</ValueList.Label>
      <ValueList.Value>375 000 kr</ValueList.Value>
    </ValueList.List>
  ),
}
