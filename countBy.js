module.exports = {
  name: "countBy",
  ns: "lodash",
  description: "countBy",
  async: true,
  phrases: {
    active: "performing countBy"
  },
  ports: {
    input: {
      "in": {
        title: "Collection",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', lodash.countBy($.in, $.iteratee))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      iteratee: {
        title: "Iteratee",
        description: "Function or property string",
        type: "any",
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
  state: {}
}