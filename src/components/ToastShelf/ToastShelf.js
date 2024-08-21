import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastContext';
import styles from './ToastShelf.module.css';


function ToastShelf() {

  const { toastList } = React.useContext(ToastContext);

  return <ol className={styles.wrapper}>
    {toastList.map((toast, index) => <li key={`li-${toast.variant}-${index}`} className={styles.toastWrapper}>
      <Toast {...toast}></Toast>
    </li>)
    }
  </ol>

};


export default ToastShelf;
