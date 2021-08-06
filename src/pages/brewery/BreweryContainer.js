import { compose } from 'redux';
import { connect } from 'react-redux';
import Brewery from './Brewery';

const mapStateToProps = (state) => {

  return {
    breweryState: state
  }
}

export default compose(connect(mapStateToProps, null))(
  Brewery
)
