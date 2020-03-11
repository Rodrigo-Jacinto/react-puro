import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTechs: '',
    techs: []
  };

  handleNewTech = e => {
    this.setState({ newTechs: e.target.value });
  };

  handleTechList = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTechs],
      newTechs: ''
    });
  };

  handleRemoveTech = techRemove => {
    this.setState({ techs: this.state.techs.filter(t => t !== techRemove) });
  };

  //Executa assim que o componente aparece em tela
  componentDidMount() {
    const techs = JSON.parse(localStorage.getItem('techs'));

    this.setState({ techs: techs });
  }

  //Executa sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs)
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
  }

  //Executa quando component deixa de existir
  componentWillUnmount() {}

  render() {
    const { techs, newTechs } = this.state;

    return (
      //tag fragment
      <form onSubmit={this.handleTechList}>
        <h1>{newTechs}</h1>
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleRemoveTech(tech)}
            />
          ))}
        </ul>
        <input type="text" value={newTechs} onChange={this.handleNewTech} />
        <button type="submit">Eniar</button>
      </form>
    );
  }
}

export default TechList;
