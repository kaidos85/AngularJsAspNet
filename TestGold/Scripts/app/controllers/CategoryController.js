app.controller('CategoryController', function ($scope, $uibModal, CategoryService) {
    $ctrl = this;

    $ctrl.LoadList = function () {
        var catList = CategoryService.list();
        catList.then(function (repsonse) {
            $scope.items = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };
    $ctrl.LoadList();


    $ctrl.addItem = function (item) {
        var addFunc = CategoryService.add(item);
        addFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $ctrl.editItem = function (item) {
        var editFunc = CategoryService.edit(item);
        editFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $scope.modalWindow = function (item) {
        var tmpl = '/Scripts/app/templates/categoryModal.html';
        var msgbox = $uibModal.open({
            templateUrl: tmpl,
            controller: 'CategoryModalController',
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
            }
        });
    };


});