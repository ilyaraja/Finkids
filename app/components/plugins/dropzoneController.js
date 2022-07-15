angular
    .module('altairApp')
    .controller('dropzoneCtrl', [
        '$scope',
        '$timeout',
        function ($scope,$timeout) {

        $timeout(function () {

                $('#js-dropzone-form').dropzone();

                $("div#js-dropzone").dropzone({
                    url: "/",
                    paramName: "file",
                    maxFilesize: 2,
                    addRemoveLinks: true,
                    renameFile: function(file) {
                        return 'file_'+(new Date()).getTime();
                    }
                });

            })
        }
    ]);