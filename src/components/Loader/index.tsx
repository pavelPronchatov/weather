import React from 'react';

import st from './index.module.scss'

const Loader = () => {
  return (
    <div className={st['lds-dual-wrap']}>
      <div className={st['lds-dual-ring']}/>
    </div>
  );
};

export default Loader;