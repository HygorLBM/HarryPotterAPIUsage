import './index.css';


export const handleFetch= (result) => {
    return {
        type: 'FETCH_ALL',
        payload: {
            data: result
        }
    }
};

export const handleChangeSearchInput= (inputToFilter) => {
    return {
        type: 'FILTER_CHARACTERS',
        toFilter: inputToFilter,
    }
};

export const handleNextPage= () => {
    return {
        type: 'NEXT_PAGE'
    }
};

export const handlePreviousPage= () => {
    return {
        type: 'PREVIOUS_PAGE'
    }
};
