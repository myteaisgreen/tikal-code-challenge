const fetchGeneralResource = async (target) => {
    const response = await fetch(target, { method: 'get' });
    const responseJSON = await response.json();
    const result = responseJSON.results;

    if(responseJSON.next){
        const nextPageResult = await fetchGeneralResource(responseJSON.next);
        result.push(...nextPageResult);
    }

    return result;
}

const fetchSpecificResource = async (target) => {
    const response = await fetch(target, { method: 'get' });
    const responseJSON = await response.json();

    return responseJSON;
}

const fetchArraySpecificResources = async (targets) => {
    const responses = [];

    for(let i = 0; i < targets.length; i++){
        let response = await fetchSpecificResource(targets[i]);
        responses.push(response);
    }

    return responses;
}

export { fetchGeneralResource, fetchSpecificResource, fetchArraySpecificResources };