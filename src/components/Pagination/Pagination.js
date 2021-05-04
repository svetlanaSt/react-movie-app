import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/reducer';
import { getPageNumber } from '../../redux/selectors';
import './pagination.scss';

function Pagination(props) {

    const getPageNumber = (e) => {
        props.setCurrentPage(+e.target.textContent);
    }

    let pageSize = 5;
    let pageCount = Math.ceil(200 / pageSize);
    let pages = [];

    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    let portionSize = 5;
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className='pagination' >
            { portionNumber > 1 &&
                <button className='nav-btn' onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={props.currentPage === p && 'page-active'} key={p} onClick={getPageNumber}>{p}</span>
                })}
            { portionCount > portionNumber &&
                <button className='nav-btn' onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    );
}

const mapStateToProps = function ({currentPage}) {
    return {
        currentPage: getPageNumber(currentPage)
    };
}


export default connect(mapStateToProps, { setCurrentPage })(Pagination);