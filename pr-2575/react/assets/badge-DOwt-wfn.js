import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as r}from"./iframe-DSc3PNLE.js";function g({children:n,badgeType:s,isCloseable:p,closeText:d,customColor:t,customBackgroundColor:o,...i}){const[c,l]=r.useState(!1),[m,a]=r.useState("");return r.useEffect(()=>{s&&a(s),(t||o)&&a("")},[s,t,o]),c?null:e.jsxs("span",{...i,className:`badge ${m}`,style:{color:t,backgroundColor:o},children:[e.jsx("strong",{children:n}),p&&e.jsxs("button",{type:"button",className:"close",onClick:()=>l(!0),children:[d,e.jsx("i",{})]})]})}g.__docgenInfo={description:`Renders a badge component.

@deprecated Please use the \`gds-badge\` web component from green-core instead

@param {React.ReactNode} props.children - The content of the badge.
@param {string} props.badgeType - The type of the badge.
@param {boolean} props.isCloseable - Indicates if the badge is closeable.
@param {string} props.closeText - The text for the close button.
@param {string} props.customColor - The custom color for the badge.
@param {string} props.customBackgroundColor - The custom background color for the badge.
@returns {React.ReactNode} The rendered badge component.`,methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},badgeType:{required:!1,tsType:{name:"BadgeType"},description:""},isCloseable:{required:!1,tsType:{name:"boolean"},description:""},closeText:{required:!1,tsType:{name:"string"},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},customBackgroundColor:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLProps"]};export{g as B};
