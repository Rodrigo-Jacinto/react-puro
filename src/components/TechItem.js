import React from 'react';
import propTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover Tech
      </button>
    </li>
  );
}

// caso o parametro tech não seja passado em <TechItem/>, ele atribui a string "Tecnologia vazia" a propiedade tech
TechItem.defaultProps = {
  tech: 'Tecnologia Vazia'
};

//valida as propriedades passadas em <TechItem> exigindo que se seja passado valores dos tipos exigidos e que sejam obrigatórias
TechItem.propTypes = {
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired
};

export default TechItem;
