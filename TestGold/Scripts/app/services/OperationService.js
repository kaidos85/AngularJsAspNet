app.service('OperationService', function ($http) {

    this.list = function (page, limit) {
        return $http.get('/Operation/List');
    };

    this.listFilter = function (fltr) {
        return $http.post('/Operation/ListFilter', fltr);
    };

    this.add = function (item) {
        return $http.post('/Operation/Add', item);
    };

    this.edit = function (item) {
        return $http.post('/Operation/Edit', item);
    };

});