(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab-module1-directive.tpl.html',
    '<div ng-controller="demoModule1Controller">\n' +
    '    {{test}}\n' +
    '    <div ng-repeat="module1Model in module1ModelList">\n' +
    '    <div demo-module1-tile-directive="">\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab-module1-tile-directive.tpl.html',
    '<div class="panel panel-default">\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-6">\n' +
    '            Kaufen: {{module1Model.buy}}\n' +
    '        </div>\n' +
    '        <div class="col-xs-6">\n' +
    '            Verkaufen: {{module1Model.sell}}\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <p>+2.4%</p>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab/demo/app/main.tpl.html',
    '<div class="panel panel-default">\n' +
    '    <div class="panel-body">\n' +
    '        test\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '\n' +
    '                <div demo-module3-part1-directive="">to be replaced at runtime</div>\n' +
    '\n' +
    '                <div demo-module3-part2-directive="">to be replaced at runtime</div>\n' +
    '\n' +
    '                <input type="checkbox" />\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab/demo/content-demo-part1/dab-demo-part1-directive.tpl.html',
    'Content of Demo-Directive Part 1');
}]);
})();

(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab/demo/content-demo-part2/dab-demo-part2-directive.tpl.html',
    'Content of Demo-Directive Part 2');
}]);
})();

(function(module) {
try {
  module = angular.module('dabTemplatecache');
} catch (e) {
  module = angular.module('dabTemplatecache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/dab/demo/content-header/dab-demo-directive.tpl.html',
    'Content of Demo-Directive');
}]);
})();
