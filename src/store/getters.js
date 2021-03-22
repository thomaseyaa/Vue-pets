export const pets = (state) =>{
    return state.pets;
};

export const dogs = (state) =>{
    return state.pets.filter('Dog');
};

export const cats = (state) =>{
    return state.pets.filter('Cat');
};