define(['demo/app'], function(app) {

  describe('just checking', function() {

    it('works for app', function() {
      var el = dojo.query('body')[0];

      app.render(el);

      expect(el.innerHTML).toEqual('Dojo Toolkit up and running');
    });

  });

});