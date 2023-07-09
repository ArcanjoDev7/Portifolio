import React from 'react';
import './App.css';

function Portfolio() {
    const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    return (
        <div className="container">
          <h1 className="heading">Sobre Mim</h1>
          <p className="description">
            Olá! Meu nome é Miguel Arcanjo e sou um desenvolvedor full-stack com tecnologias da mobile. Adoro criar soluções criativas e inovadoras, e estou constantemente aprendendo e me atualizando com as últimas tendências da indústria.
          </p>
          <div>
          <h2>Conhecimentos</h2>
      <ul className="technology-list">
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
        </div>
        
      );
    }
export default Portfolio;