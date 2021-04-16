import * as React from 'react';

import './index.less';

export interface ECGLoaderProps {
  renderMode?: 'canvas' | 'css' | 'svg';
  size?: 'small' | 'middle' | 'large';
  type?: 'line' | 'curve';
  wrapperClassName?: string;
}

export interface CssLoaderProps {}

const CssLoader: React.FC<CssLoaderProps> = () => {
  return (
    <div className="EGC-loading__wrapper--css">
      <span className="EGC-loading__line-1--css" />
      {/* <span className="EGC-loading__line-2--css" />
      <span className="EGC-loading__line-3--css" />
      <span className="EGC-loading__line-4--css" />
      <span className="EGC-loading__line-5--css" />
      <span className="EGC-loading__line-6--css" />
      <span className="EGC-loading__line-7--css" /> */}
    </div>
  );
};

const SVGLoader: React.FC = () => {
  return <div className="loader" />;
};

export const ECGLoader: React.FC<ECGLoaderProps> = ({
  renderMode = 'css',
  size = 'middle',
  type = 'line',
  wrapperClassName,
}) => {
  return (
    <div className={`${wrapperClassName}`}>
      {renderMode === 'css' && <CssLoader />}
      {renderMode === 'svg' && <SVGLoader />}
    </div>
  );
};
