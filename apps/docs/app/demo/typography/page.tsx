import Content from "&/content/content"

import "./page.css"

export default function Typography() {
  return (
    <Content layout="content">
      <div className="typo">
        <div className="gds-fs-display-large">Display Large</div>
        <div className="gds-fs-display-medium">Display Medium</div>
        <div className="gds-fs-display-small">Display Small</div>

        <div className="gds-fs-headline-large">Headline Large</div>
        <div className="gds-fs-headline-medium">Headline Medium</div>
        <div className="gds-fs-headline-small">Headline Small</div>

        <div className="gds-fs-title-large">Title Large</div>
        <div className="gds-fs-title-medium">Title Medium</div>
        <div className="gds-fs-title-small">Title Small</div>

        <div className="gds-fs-body-large">Body Large</div>
        <div className="gds-fs-body-large-italic">Body Large Italic</div>
        <div className="gds-fs-body-medium">Body Medium</div>
        <div className="gds-fs-body-medium-italic">Body Medium Italic</div>
        <div className="gds-fs-body-small">Body Small</div>
        <div className="gds-fs-body-small-italic">Body Small Italic</div>

        <div className="gds-fs-label-large">Label Large</div>
        <div className="gds-fs-label-medium">Label Medium</div>
        <div className="gds-fs-label-small">Label Small</div>

        <div className="gds-fs-label-information-large">
          Label Information Large
        </div>
        <div className="gds-fs-label-information-medium">
          Label Information Medium
        </div>

        <div className="gds-fs-label-input-large">Label Input Large</div>
        <div className="gds-fs-label-input-medium">Label Input Medium</div>
        <div className="gds-fs-label-input-overline">Label Input Overline</div>
      </div>
    </Content>
  )
}
