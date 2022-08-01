import './button.css'

export function Button() {

    function changeColor() {
        const color = document.getElementById('one')
    }

    return (
        <div className='button'>
            <p>Customizar Rocketcard</p>
            <button type="button" onClick={changeColor} id="button">Gerar borda</button>
        </div>
    )
}