
export const PopulateStudents = (state = [], action) => {
    switch (action.type) {
        case 'POPULATE_STUDENTS':
            return [...state, ...action.payload];
        default: return state;
    }
};