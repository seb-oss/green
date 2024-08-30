import React from 'react';
import Tooltip from '../tooltip';
import { TooltipButtonProps } from './tooltipButtonProps';

const TooltipButton: React.FC<TooltipButtonProps> = ({ tooltip, className, children }) => {
  return tooltip ? (
    <Tooltip text={tooltip}>
      <button className={className}>{children}</button>
    </Tooltip>
  ) : (
    <button className={className}>{children}</button>
  );
};

export default TooltipButton;
