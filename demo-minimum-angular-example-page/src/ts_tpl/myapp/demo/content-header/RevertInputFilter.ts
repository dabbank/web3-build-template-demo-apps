module demo.demo {
    class RevertInputFilter {
        public static RevertInputFilter_instance() : ng.IDirective {
            return (value : string) => {
                value = value || '';

                var revertedValue : string = '';
                for (var i = 0; i < value.length; i++) {
                    revertedValue = value.charAt(i) + revertedValue;
                }

                return revertedValue;
            }
        }
    }
    angular.module('demo-minimum-angular-example-page').filter('revertInputFilter', RevertInputFilter.RevertInputFilter_instance);
}