appModule.config(function($stateProvider) {
    var userProfile = {
        name: 'profile',
        url: '/profile/:id',
        template: function($stateParams) {
            return `<div>
                        <img src="{{students[${$stateParams.id}].img}}">
                        <div>{{students[${$stateParams.id}].name}} {{students[${$stateParams.id}].surname}}</div>
                        <div>Birthday: {{students[${$stateParams.id}].birth}}</div>
                        <div>Phone number: {{students[${$stateParams.id}].phone}}</div> 
                    </div>`
        },
        controller: 'controllerList',
    }

    var home = {
        name: 'home',
        url: '/',
        template: `<div class="student">
                    <students-list ng-repeat="student in students" name="student.name" surname="student.surname" img="student.img" id="student.id"></students-list>
                </div>`,
        controller: 'controllerList',
    }

    $stateProvider.state(home);
    $stateProvider.state(userProfile);
});