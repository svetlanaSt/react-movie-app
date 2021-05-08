import { reducer, setMovies, setSearchValue } from "./reducer";

describe('reducer test', () => {
    test('movies should be set', () => {
        // test data
        let state = {
            allMovies: []
        };

        const payload = [{ id: 1, title: 'The Seven Samurai', rating: 9.8 }];
        let action = setMovies(payload);

        //action
        let newState = reducer(state, action);

        //expectation
        expect(newState.allMovies.length).toBe(1);
        expect(newState.allMovies[0].title).toBe('The Seven Samurai');
    });

    test('search value should be set', () => {
        // test data
        let state = {
            searchValue: ''
        };

        let action = setSearchValue('movie');

        //action
        let newState = reducer(state, action);

        //expectation
        expect(newState.searchValue).toBe('movie');        
    });
});

