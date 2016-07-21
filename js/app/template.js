var app = angular.module('app', ['ngAnimate', 'ngMessages', 'ui.bootstrap', 'toastr']);

app.controller('AppCtrl', function ($scope, $uibModal, $log, toastr) {

    /* Menu Selection*/
    $scope.menuOption = 'about';
    $scope.showFormElements = true;
    $scope.menuOptions = [
        { 'templateUrl': 'about.html', 'menuOption' : 'about'},
        { 'templateUrl': 'modal.html', 'menuOption' : 'modals'},
        { 'templateUrl': 'buttons.html', 'menuOption' : 'buttons'},
        { 'templateUrl': 'cards.html', 'menuOption' : 'cards'},
        { 'templateUrl': 'tabs.html', 'menuOption' : 'tabs'},
        { 'templateUrl': 'pagination.html', 'menuOption' : 'pagination'},
        { 'templateUrl': 'collapsible.html', 'menuOption' : 'collapsible'},
        { 'templateUrl': 'toasts.html', 'menuOption' : 'toasts'},
        { 'templateUrl': 'loader.html', 'menuOption' : 'loader'},
        { 'templateUrl': 'typography.html', 'menuOption' : 'typography'},
        { 'templateUrl': 'text-inputs.html', 'menuOption' : 'text fields'},
        { 'templateUrl': 'checkboxes.html', 'menuOption' : 'checkboxes'},
        { 'templateUrl': 'radio-buttons.html', 'menuOption' : 'radio buttons'},
        { 'templateUrl': 'select-dropdown.html', 'menuOption' : 'select dropdown'},
        { 'templateUrl': 'text-area.html', 'menuOption' : 'text area'}
    ];

    /* Input fields init */
    $scope.ipReqFocused = false;
    $scope.ipReq2Focused = false;
    $scope.ipReq3Focused = false;
    $scope.ipReq4Focused = false;
    $scope.isIpDisabled = true;

    $scope.textArea2 = "This is a read-only textarea";
    $scope.textArea3 = "This is a disabled textarea";


    $scope.validField="abc123";
    $scope.invalidField="abc";

    /* Pagination properties */
    $scope.currentPage = 4;

    /* Collapsible properties */
    $scope.isCollapsed = false;

    /* Toastr functions */
    
    $scope.openInfoToast = function () {
        toastr.info('FYI');
    };

    $scope.openSuccessToast = function(){
        toastr.success('Action successful', 'Success');
    };

    $scope.openWarningToast = function(){
        toastr.warning('Try again.', 'Warning');
    };

    $scope.openErrorToast = function(){
        toastr.error( 'Action failed', 'Error');
    };

    /* Modal functions*/
    $scope.openSuccess = function () {
        $scope.modalProperties = {
            "modalType" : "success",
            "icon": "fa-check-circle",
            "title" : "Confirmation"
        };
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modal-template.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                modalProperties: function () {
                    return $scope.modalProperties;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $log.info('Returned '+selectedItem);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.openWarning = function () {
        $scope.modalProperties = {
            "modalType" : "warning",
            "icon": "fa-warning",
            "title" : "warning"
        };
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modal-template.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                modalProperties: function () {
                    return $scope.modalProperties;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $log.info('Returned '+selectedItem);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.openError = function () {
        $scope.modalProperties = {
            "modalType" : "danger",
            "icon": "fa-exclamation-circle",
            "title" : "Error"
        };
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modal-template.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                modalProperties: function () {
                    return $scope.modalProperties;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $log.info('Returned '+selectedItem);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $uibModalInstance represents a modal-template.html window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, modalProperties) {
    $scope.modalProperties = modalProperties;

    $scope.ok = function () {
        $uibModalInstance.close(modalProperties);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});


/* Toastr Properties */

app.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: true,
        allowHtml: false,
        closeButton: false,
        closeHtml: '<button>&times;</button>',
        extendedTimeOut: 500,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        messageClass: 'toast-message',
        onHidden: null,
        onShown: null,
        onTap: null,
        progressBar: false,
        tapToDismiss: true,
        templates: {
            toast: 'directives/toast/toast.html',
            progressbar: 'directives/progressbar/progressbar.html'
        },
        timeOut: 2000,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
});