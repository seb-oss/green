try{
(()=>{var Ue=__STORYBOOK_API__,{ActiveTabs:Je,Consumer:Qe,ManagerContext:Xe,Provider:Ve,addons:L,combineParameters:et,controlOrMetaKey:tt,controlOrMetaSymbol:rt,eventMatchesShortcut:at,eventToShortcut:nt,isMacLike:ot,isShortcutTaken:it,keyToSymbol:st,merge:pt,mockChannel:ft,optionOrAltSymbol:lt,shortcutMatchesShortcut:dt,shortcutToHumanString:ut,types:ct,useAddonState:gt,useArgTypes:mt,useArgs:bt,useChannel:ht,useGlobalTypes:yt,useGlobals:vt,useParameter:xt,useSharedState:Ct,useStoryPrepared:Ft,useStorybookApi:wt,useStorybookState:St}=__STORYBOOK_API__;var N=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Rt=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Et,logger:G,once:Mt,pretty:zt}=__STORYBOOK_CLIENT_LOGGER__;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function re(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},x(e,t)}function ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,x(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(e)}function ne(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Z=function(){return!!e})()}function oe(e,t,r){if(Z())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var n=new(e.bind.apply(e,a));return r&&x(n,r.prototype),n}function A(e){var t=typeof Map=="function"?new Map:void 0;return A=function(r){if(r===null||!ne(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return oe(r,arguments,z(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),x(a,r)},A(e)}var ie={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function se(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(s){a=a.replace(/%[a-z]/,s)}),a}var d=function(e){ae(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return a=e.call(this,se.apply(void 0,[ie[r]].concat(o)))||this,re(a)}return t}(A(Error));function _(e){return Math.round(e*255)}function pe(e,t,r){return _(e)+","+_(t)+","+_(r)}function C(e,t,r,a){if(a===void 0&&(a=pe),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,s=o*(1-Math.abs(n%2-1)),p=0,f=0,l=0;n>=0&&n<1?(p=o,f=s):n>=1&&n<2?(p=s,f=o):n>=2&&n<3?(f=o,l=s):n>=3&&n<4?(f=s,l=o):n>=4&&n<5?(p=s,l=o):n>=5&&n<6&&(p=o,l=s);var h=r-o/2,y=p+h,u=f+h,I=l+h;return a(y,u,I)}var Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function fe(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Y[t]?"#"+Y[t]:e}var le=/^#[a-fA-F0-9]{6}$/,de=/^#[a-fA-F0-9]{8}$/,ue=/^#[a-fA-F0-9]{3}$/,ce=/^#[a-fA-F0-9]{4}$/,j=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ge=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,me=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,be=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function O(e){if(typeof e!="string")throw new d(3);var t=fe(e);if(t.match(le))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(de)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ue))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ce)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=j.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=ge.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=me.exec(t);if(s){var p=parseInt(""+s[1],10),f=parseInt(""+s[2],10)/100,l=parseInt(""+s[3],10)/100,h="rgb("+C(p,f,l)+")",y=j.exec(h);if(!y)throw new d(4,t,h);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var u=be.exec(t.substring(0,50));if(u){var I=parseInt(""+u[1],10),ee=parseInt(""+u[2],10)/100,te=parseInt(""+u[3],10)/100,q="rgb("+C(I,ee,te)+")",w=j.exec(q);if(!w)throw new d(4,t,q);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new d(5)}function he(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),s=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var p,f=n-o,l=s>.5?f/(2-n-o):f/(n+o);switch(n){case t:p=(r-a)/f+(r<a?6:0);break;case r:p=(a-t)/f+2;break;default:p=(t-r)/f+4;break}return p*=60,e.alpha!==void 0?{hue:p,saturation:l,lightness:s,alpha:e.alpha}:{hue:p,saturation:l,lightness:s}}function U(e){return he(O(e))}var ye=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},H=ye;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}function R(e){return b(Math.round(e*255))}function ve(e,t,r){return H("#"+R(e)+R(t)+R(r))}function P(e,t,r){return C(e,t,r,ve)}function xe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return P(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return P(e.hue,e.saturation,e.lightness);throw new d(1)}function Ce(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?P(e,t,r):"rgba("+C(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?P(e.hue,e.saturation,e.lightness):"rgba("+C(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new d(2)}function D(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return H("#"+b(e)+b(t)+b(r));if(typeof e=="object"&&t===void 0&&r===void 0)return H("#"+b(e.red)+b(e.green)+b(e.blue));throw new d(6)}function F(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=O(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?D(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?D(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new d(7)}var Fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},we=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Se=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Pe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function J(e){if(typeof e!="object")throw new d(8);if(we(e))return F(e);if(Fe(e))return D(e);if(Pe(e))return Ce(e);if(Se(e))return xe(e);throw new d(8)}function Q(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):Q(e,t,a)}}function T(e){return Q(e,e.length,[])}function B(e,t,r){return Math.max(e,Math.min(t,r))}function ke(e,t){if(t==="transparent")return t;var r=U(t);return J(v({},r,{lightness:B(0,1,r.lightness-parseFloat(e))}))}var Oe=T(ke),Te=Oe;function Be(e,t){if(t==="transparent")return t;var r=U(t);return J(v({},r,{lightness:B(0,1,r.lightness+parseFloat(e))}))}var Ie=T(Be),_e=Ie;function je(e,t){if(t==="transparent")return t;var r=O(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:B(0,1,(a*100+parseFloat(e)*100)/100)});return F(n)}var Nt=T(je);function Re(e,t){if(t==="transparent")return t;var r=O(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:B(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}var Ee=T(Re),Me=Ee,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},K={app:"#F6F9FC",bar:i.lightest,content:i.lightest,preview:i.lightest,gridCellSize:10,hoverable:Me(.9,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},k={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},ze={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:i.lightest,appPreviewBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:k.fonts.base,fontCode:k.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.dark,barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:K.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},W=ze,Ae={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:i.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:k.fonts.base,fontCode:k.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},He=Ae,{window:E}=N;var De=e=>typeof e!="string"?(G.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,$e=e=>!/(gradient|var|calc)/.test(e),qe=(e,t)=>e==="darken"?F(`${Te(1,t)}`,.95):e==="lighten"?F(`${_e(1,t)}`,.95):t,X=e=>t=>{if(!De(t)||!$e(t))return t;try{return qe(e,t)}catch{return t}},Gt=X("lighten"),Yt=X("darken"),Le=()=>!E||!E.matchMedia?"light":E.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",S={light:W,dark:He,normal:W},M=Le(),$=(e={base:M},t)=>{let r={...S[M],...S[e.base]||{},...e,base:S[e.base]?e.base:M};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var V=$({base:"light",fontBase:'"SebSansSerif", sans-serif',fontCode:"monospace",brandTitle:"SEB Green",brandImage:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"%3E%3Cpath d="M20.7782 7.01563C17.0994 7.01563 13.8919 9.10906 12.2412 12.1898C11.952 10.2402 11.2182 8.38688 10.0988 6.77872C8.65043 4.68288 6.61292 3.08354 4.25483 2.19151L3.74698 2L3.46106 2.46887C2.59259 3.89465 2.09397 5.522 2.01204 7.19808C1.9301 8.87416 2.26752 10.5439 2.99262 12.0506C3.71772 13.5574 4.8067 14.8514 6.15727 15.8115C7.50784 16.7716 9.07568 17.3659 10.7135 17.5389C10.4236 18.9909 10.004 20.9646 10.004 20.9646C9.98976 21.0207 9.98838 21.0794 9.9998 21.1361C10.0113 21.1929 10.0354 21.2462 10.0701 21.292C10.1049 21.3378 10.1495 21.3749 10.2005 21.4004C10.2515 21.426 10.3076 21.4393 10.3644 21.4393H11.5454C11.6333 21.4394 11.7183 21.4078 11.7855 21.3501C11.8526 21.2923 11.8976 21.2122 11.9123 21.1239C11.9123 21.1239 12.0775 18.8341 12.1755 17.5851C17.3245 17.3424 21.4408 12.9971 21.4408 7.69088V7.01481L20.7782 7.01563ZM3.3266 7.69088C3.32579 6.28882 3.66378 4.90814 4.31072 3.67078C8.36867 5.45134 11.0578 9.57797 11.0578 14.114C11.0578 14.8139 10.9954 15.5123 10.8707 16.2008C8.8024 15.9863 6.88583 14.9972 5.49212 13.4251C4.09841 11.8529 3.32676 9.80962 3.3266 7.69088ZM12.4112 16.2181C12.7458 12.0601 16.0075 8.73511 20.0865 8.39584C19.7544 12.5522 16.4911 15.8772 12.4112 16.2181Z" fill="black"/%3E%3C/svg%3E',brandTarget:"_self",colorPrimary:"#353531",colorSecondary:"#9d9d95",appBg:"#ffffff",appContentBg:"#ffffff",appPreviewBg:"#ffffff",appBorderColor:"#cececa",appBorderRadius:4,textColor:"#353531",textInverseColor:"#ffffff",barTextColor:"#353531",barSelectedColor:"#585C6D",barBg:"#ffffff",inputBg:"#ffffff",inputBorder:"#cececa",inputTextColor:"#353531",inputBorderRadius:1});L.setConfig({theme:V});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
