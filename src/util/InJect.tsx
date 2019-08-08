import React from 'react';

type propTypes = {
  Component: any;
  props?: any;
};

export default ({ Component, props } : propTypes)=><Component { ... props} />;

