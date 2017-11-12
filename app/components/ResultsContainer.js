import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Results from './Results';
import { clearSearchResults } from '../actions';

const mapStateToProps = (state) => ({
  searchIsLoading: state.searchIsLoading,
  searchHasErrored: state.searchHasErrored,
  searchQueryIsValid: state.searchQueryIsValid,
  searchResponseData: state.searchResponseData
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clearSearchResults}, dispatch);
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer;