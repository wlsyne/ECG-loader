import * as React from 'react';
// import './Hello.less';

export interface HelloProps {
  /**
   * 字体颜色
   */
  color?: string;
}

export const Hello: React.FC<HelloProps> = ({ color = 'red', ...props }) => {
  return (
    <div style={{ color }} className="Hello">
      Hellow!
    </div>
  );
};
