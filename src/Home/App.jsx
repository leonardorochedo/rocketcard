import './App.css'
import { useState, useEffect } from 'react'

export function App() {

  const [user, setUser] = useState({ login: '', avatar: '', followers: '', following: '', repo: '', location: '', company: '' })

  useEffect(() => {
    let button = document.querySelector('.button')

    button.addEventListener("click", function(e) {
      e.preventDefault()
      const inputValue = document.querySelector('#input').value
      const URL = `https://api.github.com/users/${inputValue}`
      
      fetch(URL)
      .then(response => response.json())
      .then(data => {
        setUser({
          login: data.login,
          avatar: data.avatar_url,
          followers: data.followers,
          following: data.following,
          repo: data.public_repos,
          location: data.location,
          company: data.company
        })
      })
    }, []) })

    function changeColor() {

    // Gerando a cor
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
    color += letters[Math. floor(Math. random() * 16)];

    // Fazendo a alteração
    document.body.style.setProperty('--border-color', color);

    }
    }

  return (
    <>
    <form className="input" action="">
      <input type="text" placeholder='  Digite seu usuário do github' name='name' id='input'/>
      <input type="submit" className='button' value='Gerar card'/>
    </form>

    <div className="card one">
        <img src={user.avatar} alt="Foto de perfil" className="bgImg" />
    <div className="top">
        <img src="src\assets\logo.svg" alt="Logo rocketseat" />
        <h1>{user.login}</h1>
    </div>
    <div className="infoGit">
      <div className="infos">
        <img src="src\assets\followers.svg" alt="Seguidores" />
        <p>{user.followers} Seguidores</p>
      </div>
      <div className="infos">
        <img src="src\assets\following.svg" alt="Seguindo" />
        <p>{user.following} Seguindo</p>
      </div>
      <div className="infos">
        <img src="src\assets\repository.svg" alt="Repositórios" />
        <p>{user.repo} Repositórios</p>
      </div>
      <div className="infos">
        <img src="src\assets\location.svg" alt="Localização" />
        <p>{user.location}</p>
      </div>
      <div className="infos infoOther">
        <img src="src\assets\company.svg" alt="Empresa" />
        <p>{user.company}</p>
      </div>
    </div>
    </div>

    <div className='button'>
      <p>Customizar Rocketcard</p>
      <button type="button" id="button" onClick={changeColor}>Gerar borda</button>
    </div>
    </>
  )
}