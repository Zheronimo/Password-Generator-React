import React from 'react'
import {Input} from '../../ui/input'
import {Select} from '../../ui/select'
import {Checkbox} from '../../ui/checkbox'
import {Button} from '../../ui/button'

import styles from './password-generator.module.css'


function PasswordGenerator () {
    let chars = '0123456789abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = '!@#$^&()\_+?><:{}[]'
    const passwordLengthValues = [12,13,14,15,16]
    

    const [result, setResult] = React.useState('')
    const [passwordLength, setPasswordLength] = React.useState(passwordLengthValues[0])
    const [isSymbolsUse, setIsSymbolsUse] = React.useState(false)
    const [isPasswordCopied, setIsPasswordCopied] = React.useState(false)

    function handlePasswordGeneration () {
        let currentResult = ''

        if (isSymbolsUse) {
            chars += symbols
        }

        for(let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            currentResult += chars.substring(randomNumber, randomNumber + 1) 
        }
        setResult(currentResult)
    }
    function handleBlur (event) {
        setPasswordLength(event.target.value)
    }
    function handleSymbolsUse() {
        setIsSymbolsUse(!isSymbolsUse)
    }
    function handlePasswordCopy() {
        if (result) {
            let timerId = null
            navigator.clipboard.writeText(result).then(() => {
                setIsPasswordCopied(true)
                timerId = setTimeout(()=>{
                    setIsPasswordCopied(false)
                    clearTimeout(timerId)
                },2000)
            })
        }
    }

    return (
        <div className={styles['root']}>
            <h1 className={styles['title']}>Генератор паролей</h1>
            <div className={styles['result']}>
                <Input type='text' readonly={true} defaultValue={result}/>
                <button className={styles['copy']} onClick={handlePasswordCopy}></button>
                {isPasswordCopied && <span className={styles['copied']}>Скопировано!</span>}
            </div>
            <div className={styles['option']}>
                <span className={styles['option-name']}>Длина пароля</span>
                <Select options={passwordLengthValues} onBlur={handleBlur}/>
            </div>
            <div className={styles['option']}>
                <label className={styles['option-label']} htmlFor="symbols">Использовать спецсимволы</label>
                <Checkbox id='symbols' onChange={handleSymbolsUse}/>
            </div>
            <Button type='button' onClick={handlePasswordGeneration}> Сгенерировать пароль </Button>
        </div>
    )
}

export {PasswordGenerator}
