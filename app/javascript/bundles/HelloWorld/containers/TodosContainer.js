import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'; // *connects react and redux
import * as actions from '../actions/simsActionCreators';

import Todos from '../components/Todos';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTodos: actions.fetchTodos
  }, dispatch);
}

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
