angular
    .module('altairApp')
    .controller('crud_tableCtrl', [
        '$scope',
        '$timeout',
        function ($scope,$timeout) {

            $scope.users = [
                {
                    "index": 0,
                    "isActive": true,
                    "balance": "15,674.87",
                    "age": 31,
                    "name": {
                        "first": "Victoria",
                        "last": "Hood"
                    },
                    "company": "HOTCAKES",
                    "email": "victoria.hood@hotcakes.org",
                    "phone": "+555 (895) 575-2746",
                    "address": "997 Homecrest Avenue, Westerville, Indiana, 8794"
                },
                {
                    "index": 1,
                    "isActive": true,
                    "balance": "26,682.87",
                    "age": 34,
                    "name": {
                        "first": "Key",
                        "last": "Waters"
                    },
                    "company": "ULTRASURE",
                    "email": "key.waters@ultrasure.co.uk",
                    "phone": "+555 (874) 543-3224",
                    "address": "529 Stuyvesant Avenue, Bordelonville, Wyoming, 9448"
                },
                {
                    "index": 2,
                    "isActive": false,
                    "balance": "31,789.52",
                    "age": 35,
                    "name": {
                        "first": "Coleman",
                        "last": "Fuller"
                    },
                    "company": "ZIDANT",
                    "email": "coleman.fuller@zidant.us",
                    "phone": "+555 (940) 422-3894",
                    "address": "457 Wolf Place, Enetai, Nebraska, 5255"
                },
                {
                    "index": 3,
                    "isActive": false,
                    "balance": "10,208.65",
                    "age": 40,
                    "name": {
                        "first": "Chambers",
                        "last": "Hooper"
                    },
                    "company": "LOCAZONE",
                    "email": "chambers.hooper@locazone.io",
                    "phone": "+555 (892) 578-3854",
                    "address": "445 Friel Place, Sisquoc, Delaware, 5196"
                },
                {
                    "index": 4,
                    "isActive": true,
                    "balance": "13,108.76",
                    "age": 34,
                    "name": {
                        "first": "Villarreal",
                        "last": "Christensen"
                    },
                    "company": "GEOLOGIX",
                    "email": "villarreal.christensen@geologix.tv",
                    "phone": "+555 (915) 526-3752",
                    "address": "551 Beverly Road, Rosewood, Washington, 3834"
                },
                {
                    "index": 5,
                    "isActive": false,
                    "balance": "18,130.00",
                    "age": 20,
                    "name": {
                        "first": "Hallie",
                        "last": "Bruce"
                    },
                    "company": "SURETECH",
                    "email": "hallie.bruce@suretech.ca",
                    "phone": "+555 (995) 535-2770",
                    "address": "540 Commerce Street, Leming, Rhode Island, 6356"
                },
                {
                    "index": 6,
                    "isActive": false,
                    "balance": "35,059.19",
                    "age": 28,
                    "name": {
                        "first": "Savage",
                        "last": "Randall"
                    },
                    "company": "SPORTAN",
                    "email": "savage.randall@sportan.biz",
                    "phone": "+555 (809) 456-2143",
                    "address": "405 Rockaway Avenue, Imperial, New Mexico, 3770"
                }
            ];

            $scope.edit = function($event,index){
                $event.preventDefault();
                $scope.entity = $scope.users[index];
                $scope.entity.index = index;
                $scope.entity.editable = true;
            };

            $scope.delete = function($event,index,userIndex){
                $event.preventDefault();
                UIkit.modal.confirm('Remove this row (id:'+userIndex+')?', function(){
                    $scope.users.splice(index,1);
                });
            };

            $scope.save = function($event,index){
                $event.preventDefault();
                $scope.users[index].editable = false;

            };

            $scope.add = function($event){
                $event.preventDefault();
                $scope.users.push({
                    index: $scope.users.length,
                    name: {
                        first: '',
                        last: ''
                    },
                    age: '',
                    email: '',
                    phone: '',
                    balance: '0.00',
                    company: '',
                    editable : true
                });
            };

        }
    ]);

