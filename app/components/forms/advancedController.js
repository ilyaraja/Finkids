angular
    .module('altairApp')
    .controller('advancedCtrl', [
        '$scope',
        '$rootScope',
        '$timeout',
        function ($scope,$rootScope,$timeout) {

            $scope.forms_advanced = {
                "input_error": "Something wrong",
                "input_ok": "All ok",
                "ionslider_1": 23,
                "ionslider_2": {
                    "from": 160,
                    "to": 592
                },
                "ionslider_3": 40,
                "ionslider_4": {
                    "from": 20,
                    "to": 80
                },
                selectize_planets: ["2", "3"]
            };

            // model change
            $timeout(function() {
                $scope.forms_advanced.datepicker = "23.06.2016"
            }, 5000);

        // Advanced selects

            $scope.selectize_single_options = [
                {id: 1, name: 'Alaska', value: 'ak', optgroup: 'atz'},
                {id: 2, name: 'Hawaii', value: 'hi', optgroup: 'atz'},
                {id: 3, name: 'California', value: 'ca', optgroup: 'ptz'},
                {id: 4, name: 'Nevada', value: 'nv', optgroup: 'ptz'},
                {id: 5, name: 'Oregon', value: 'or', optgroup: 'ptz'},
                {id: 6, name: 'Arizona', value: 'az', optgroup: 'mtz'},
                {id: 7, name: 'Colorado', value: 'co', optgroup: 'mtz'},
                {id: 8, name: 'Idaho', value: 'id', optgroup: 'mtz'},
                {id: 9, name: 'Montana', value: 'mt', optgroup: 'mtz'},
            ];

            $scope.selectize_single_config = {
                plugins: {
                    'remove_button': {
                        label     : ''
                    }
                },
                maxItems: 1,
                valueField: 'value',
                labelField: 'name',
                searchField: 'name',
                create: false,
                placeholder: "Select state...",
                optgroups: [
                    {value: 'atz', label: 'Alaskan/Hawaiian Time Zone'},
                    {value: 'ptz', label: 'Pacific Time Zone'},
                    {value: 'mtz', label: 'Mountain Time Zone'}
                ],
                render: {
                    optgroup_header: function(data, escape) {
                        return '<div class="optgroup-header">' + escape(data.label) + '</div>';
                    }
                }
            };

            $scope.selectize_planets_options = [
                {id: 1, title: 'Mercury', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 2, title: 'Venus', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 3, title: 'Earth', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 4, title: 'Mars', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 5, title: 'Jupiter', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 6, title: 'Saturn', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 7, title: 'Uranus', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 8, title: 'Neptune', url: 'http://en.wikipedia.org/wiki/Neptune'}
            ];

            $scope.selectize_planets_config = {
                plugins: {
                    'remove_button': {
                        label     : ''
                    },
                    'drag_drop': []
                },
                maxItems: null,
                valueField: 'id',
                labelField: 'title',
                searchField: 'title',
                create: false,
                render: {
                    option: function(planets_data, escape) {
                        return  '<div class="option">' +
                            '<span class="title">' + escape(planets_data.title) + '</span>' +
                            '</div>';
                    },
                    item: function(planets_data, escape) {
                        return '<div class="item"><a href="' + escape(planets_data.url) + '" target="_blank">' + escape(planets_data.title) + '</a></div>';
                    }
                }
            };

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
                    },
                    'drag_drop': []
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

        // date range
            var $dp_start = $('#uk_dp_start'),
                $dp_end = $('#uk_dp_end');

            var start_date = UIkit.datepicker($dp_start, {
                format:'DD.MM.YYYY'
            });

            var end_date = UIkit.datepicker($dp_end, {
                format:'DD.MM.YYYY'
            });

            $dp_start.on('change',function() {
                end_date.options.minDate = $dp_start.val();
            });

            $dp_end.on('change',function() {
                start_date.options.maxDate = $dp_end.val();
            });

        // masked inputs
            var $maskedInput = $('.masked_input');
            if($maskedInput.length) {
                $maskedInput.inputmask();
            }

        // ui-select
            $scope.people = [
                { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
                { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
                { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
                { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
                { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
                { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
                { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
                { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
                { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
                { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
            ];

            $scope.multipleDemo = {};
            $scope.multipleDemo.selectedPeople = [$scope.people[5], $scope.people[4]];

         // clear button
            $timeout(function() {
                $("#clear_button").addClear({
                    closeSymbol: '<i class="material-icons">close</i>'
                });
            },100)

        }
    ]);