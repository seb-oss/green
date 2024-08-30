import React from 'react';
import './tooltip.scss'; 
import { TooltipProps } from './tooltipProps';
const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
