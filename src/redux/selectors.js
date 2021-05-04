const getMovies = (allMovies, searchValue) => {
    if (searchValue === '') {
        return allMovies;
    }
    return allMovies.filter(film => film.title.toLowerCase().includes(searchValue));
}

const getSortMovies = (allMovies, sortBy) => {
    switch (sortBy) {
        case 'vote_average':
            return allMovies.sort((a, b) => { return a.vote_average - b.vote_average });
        case 'title':
            return allMovies.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
                if (a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
                return 0;
            });
        default:
            return allMovies;
    }
}

export const getPageNumber = (currentPage) => {
    return currentPage;
}

export const getIsFetching = (isFetching) => {
    return isFetching;
}

export const getIsError = (isFetchError) => {
    return isFetchError;
}

export const getSortBy = (sortBy) => {
    return sortBy;
}

export const getFilterMovies = (allMovies, searchValue, sortBy) => {
    return getSortMovies(getMovies(allMovies, searchValue), sortBy);
}

export const getSearchValue = (searchValue) => {
    return  searchValue;
}