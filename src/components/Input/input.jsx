import { useState } from 'react'
import './input.css'

export function Input() {

    return (
        <div className="input">
            <input type="text" placeholder='  Digite seu usuário do github' id='input'/>
            <button type="button">Gerar card</button>
        </div>
    )
}