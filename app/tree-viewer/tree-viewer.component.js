angular
    .module('treeViewerApp')
    .component('treeViewer', {
            templateUrl: 'tree-viewer/tree-viewer.template.html',
            controller: function TreeViewerController($http) {
                var self = this;
                // var url = 'https://rawgit.com/nikitalpopov/abd9317b4853e8d2caee432855e0d0eb/raw/79dc0d6f64390e817cbe3c7990ccf5519e9570ff/tree.json';
                var url = '/public/tree.json';

                $http
                    .get(url)
                    .then(function (response) {
                        self.tree = [response.data];
                    });
            }
        }
    );