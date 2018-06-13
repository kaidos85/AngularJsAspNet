app.service('CategoryService', function ($http) {

    this.list = function (page, limit) {
        return $http.get('/Categories/List');
    };

    this.add = function (item) {
        return $http.post('/Categories/Add', item);
    };

    this.edit = function (item) {
        return $http.post('/Categories/Edit', item);
    };

});