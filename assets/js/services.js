function TinderService() {
    const URL = 'https://api.randomuser.me/?results=500';

    function loadTinder() {
        return AJAX.loadJsonByPromise(URL);
    }

    return {
        loadTinder: loadTinder
    }
};