app.controller('OperationController', function ($scope, $uibModal, OperationService, DictionaryService) {
    $ctrl = this;

    $ctrl.LoadList = function () {
        var operList = OperationService.list();
        operList.then(function (repsonse) {
            $scope.items = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    var LoadDictionary = function () {
        var oper = DictionaryService.operations();
        var cat = DictionaryService.categories();
        var prod = DictionaryService.products();

        oper.then(function (repsonse) {
            $scope.operList = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
        cat.then(function (repsonse) {
            $scope.catList = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
        prod.then(function (repsonse) {
            $scope.prodList = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    LoadDictionary();
    $ctrl.LoadList();    


    $ctrl.addItem = function (item) {
        var addFunc = OperationService.add(item);
        addFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $ctrl.editItem = function (item) {
        var editFunc = OperationService.edit(item);
        editFunc.then(function (response) {
            $ctrl.LoadList();
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $scope.modalWindow = function (item) {
        var tmpl = '/Scripts/app/templates/operationModal.html';
        var msgbox = $uibModal.open({
            templateUrl: tmpl,
            controller: 'OperationModalController',
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
                dictionaries: function () {                    
                    return {
                        operList: $scope.operList,
                        prodList: $scope.prodList
                    };
                }
            }
        });
    };

    $scope.filter = function () {
        var cat = $scope.selectedCategory;
        var prod = $scope.selectedProduct;
        var oper = $scope.selectedOperation;
        var dt1 = $scope.selectedDate1;
        var dt2 = $scope.selectedDate2;
        var filterItem = {
            Category_Id: cat,
            Product_Id: prod,
            OperationType: oper,
            Date1: dt1,
            Date2: dt2
        }
        console.log(filterItem);
        var operList = OperationService.listFilter(filterItem);
        operList.then(function (repsonse) {
            $scope.items = repsonse.data;
        }, function (err) {
            $scope.Message = "Call failed" + err.status + "  " + err.statusText;
            console.error($scope.Message);
        });
    };

    $scope.abort = function () {        
        $scope.selectedCategory = undefined;
        $scope.selectedProduct = undefined;
        $scope.selectedOperation = undefined;
        $scope.selectedDate1 = undefined;
        $scope.selectedDate2 = undefined;
        $ctrl.LoadList();
    }
});