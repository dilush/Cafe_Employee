export function getApi(url) {
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch((error) => { throw error });
}

export function postApi(url, data) {
    return fetch(
        url,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch((error) => { throw error });
}

export function putApi(url, data) {
    return fetch(
        url,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch((error) => { throw error });
}

export function deleteApi(url) {
    return fetch(
        url,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response)
        .catch((error) => { throw error });
}
