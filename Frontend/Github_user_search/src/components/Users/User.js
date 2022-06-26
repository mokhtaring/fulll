import React from 'react'

export default function User(props) {
    const {login,avatar_url,html_url}=props.user;
    return (
    /*----------------Affichage de user avec ses différentes informations(photo de profil,name... */
        <div className="card">
            <img className="card-img-top" src={avatar_url} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{login}</h4>
                <p className="card-text">
                <a href={html_url} className="btn btn-primary" target="_blank" rel="noreferrer">Show more</a>
                </p>
            </div>
        </div>
    )
  }

