app.controller('ProductModalController', function ($uibModalInstance, $scope, item,
                        addFunc, editFunc, categoryList) {
    var $ctrl = this;
    $ctrl.isNew = item == undefined;
    $scope.Name = item != null ? item.Name : '';
    $scope.selectedCategory = item != null ? item.Category_Id : null;
    $ctrl.catList = categoryList;

    $ctrl.ok = function () {
        if ($ctrl.isNew) {
            addFunc({ Name : $scope.Name, Category_Id: $scope.selectedCategory });
        }            
        else {
            item.Name = $scope.Name;
            item.Category_Id = $scope.selectedCategory;
            editFunc(item);
        }            
        $uibModalInstance.close();
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});