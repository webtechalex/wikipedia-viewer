import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchQuery, updateSearchQuery } from '../actions';
import Search from './Search';

const mapStateToProps = (state) => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSearchQuery, fetchSearchQuery}, dispatch)
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;