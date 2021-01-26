import React from 'react'
import cx from 'clsx'
import styles from './input.module.css'

function Input ({type, className, name, placeholder, id, defaultValue, disabled, readonly, onInput}) {
    return (
        <input 
            type={type}
            className={cx(styles['input'], className)}
            name={name}
            placeholder={placeholder}
            id={id}
            value={defaultValue}
            onInput={onInput}
            readOnly={readonly}
            disabled={disabled}
        />
    )
}
export {Input}