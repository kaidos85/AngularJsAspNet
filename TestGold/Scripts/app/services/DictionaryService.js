app.service('DictionaryService', function ($http) {

    this.operations = function (page, limit) {
        return $http.get('/Dictionary/OperationTypes');
    };

    this.categories = function (page, limit) {
        return $http.get('/Dictionary/Categories');
    };

    this.products = function (page, limit) {
        return $http.get('/Dictionary/Products');
    };
});