function create_error_json(msg) {
    return {"Error": msg}
}

function valid_collection(collection) {
    var valid_collections = ['Animals', 'Accounts', 'Shelters'];
    var is_ok = false;
    for (i=0; i<valid_collections.length; i++) {
        if (collection === valid_collections[i]) {
            is_ok = true;
        }
    }
    return is_ok;
}

function query_allThings(collection) {
    if (valid_collection(collection) === false) {
        return create_error_json('Invalid Collection Paramter');
    }

    
}
