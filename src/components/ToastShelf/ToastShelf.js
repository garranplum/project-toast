import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastContext';
import styles from './ToastShelf.module.css';


function ToastShelf() {

  const { toastList } = React.useContext(ToastContext);

  return <ol className={styles.wrapper}>
    {toastList.map(({ variant, message, remover }, index) => <li key={`li-${variant}-${index}`} className={styles.toastWrapper}>
      <Toast variant={variant} remover={remover}>{message}</Toast>
    </li>)
    }
  </ol>

};


export default ToastShelf;
