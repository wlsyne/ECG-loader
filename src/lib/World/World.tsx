import * as React from 'react';
import './World.less';

export interface WorldProps {
  /**
   * 字体颜色
   */
  color?: string;
}

export const World: React.FC<WorldProps> = ({ color = 'red', ...props }) => {
  return (
    <div style={{ color }} className="World">
      World
    </div>
  );
};

