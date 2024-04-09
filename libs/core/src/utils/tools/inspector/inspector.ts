// https://visbug.web.app/

const inspector = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (
    e.altKey &&
    (e.target as HTMLElement)?.tagName?.toLowerCase()?.startsWith('gds')
  ) {
    const cssVars = getAllCSSVariableNames();
    const vars = getElementCSSVariables(cssVars, target);
    const color = window.getComputedStyle(target, null).getPropertyValue('--gds-theme');
    console.log('%cHello, world!', 'color: ${color}; font-size: 20px;');
    console.log("computedStyles 111 ", vars);
    // console.log("computedStyles 111 ", window.getComputedStyle(target, null).getPropertyValue('--gds-theme'));
  }
}

document.addEventListener('mouseover', inspector)


function getAllCSSVariableNames(styleSheets: StyleSheetList = document.styleSheets): string[] {
  const cssVars: string[] = [];
  
  for (let i = 0; i < styleSheets.length; i++) {
    try {
      const cssRules = styleSheets[i].cssRules;
      for (let j = 0; j < cssRules.length; j++) {
        try {
          const rule = cssRules[j];
          if (rule.type === CSSRule.STYLE_RULE) {
            const style = (rule as CSSStyleRule).style;
            for (let k = 0; k < style.length; k++) {
              const name = style[k];
              if (name.startsWith("--") && cssVars.indexOf(name) === -1) {
                cssVars.push(name);
              }
            }
          }
        } catch (error) {
          console.log("error", error);
          
        }
      }
    } catch (error) {
      console.log("error", error);
      
    }
  }
  return cssVars;
}


function getElementCSSVariables(allCSSVars: string[], element: Element = document.body, pseudo?: string): Record<string, string> {
  const elStyles = window.getComputedStyle(element, pseudo);
  const cssVars: Record<string, string> = {};
  if (!element) {
    return {};
  }
  allCSSVars
  .filter((name) => name.startsWith('--gds'))
  .forEach((name) => {
    const value = elStyles.getPropertyValue(name);
    if (value) {
      cssVars[name] = value;
    }
  });
  return cssVars;
}


document.addEventListener("DOMContentLoaded", function () {
  const cssVars = getAllCSSVariableNames();
  // console.log("cssVars", cssVars);
  // console.log(":root", getElementCSSVariables(cssVars, document.documentElement));
  console.log("body", getElementCSSVariables(cssVars, document.body));
  // console.log("#test", getElementCSSVariables(cssVars, document.getElementsByTagName("gds-button") as unknown as HTMLElement ));
  // console.log("#test:after", getElementCSSVariables(cssVars, document.getElementById("test"), ":after"));
});


// Theme color 
document.addEventListener('DOMContentLoaded', () => {
  function addMetaTag(name: string, variableName: string): void {
    const meta = document.createElement('meta');
    const updateMetaTag = () => {
      const variableValue = getComputedStyle(document.documentElement).getPropertyValue(variableName);
      meta.setAttribute('content', variableValue);
    }
    updateMetaTag();
    const observer = new MutationObserver(updateMetaTag);
    observer.observe(document.documentElement, { attributes: true });
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  addMetaTag("theme-color", "--gds-theme");
});
