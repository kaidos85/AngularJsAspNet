app.controller('OperationModalController', function ($uibModalInstance, $scope, item,
                        addFunc, editFunc, dictionaries) {
    var $ctrl = this;
    $ctrl.isNew = item == undefined;

    $scope.Quantity = item != null ? item.Quantity : '';
    $scope.Price = item != null ? item.Price : '';
    $scope.Amount = item != null ? item.Amount : '';
    $scope.selectedProduct = item != null ? item.Product_Id : null;
    $scope.selectedOperation = item != null ? item.OperationType : null;
    $scope.PDate = item != null ? new Date(parseInt(item.PDate.replace("/Date(", "").replace(")/", ""), 10)) : '';

    $ctrl.prodList = dictionaries.prodList;
    $ctrl.operList = dictionaries.operList;

    $ctrl.ok = function () {
        if ($ctrl.isNew) {
            addFunc({
                Product_Id: $scope.selectedProduct,
                OperationType: $scope.selectedOperation,
                Quantity : $scope.Quantity,
                Price : $scope.Price,
                Amount: $scope.Price * $scope.Quantity,
                PDate: $scope.PDate,                
           });
        }            
        else {
            item.Quantity = $scope.Quantity;
            item.Price = $scope.Price;
            item.Amount = $scope.Price * $scope.Quantity;
            item.OperationType = $scope.selectedOperation
            item.Product_Id = $scope.selectedProduct;
            item.PDate = $scope.PDate;
            editFunc(item);
        }            
        $uibModalInstance.close();
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss();
    };
});