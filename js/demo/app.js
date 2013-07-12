define([
  "dojo/html"
], function(html) {
  return {
    render: function(element) {
      html.set(element, 'Dojo Toolkit up and running');
    }
  };
});
