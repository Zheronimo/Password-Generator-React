import React from 'react'
import cx from 'clsx'
import styles from './checkbox.module.css'

function Checkbox({name, id, className, defaultChecked, onChange}) {
    return (
        <input 
            type='checkbox'
            id={id}
            name={name} 
            className={cx(styles['chackbox'], className)} 
            checked={defaultChecked}
            onChange={onChange}
        />
    )
}

export {Checkbox}