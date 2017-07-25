on.input.in = function() {
  output({ out: $.write('in', lodash.sortBy($.in, $.iteratee)) });
};
