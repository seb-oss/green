import"./img-DCyqtawL.js";import{a as c}from"./argTableProps-B5n4n9kr.js";import"./img.component-DmMj5Njz.js";import"./iframe-DyQnbBmV.js";import"./preload-helper-Dp1pzeXC.js";const f={title:"Components/Image",component:"gds-img",tags:["autodocs"],argTypes:{...c("gds-img")},parameters:{docs:{description:{component:"An image displays media with configurable dimensions and styling properties."}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{ratio:"16/9",fit:"cover",inset:"0",position:"relative",opacity:"1",src:"https://api.seb.io/components/image/img.jpg",alt:"Placeholder","border-radius":"s"}},s={...a},e={...a,args:{src:"https://api.seb.io/assets/img-1200.jpg",srcset:`
      https://api.seb.io/assets/img-320.jpg 320w,
      https://api.seb.io/assets/img-480.jpg 480w,
      https://api.seb.io/assets/img-800.jpg 800w,
      https://api.seb.io/assets/img-1200.jpg 1200w,
      https://api.seb.io/assets/img-2400.jpg 2x
    `,sizes:`
      (max-width: 320px) 280px,
      (max-width: 480px) 440px,
      (max-width: 800px) 760px,
      (max-width: 1200px) 1100px,
      100vw
    `,alt:"Responsive image example showing different sizes based on viewport","border-radius":"s"},parameters:{docs:{description:{story:`
### Responsive Image Example

This example demonstrates responsive image loading using \`srcset\` and \`sizes\`:

- **srcset**: Provides different image versions:
  - 320px wide version for small devices
  - 480px wide version for medium devices
  - 800px wide version for larger devices
  - 1200px wide version for desktop
  - 2x version for high-DPI displays

- **sizes**: Tells the browser which image size to use:
  - Under 320px viewport: Use 280px wide image
  - 320px-480px viewport: Use 440px wide image
  - 480px-800px viewport: Use 760px wide image
  - 800px-1200px viewport: Use 1100px wide image
  - Above 1200px: Use full viewport width

This ensures optimal image loading based on device size and screen resolution.

\`\`\`html
<!-- Basic usage -->
<gds-img
  src="https://api.seb.io/assets/1200.jpg"
  srcset="
    https://api.seb.io/assets/img-320.jpg 320w,
    https://api.seb.io/assets/img-480.jpg 480w,
    https://api.seb.io/assets/img-800.jpg 800w,
    https://api.seb.io/assets/img-1200.jpg 1200w,
    https://api.seb.io/assets/img-2400.jpg 2x
  "
  sizes="
    (max-width: 320px) 280px,
    (max-width: 480px) 440px,
    (max-width: 800px) 760px,
    (max-width: 1200px) 1100px,
    100vw
  "
  alt="Responsive image example"
  aspect-ratio="16/9"
  fit="cover"
></gds-img>
\`\`\`

        `}}}},i={...a,args:{src:"https://api.seb.io/assets/img-1200.jpg",srcset:`
      https://api.seb.io/assets/img-380.jpg 1x,
      https://api.seb.io/assets/img-800.jpg 2x,
      https://api.seb.io/assets/img-2400.jpg 3x
    `,alt:"High-DPI optimized image example","border-radius":"s"},parameters:{docs:{description:{story:`
### High-DPI Display Example

This example shows how to provide different image versions for various device pixel ratios:

- 1x for standard displays
- 2x for Retina displays
- 3x for Super Retina displays

The browser will automatically choose the best version based on the device's capabilities.
        `}}}};var p,t,o;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var r,n,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    src: 'https://api.seb.io/assets/img-1200.jpg',
    // Responsive image sources for different viewport sizes
    srcset: \`
      https://api.seb.io/assets/img-320.jpg 320w,
      https://api.seb.io/assets/img-480.jpg 480w,
      https://api.seb.io/assets/img-800.jpg 800w,
      https://api.seb.io/assets/img-1200.jpg 1200w,
      https://api.seb.io/assets/img-2400.jpg 2x
    \`,
    // Define which image size to use at different viewport widths
    sizes: \`
      (max-width: 320px) 280px,
      (max-width: 480px) 440px,
      (max-width: 800px) 760px,
      (max-width: 1200px) 1100px,
      100vw
    \`,
    alt: 'Responsive image example showing different sizes based on viewport',
    'border-radius': 's'
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Responsive Image Example

This example demonstrates responsive image loading using \\\`srcset\\\` and \\\`sizes\\\`:

- **srcset**: Provides different image versions:
  - 320px wide version for small devices
  - 480px wide version for medium devices
  - 800px wide version for larger devices
  - 1200px wide version for desktop
  - 2x version for high-DPI displays

- **sizes**: Tells the browser which image size to use:
  - Under 320px viewport: Use 280px wide image
  - 320px-480px viewport: Use 440px wide image
  - 480px-800px viewport: Use 760px wide image
  - 800px-1200px viewport: Use 1100px wide image
  - Above 1200px: Use full viewport width

This ensures optimal image loading based on device size and screen resolution.

\\\`\\\`\\\`html
<!-- Basic usage -->
<gds-img
  src="https://api.seb.io/assets/1200.jpg"
  srcset="
    https://api.seb.io/assets/img-320.jpg 320w,
    https://api.seb.io/assets/img-480.jpg 480w,
    https://api.seb.io/assets/img-800.jpg 800w,
    https://api.seb.io/assets/img-1200.jpg 1200w,
    https://api.seb.io/assets/img-2400.jpg 2x
  "
  sizes="
    (max-width: 320px) 280px,
    (max-width: 480px) 440px,
    (max-width: 800px) 760px,
    (max-width: 1200px) 1100px,
    100vw
  "
  alt="Responsive image example"
  aspect-ratio="16/9"
  fit="cover"
></gds-img>
\\\`\\\`\\\`

        \`
      }
    }
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var d,g,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    src: 'https://api.seb.io/assets/img-1200.jpg',
    // Device pixel ratio (DPR) specific sources
    srcset: \`
      https://api.seb.io/assets/img-380.jpg 1x,
      https://api.seb.io/assets/img-800.jpg 2x,
      https://api.seb.io/assets/img-2400.jpg 3x
    \`,
    alt: 'High-DPI optimized image example',
    'border-radius': 's'
  },
  parameters: {
    docs: {
      description: {
        story: \`
### High-DPI Display Example

This example shows how to provide different image versions for various device pixel ratios:

- 1x for standard displays
- 2x for Retina displays
- 3x for Super Retina displays

The browser will automatically choose the best version based on the device's capabilities.
        \`
      }
    }
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const u=["Basic","Responsive","HighDPI"];export{s as Basic,i as HighDPI,e as Responsive,u as __namedExportsOrder,f as default};
