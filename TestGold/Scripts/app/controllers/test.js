
app.controller('modalTest', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $ctrl.test = function () {
        console.log('test func');
    }
});