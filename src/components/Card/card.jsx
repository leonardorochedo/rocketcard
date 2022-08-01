import { useState, useEffect } from 'react'
import './card.css'

export function Card() {

    const [user, setUser] = useState({ login: '', avatar: '', followers: '', following: '', repo: '', location: '', company: '' })

    useEffect(() => {
        fetch(`https://api.github.com/users/leonardorochedo`)
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
      }, [])
    
    return(
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
                    <p>{user.company} Empresa</p>
                </div>
            </div>
        </div>
    )
}