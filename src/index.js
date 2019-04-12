import React from 'react';
import { render } from 'react-dom';

import App from './App';

const MOUNT_NODE = document.getElementById('react-index-root');

const renderRoots = () => {
  render(
    <App />,
    MOUNT_NODE,
  );
};

renderRoots();