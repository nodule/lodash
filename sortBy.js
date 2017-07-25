module.exports = {
  name: "sortBy",
  ns: "lodash",
  description: "sortBy",
  async: true,
  phrases: {
    active: "performing sortBy"
  },
  ports: {
    input: {
      "in": {
        title: "Collection",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, lodash) {
          var r = function() {
            output({
              out: $.write('in', lodash.sortBy($.in, $.iteratee))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      iteratees: {
        title: "Iteratees",
        description: "Functions and/or property strings",
        type: "array",
        required: false
      }
    },
    output: {
      out: {
        title: "out",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      lodash: require('lodash')
    }
  },
  state: {}
}