// interface Props {
//   element: HTMLElement;
// }

// const CssVariableInspector = ({ element }: Props) => {
//   const [variables, setVariables] = useState<{ [key: string]: string }>({});

//   const inspectElement = () => {
//     const computedStyles = window.getComputedStyle(element);
//     const newVariables: { [key: string]: string } = {};

//     for (let i = 0; i < computedStyles.length; i++) {
//       const propertyName = computedStyles[i];
//       if (propertyName.startsWith('--')) {
//         const value = computedStyles.getPropertyValue(propertyName);
//         newVariables[propertyName] = value;
//       }
//     }

//     setVariables(newVariables);
//   };

//   const changeVariable = (variableName: string, newValue: string) => {
//     element.style.setProperty(variableName, newValue);
//   };

//   const handleClick = (e: MouseEvent) => {
//     try {
//       const rect = element.getBoundingClientRect();
//       const setStyleProps = document.documentElement.style;
//       const rippleEl = element.querySelector<HTMLDivElement>('div');
//       if (rippleEl) {
//         rippleEl.classList.remove('gds-ripple-effect');
//         setStyleProps.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`);
//         setStyleProps.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`);
//         setTimeout(() => {
//           rippleEl.classList.add('gds-ripple-effect');
//         }, 20);
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div>
//       <button onClick={inspectElement}>Inspect element</button>
//       {Object.entries(variables).map(([name, value]) => (
//         <div key={name}>
//           {name}: {value}
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => changeVariable(name, e.target.value)}
//           />
//         </div>
//       ))}
//       <div onClick={handleClick}>Click me for ripple effect</div>
//     </div>
//   );
// };

// export default CssVariableInspector;

// export function inspector(e: MouseEvent): void {
//     try {
    
//       console.log('esd');
//     } catch (e) {
//       console.error(e);
//     }
//   };

const inspector = (e: MouseEvent) => {
  if (e.altKey && (e.target as HTMLElement)?.tagName?.toLowerCase()?.startsWith('gds')) {
    // Do something with the element here
    console.log('Inspecting element:', e.target);


    onClick(e);

  }
};

document.addEventListener('mouseover', inspector);

  
  
  
  
const onClick = (e: MouseEvent) => {
  if (e.altKey && (e.target as HTMLElement)?.tagName?.toLowerCase()?.startsWith('gds')) {
    const element = e.target as HTMLElement;
    const computedStyles = window.getComputedStyle(element);
    const variables: { [key: string]: string } = {};

    for (let i = 0; i < computedStyles.length; i++) {
      const propertyName = computedStyles[i];
      if (propertyName.startsWith('--')) {
        const value = computedStyles.getPropertyValue(propertyName);
        variables[propertyName] = value;
      }
    }

    const inspectorDiv = document.createElement('div');
    inspectorDiv.style.position = 'fixed';
    inspectorDiv.style.top = '0';
    inspectorDiv.style.left = '0';
    inspectorDiv.style.width = '100%';
    inspectorDiv.style.height = '100%';
    inspectorDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    inspectorDiv.style.display = 'flex';
    inspectorDiv.style.justifyContent = 'center';
    inspectorDiv.style.alignItems = 'center';

    const contentDiv = document.createElement('div');
    contentDiv.style.backgroundColor = 'white';
    contentDiv.style.padding = '20px';
    contentDiv.style.borderRadius = '10px';

    Object.entries(variables).forEach(([name, value]) => {
      const variableDiv = document.createElement('div');
      variableDiv.innerText = `${name}: ${value}`;
      contentDiv.appendChild(variableDiv);
    });

    inspectorDiv.appendChild(element.cloneNode(true));
    document.body.appendChild(inspectorDiv);

    const closeInspector = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        inspectorDiv.remove();
        document.removeEventListener('keydown', closeInspector);
      }
    };

    document.addEventListener('keydown', closeInspector);

  }
};

document.addEventListener('click', onClick);
