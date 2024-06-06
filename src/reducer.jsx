const reducer=(state,action)=>{
    switch(action.type){
        case "GET_STORIES":
        return {
            ...state,
            hits:action.payload.hits,
            nbpages:action.payload.nbPages,
        };
        case "REMOVE_POST":
            return {
                ...state,
                hits:state.hits.filter((currElem)=>{
                    return currElem.objectID!==action.payload;
                })
            };
            case "SEARCH_QUERY":
                return {
                    ...state,
                    query:action.payload,
                    }
    };
    
    return state;
};

export default reducer;