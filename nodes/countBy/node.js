on.input.in = function() {
  output({ out: $.write('in', lodash.countBy($.in, $.iteratee)) });
};
