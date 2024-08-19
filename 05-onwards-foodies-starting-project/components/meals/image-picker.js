'use client'
import { useRef } from 'react'
import classes from './image-picker.module.css'

export default function ImagePicker({label, name}){
    const ImageInput = useRef(null)
    function handlePickClick(){
        ImageInput.current.click()
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name} >{label}</label>
            <div className={classes.controls}>
                <input 
                className={classes.input}
                type='file' 
                id={name} 
                accept='image/png, image/jpeg, image/jpg' 
                name={name} 
                ref={ImageInput}
                />
                <button 
                className={classes.button}
                type='button'
                onClick={handlePickClick}
                >
                    Pick and Image
                </button>
            </div>
        </div>
    )
}