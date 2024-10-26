import React from 'react';
import './Styles/MainContent.css';

const MainContent = () => {
  return (
    <div className="general">
    <div className="main-content">
      <h2>Bienvenido(a) a su sistema de información integrado</h2>
      <div className='pantalla'>
      <div className="user-info">
        <img src="image.png" alt="Foto del perfil" />
        <div className="user-details">
          <p><strong>Nombre:</strong> Vieri Elías</p>
          <p><strong>Apellidos:</strong> Flores Pinedo</p>
          <p><strong>Código:</strong> 2020009092</p>
          <p><strong>Facultad:</strong> Ing. Industrial y de Sistemas</p>
          <p><strong>Escuela Profesional:</strong> Ingeniería de Sistemas</p>
          <p><strong>Nivel:</strong> 04</p>
        </div>
      </div>
      <div className="dashboard-options">
        <div onClick={() => window.location.href = "/record-academico"}>Récord Académico</div>
        <div onClick={() => window.location.href = "/lista-asignaturas"}>Lista de Asignaturas</div>
        <div onClick={() => window.location.href = "/lista-pagos"}>Lista de Pagos</div>
        <div onClick={() => window.location.href = "/matricula-online"}>Matrícula en línea</div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MainContent;
