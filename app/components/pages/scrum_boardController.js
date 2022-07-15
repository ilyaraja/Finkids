angular
    .module('altairApp', [ angularDragula(angular) ] )
    .controller('scrum_boardCtrl', [
        '$rootScope',
        '$scope',
        'tasks_list',
        'dragulaService',
        function ($rootScope,$scope,tasks_list,dragulaService) {

            $rootScope.topBarActive = true;
            $rootScope.page_full_height = true;

            $scope.$on('$destroy', function() {
                $rootScope.page_full_height = false;
                $rootScope.topBarActive = false;
            });

            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                // set width for scrum board container
                var $scrumBoard = $('#scrum_board'),
                    childWidth = $scrumBoard.children('div').width(),
                    childsCount = $scrumBoard.children('div').length;

                $scrumBoard.width(childWidth * childsCount);
            });

            $scope.task_groups = [
                {
                    id: 'todo',
                    name: 'To Do'
                },
                {
                    id: 'inAnalysis',
                    name: 'In analysis'
                },
                {
                    id: 'inProgress',
                    name: 'In progress'
                },
                {
                    id: 'done',
                    name: 'Done'
                }
            ];

            $scope.tasks_list = tasks_list;

            $scope.tasks_common = [
                {
                    "id": 0,
                    "name": "Altair-366",
                    "title": "Et voluptatem ea vel.",
                    "description": "Aut unde id perferendis distinctio alias omnis iusto.",
                    "status": "critical",
                    "assignee": "Dangelo Purdy"
                },
                {
                    "id": 1,
                    "name": "Altair-532",
                    "title": "Exercitationem placeat qui numquam.",
                    "description": "Sit voluptatum officia consequatur architecto quos explicabo.",
                    "status": "minor",
                    "assignee": "Brooks Dickens"
                },
                {
                    "id": 2,
                    "name": "Altair-8235",
                    "title": "Odit sit possimus.",
                    "description": "Laboriosam aut quasi ipsam harum ex animi.",
                    "status": "blocker",
                    "assignee": "Leone Bode"
                },
                {
                    "id": 3,
                    "name": "Altair-2548",
                    "title": "Qui aliquid dicta possimus.",
                    "description": "Nihil rerum ipsum et animi occaecati harum provident quia.",
                    "status": "minor",
                    "assignee": "Jana DuBuque"
                }
            ];

            // task info
            $scope.taskInfo = function(task) {
                $scope.info = {
                    name: task.name,
                    title: task.title,
                    status: task.status,
                    description: task.description,
                    assignee: task.assignee
                }
            };

            // new task
            $scope.newTask = {
                name: 'Altair-245',
                assignee: [
                    { id: 1, title: 'Aleen Grant' },
                    { id: 2, title: 'Tyrese Koss' },
                    { id: 3, title: 'Chasity Green' },
                    { id: 4, title: 'Me' }
                ],
                group: [
                    { name: 'todo', title: 'To Do' },
                    { name: 'inAnalysis', title: 'In Analysis' },
                    { name: 'inProgress', title: 'In Progress' },
                    { name: 'done', title: 'Done' }
                ]
            };

            $scope.newTask_assignee =  $scope.newTask.assignee;
            $scope.newTask_assignee_config = {
                create:false,
                maxItems: 1,
                valueField: 'id',
                labelField: 'title',
                placeholder: 'Select Assignee...'
            };
            $scope.newTask_group =  $scope.newTask.group;
            $scope.newTask_group_config =  {
                create:false,
                maxItems: 1,
                valueField: 'name',
                labelField: 'title',
                placeholder: 'Select Group...'
            };

            $scope.$on('tasks.drop', function (e, el, target, source) {
                console.log(target[0].id);
            });

            // filters
            var emails_data = $scope.selectize_emails_options = [
                {id: 1, email: 'brian@thirdroute.com', name: 'Brian Reavis'},
                {id: 2, email: 'nikola@tesla.com', name: 'Nikola Tesla'},
                {id: 3, email: 'someone@gmail.com'}
            ];

            var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

            $scope.selectize_emails_config = {
                plugins: {
                    'remove_button': {
                        label: ''
                    }
                },
                persist: false,
                maxItems: null,
                valueField: 'email',
                labelField: 'name',
                searchField: ['name', 'email'],
                placeholder: "Select email",
                render: {
                    item: function(emails_data, escape) {
                        return '<div>' +
                            (emails_data.name ? '<span class="name">' + escape(emails_data.name) + '</span>' : '') +
                            (emails_data.email ? '<span class="email">' + escape(emails_data.email) + '</span>' : '') +
                            '</div>';
                    },
                    option: function(emails_data, escape) {
                        var label = emails_data.name || emails_data.email;
                        var caption = emails_data.name ? emails_data.email : null;
                        return '<div>' +
                            '<span class="label">' + escape(label) + '</span>' +
                            (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                            '</div>';
                    }
                },
                createFilter: function(input) {
                    var match, regex;

                    // email@address.com
                    regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
                    match = input.match(regex);
                    if (match) return !this.options.hasOwnProperty(match[0]);

                    // name <email@address.com>
                    regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
                    match = input.match(regex);
                    if (match) return !this.options.hasOwnProperty(match[2]);

                    return false;
                },
                create: function(input) {
                    if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                        return {email: input};
                    }
                    var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
                    if (match) {
                        return {
                            email : match[2],
                            name  : $.trim(match[1])
                        };
                    }
                    alert('Invalid email address.');
                    return false;
                }
            };
        }
    ]);