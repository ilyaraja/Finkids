angular
    .module('altairApp')
    .controller('validationCtrl', [
        '$scope',
        '$rootScope',
        '$timeout',
        function ($scope,$rootScope,$timeout) {

            var $formValidate = $('#form_validation');

            $scope.selectize_val_options = [
                { value: 'press', label: 'Press' },
                { value: 'net', label: 'Internet' },
                { value: 'mouth', label: 'Word of mouth' },
                { value: 'other', label: 'Other...' }
            ];

            $scope.selectize_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Choose...'
            };

            $timeout(function() {
                $formValidate
                    .parsley({
                        'excluded': 'input[type=button], input[role=button], input[type=submit], input[type=reset], input[type=hidden], .selectize-input > input, .md-input.selectized'
                    })
                    .on('form:validated',function() {
                        $scope.$apply();
                    })
                    .on('field:validated',function(parsleyField) {
                        if($(parsleyField.$element).hasClass('md-input') || $(parsleyField.$element).is('select')) {
                            $scope.$apply();
                        }
                    });
            });

            // datepicker callback
            $('#val_birth').on('hide.uk.datepicker', function() {
                $formValidate.parsley().validate();
            });

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
            $scope.person = {};
            $scope.person.selected = '';

        }
    ]);