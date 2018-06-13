app.service('ProductService', function ($http) {

    this.list = function (page, limit) {
        return $http.get('/Product/List');
    };

    this.add = function (item) {
        return $http.post('/Product/Add', item);
    };

    this.edit = function (item) {
        return $http.post('/Product/Edit', item);
    };

});