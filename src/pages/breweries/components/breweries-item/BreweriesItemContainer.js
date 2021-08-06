import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import BreweriesItem from './BreweriesItem';
import * as actions from '../../../../redux/actions';

const mapStateToProps = (state) => {

  return {
    setBrewery: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  BreweriesItem
)
