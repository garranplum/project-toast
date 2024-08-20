import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastContext';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {


  const { toastList, setToastList } = React.useContext(ToastContext);

  // State Hooks
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>

        <form onSubmit={(e) => {
          e.preventDefault()
          const id = crypto.randomUUID()
          const remover = (removeId) => {
            setToastList((prevToastList) => prevToastList.filter(({ id }) => id !== removeId))
          }
          setToastList([...toastList, { variant, message, id, remover: () => remover(id) }])
          setMessage("")
        }}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => { setMessage(e.target.value) }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >

              {VARIANT_OPTIONS.map(variantOption => {
                return (
                  <label key={`label-${variantOption}`} htmlFor={`variant-${variantOption}`}>
                    <input
                      key={variantOption}
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={variant === variantOption}
                      onChange={() => setVariant(variantOption)}
                    />
                    {variantOption}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Push Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
