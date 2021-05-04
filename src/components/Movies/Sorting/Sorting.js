import { connect } from 'react-redux';
import { setSortName } from '../../../redux/reducer';
import './sorting.scss';

function Sorting(props) {

    const sortBy = (current) => {        
        props.setSortName(current);       
    }

    return (
        <div className='sort'>
             <button onClick={() => sortBy('title')}>Sort by Name</button> 
             <button onClick={() => sortBy('vote_average')}>Sort by Rating</button>         
        </div>
    );
}


export default connect(null, { setSortName })(Sorting);