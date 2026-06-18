import{j as e}from"./jsx-runtime-u17CrQMm.js";import{e as t}from"./iframe-CwxfdUVf.js";function u({children:o,badgeType:s,isCloseable:i,closeText:l,customColor:a,customBackgroundColor:r,...d}){const[p,c]=t.useState(!1),[m,n]=t.useState("");return t.useEffect(()=>{s&&n(s),(a||r)&&n("")},[s,a,r]),p?null:e.jsxs("span",{...d,className:`gds-badge ${m}`,style:{color:a,backgroundColor:r},children:[e.jsx("strong",{children:o}),i&&e.jsxs("button",{type:"button",className:"close",onClick:()=>c(!0),children:[l,e.jsx("i",{})]})]})}u.__docgenInfo={description:`Renders a badge component.

@deprecated Please use the \`gds-badge\` web component from green-core instead

@param {React.ReactNode} props.children - The content of the badge.
@param {string} props.badgeType - The type of the badge.
@param {boolean} props.isCloseable - Indicates if the badge is closeable.
@param {string} props.closeText - The text for the close button.
@param {string} props.customColor - The custom color for the badge.
@param {string} props.customBackgroundColor - The custom background color for the badge.
@returns {React.ReactNode} The rendered badge component.`,methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},isCloseable:{required:!1,tsType:{name:"boolean"},description:""},closeText:{required:!1,tsType:{name:"string"},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},customBackgroundColor:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLProps"]};export{u as B};
