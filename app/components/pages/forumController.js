angular
    .module('altairApp')
    .controller('forumCtrl', [
        '$scope',
        '$timeout',
        'utils',
        function ($scope,$timeout,utils) {

            $scope.threads = [
                {
                    'userAvatar': 'assets/img/avatars/avatar_02_tn.png',
                    'userName': 'Burley Haley',
                    'title': 'Distinctio iusto architecto autem.',
                    'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                    'sticky': true,
                    'views': utils.randomNUmber(10,1000),
                    'comments': utils.randomNUmber(10,100),
                    'recentAnswer': 'Cordia Kunze MD'
                },
                {
                    'userAvatar': 'assets/img/avatars/avatar_03_tn.png',
                    'userName': 'Burley Haley',
                    'title': 'Distinctio iusto architecto autem.',
                    'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                    'sticky': false,
                    'views': utils.randomNUmber(10,1000),
                    'comments': utils.randomNUmber(10,100),
                    'recentAnswer': 'Cordia Kunze MD'
                },
                {
                    'userAvatar': 'assets/img/avatars/avatar_04_tn.png',
                    'userName': 'Burley Haley',
                    'title': 'Distinctio iusto architecto autem.',
                    'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                    'sticky': false,
                    'views': utils.randomNUmber(10,1000),
                    'comments': utils.randomNUmber(10,100),
                    'recentAnswer': 'Cordia Kunze MD'
                },
                {
                    'userAvatar': 'assets/img/avatars/avatar_05_tn.png',
                    'userName': 'Burley Haley',
                    'title': 'Distinctio iusto architecto autem.',
                    'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                    'sticky': false,
                    'views': utils.randomNUmber(10,1000),
                    'comments': utils.randomNUmber(10,100),
                    'recentAnswer': 'Cordia Kunze MD'
                },
                {
                    'userAvatar': 'assets/img/avatars/avatar_06_tn.png',
                    'userName': 'Burley Haley',
                    'title': 'Distinctio iusto architecto autem.',
                    'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                    'sticky': false,
                    'views': utils.randomNUmber(10,1000),
                    'comments': utils.randomNUmber(10,100),
                    'recentAnswer': 'Cordia Kunze MD'
                }
            ];

            $scope.threadSingle = {
                'userName': 'Burley Haley',
                'title': 'Distinctio iusto architecto autem.',
                'content': 'Voluptatem ea voluptas quia assumenda est quos et architecto dolorum aut odit odio quaerat sed eos dolor soluta dolores dolor ipsam libero iste aut fugit et non expedita ut facere tempora doloribus qui enim nihil qui id mollitia ut aliquid fugit molestias distinctio voluptatem ratione eveniet est.',
                'category': 'General',
                'date': 'July 2018',
                'threadDate': '12 Jun',
                'comments': [
                    {
                        'userAvatar': 'assets/img/avatars/avatar_02_tn.png',
                        'userName': 'Lenna Mann',
                        'title': 'Distinctio iusto architecto autem.',
                        'content': 'Eos non ducimus omnis harum ea voluptates quam est voluptates et deserunt id tempora tempora sit magni voluptatem adipisci molestiae error fugiat reprehenderit cum sit sed voluptatem perferendis quo sequi magni sed sit saepe similique et facilis laboriosam fuga amet iure natus dolores in est consectetur aspernatur in sit tempore est adipisci laudantium facere repellendus sunt dolores quis et enim ipsam porro temporibus facilis quam quas dignissimos ex quasi doloribus expedita omnis nostrum eum omnis officiis nisi dicta rerum non asperiores quia est id saepe.',
                        'date': '9 Jun'
                    },
                    {
                        'userAvatar': 'assets/img/avatars/avatar_03_tn.png',
                        'date': '6 Jun 03:38',
                        'userName': 'Susan Breitenberg',
                        'content': 'Nam enim soluta omnis qui commodi quis asperiores tenetur est sint sit incidunt atque voluptate deleniti et et repellendus et et et et quasi beatae quisquam excepturi enim cumque est qui facere rem nulla qui quia et sunt incidunt veniam labore nostrum voluptatibus nostrum libero veritatis voluptate blanditiis ratione repudiandae alias laborum error.'
                    },
                    {
                        'userAvatar': 'assets/img/avatars/avatar_04_tn.png',
                        'date': '8 Jun 06:38',
                        'userName': 'Prof. Gaston Lakin Jr.',
                        'content': 'Nam enim soluta omnis qui commodi quis asperiores tenetur est sint sit incidunt atque voluptate deleniti et et repellendus et et et et quasi beatae quisquam excepturi enim cumque est qui facere rem nulla qui quia et sunt incidunt veniam labore nostrum voluptatibus nostrum libero veritatis voluptate blanditiis ratione repudiandae alias laborum error.'
                    },
                    {
                        'userAvatar': 'assets/img/avatars/avatar_05_tn.png',
                        'date': '5 Jun 05:38',
                        'userName': 'Cade Schulist',
                        'content': 'Nam enim soluta omnis qui commodi quis asperiores tenetur est sint sit incidunt atque voluptate deleniti et et repellendus et et et et quasi beatae quisquam excepturi enim cumque est qui facere rem nulla qui quia et sunt incidunt veniam labore nostrum voluptatibus nostrum libero veritatis voluptate blanditiis ratione repudiandae alias laborum error.'
                    },
                    {
                        'userAvatar': 'assets/img/avatars/avatar_06_tn.png',
                        'date': '4 Jun 08:38',
                        'userName': 'Catalina Kulas PhD',
                        'content': 'Nam enim soluta omnis qui commodi quis asperiores tenetur est sint sit incidunt atque voluptate deleniti et et repellendus et et et et quasi beatae quisquam excepturi enim cumque est qui facere rem nulla qui quia et sunt incidunt veniam labore nostrum voluptatibus nostrum libero veritatis voluptate blanditiis ratione repudiandae alias laborum error.'
                    },
                    {
                        'userAvatar': 'assets/img/avatars/avatar_07_tn.png',
                        'date': '3 Jun 07:38',
                        'userName': 'Ramon Klein',
                        'content': 'Nam enim soluta omnis qui commodi quis asperiores tenetur est sint sit incidunt atque voluptate deleniti et et repellendus et et et et quasi beatae quisquam excepturi enim cumque est qui facere rem nulla qui quia et sunt incidunt veniam labore nostrum voluptatibus nostrum libero veritatis voluptate blanditiis ratione repudiandae alias laborum error.'
                    }
                ]
            };
        }
    ]);