app.controller('CategoryModalController', function ($uibModalInstance, $scope, item, addFunc, editFunc) {
    var $ctrl = this;
    $ctrl.isNew = item == undefined;
    $scope.Name = item != null ? item.Name : '';

    $ctrl.ok = function () {
        if ($ctrl.isNew) {
            addFunc({ Name : $scope.Name});
        }            
        else {
            item.Name = $scope.Name;
            editFunc(item);
        }            
        $uibModalInstance.close();
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});