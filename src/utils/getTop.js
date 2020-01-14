import React from 'react';

const getTop = (blockName, heading, text) => (
  <div className={`${blockName}__top`}>
    <h2>{heading}</h2>
    <p>{text}</p>
  </div>
);

export default getTop;
