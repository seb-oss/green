declare namespace JSX {
    interface GdsGridProps extends React.HTMLAttributes<HTMLElement> {
      columns?: string;
      class?: string;
      debug?: boolean;
      "gap-block"?: string;
      "gap-inline"?: string;
      padding?: string;
      fluid?: boolean;
      justify?: string;
      align?: string;
      mobile?: string;
      tablet?: string;
    }
  
    interface GdsCellProps extends React.HTMLAttributes<HTMLElement> {
      span?: string;
      padding?: string;
      cell?: string;
    }
  
    interface IntrinsicElements {
      "gds-grid": React.DetailedHTMLProps<GdsGridProps, HTMLElement>;
      "gds-cell": React.DetailedHTMLProps<GdsCellProps, HTMLElement>;
    }
  }