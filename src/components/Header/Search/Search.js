import { connect } from 'react-redux';
import { setSearchValue } from '../../../redux/reducer';
import './search.scss';
import searchIcon from './../../../assets/images/searchIcon.png';
import { getSearchValue } from '../../../redux/selectors';

function Search(props) {

    const getSearchValue = (e) => {
        props.setSearchValue(e.target.value);
    }

    return (
        <div className='search'>
            <input onChange={getSearchValue} value={props.searchInputValue} placeholder='Search...'></input>
            <img src={searchIcon}></img>
        </div>
    );
}


const mapStateToProps = function ({searchValue}) {
    return {
        searchInputValue: getSearchValue(searchValue)
    };
};

export default connect(mapStateToProps, { setSearchValue })(Search);