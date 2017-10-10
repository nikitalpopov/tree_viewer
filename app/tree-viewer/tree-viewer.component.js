angular
    .module('treeViewerApp')
    .component('treeViewer', {
            templateUrl: 'tree-viewer/tree-viewer.template.html',
            controller: function TreeViewerController($http) {
                var self = this;
                var url = 'https://rawgit.com/nikitalpopov/abd9317b4853e8d2caee432855e0d0eb/raw/5d43765ba95d6ab346ce2fb5b4ab2958f52af7fc/tree.json';

                $http
                    .get(url)
                    .then(function (response) {
                        self.tree = response.data;
                    });

                self.drawTree = function drawTree(tree) {
                    for (var node in tree['children']) {
                        // ?
                    }
                }
            }
        }
    );