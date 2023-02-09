
export const splitName = (book) => {
    const name = book?.title;
    const indice = name?.indexOf('/');
    if (indice > 1) {
        const nameSplit = name?.substring(0, indice);
        return nameSplit;
    } else {
        return name;
    }
};

export const filterCategories = (book) => {
    const categories = book?.categories?.map(category => {
        const array = category?.split(' / ');
        return array;
    });
    const categoriesFlat = categories?.flat();
    const categoriesFilter = categoriesFlat?.filter((item,index)=>{
        return categoriesFlat.indexOf(item) === index;
      })
    return categoriesFilter;
};

export const splitSinopsis = (book) => {
    const sinopsisPlain = book?.description?.replace( /(<([^>]+)>)/ig, '');
    const index = sinopsisPlain?.indexOf('ENGLISH');
    if(index > 1) {
        const splitSinopsis = sinopsisPlain?.substring(0,index);
        return splitSinopsis;
    } else {
        return sinopsisPlain;
    };
};