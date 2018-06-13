app.controller('ProductController', function ($scope, $uibModal, ProductService, CategoryService) {
    $ctrl = this;

    $ctrl.LoadList = function () {
        var prodList = ProductService.list();
        prodList.then(function (repsonse) {
            $scope.items = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $ctrl.LoadCat = function (func) {
        var catList = CategoryService.list();
        catList.then(function (repsonse) {
            $ctrl.catList = repsonse.data;
            func();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $ctrl.LoadList();     

    $ctrl.addItem = function (item) {
        var addFunc = ProductService.add(item);
        addFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $ctrl.editItem = function (item) {
        var editFunc = ProductService.edit(item);
        editFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $scope.modalWindow = function (item) {
        var tmpl = '/Scripts/app/templates/productModal.html';
        var func = function () {
            var msgbox = $uibModal.open({
                templateUrl: tmpl,
                controller: 'ProductModalController',
                controllerAs: '$ctrl',
                resolve: {
                    item: function () {
                        return item;
                    },
                    addFunc: function () {
                        return $ctrl.addItem;
                    },
                    editFunc: function () {
                        return $ctrl.editItem;
                    },
                    categoryList: function () {
                        return $ctrl.catList;
                    }
                }
            });
        };
        $ctrl.LoadCat(func);
    };


});