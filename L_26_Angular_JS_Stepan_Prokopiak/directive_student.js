appModule.directive('studentsList', function() {
    var directiveDefinitionObject = {
        priority: 0,
        template: `<div class="student">
                <img src="{{img}}" alt="image" ui-sref="profile({ id: {{id}} })">
                   <div>
                    <div ng-show="!edit">{{name}}</div>
                    <div ng-show="!edit">{{surname}}</div>
                    <input ng-show="edit" ng-model="name">
                    <input ng-show="edit" ng-model="surname">
                                
                    </div>
                    <button ng-click="edit=true" ng-show="!edit">EDIT</button>
                    <button ng-click="edit=false" ng-show="edit">SAVE</button>
                </div>`,
        transclude: false,
        restrict: 'E',
        scope: {
            name: '=',
            surname: '=',
            img: '=',
            id: '='
        }

    };
    return directiveDefinitionObject;
});