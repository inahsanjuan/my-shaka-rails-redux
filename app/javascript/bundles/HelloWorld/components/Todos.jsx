import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todos extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return ("tadaaaa");
  }

  render() {
    return (
      <div>
        <ul>
          
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

export default Todos;
