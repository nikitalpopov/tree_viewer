angular
    .module('treeViewerApp')
    .component('treeViewer', {
            templateUrl: 'tree-viewer/tree-viewer.template.html',
            controller: function TreeViewerController($http) {
                var self = this;
                var url = '/public/tree.json';

                $http
                    .get(url)
                    .then(function (response) {
                        self.tree = [response.data];
                    });
            }
        }
    );