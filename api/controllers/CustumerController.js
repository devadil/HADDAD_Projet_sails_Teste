/**
 * CustumerController
 *
 * @description :: Server-side logic for managing custumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  'new': function (req, res) {

    res.view();

  },


  'create': function (req, res, next) {


    Custumer.create(req.params.all(), function (err, custumer) {

      if (err) return next(err);

      res.redirect('/custumer/show/' + custumer.id);

    });
  },


  'show': function (req, res, next) {


    Custumer.findOne(req.param('id')).populateAll().exec(function (err, custumer) {
      if (err) return next();
      if (!custumer) return next();

      res.view({
        custumer: custumer
      });
    });
  },


  'index': function (req, res, next) {

    Custumer.find(function AllCustumers(err, custumers) {

      if (err) return next(err);
      if (!custumers) return next();

      res.view({

        custumers: custumers

      });

    })

  },

  'edite': function (req, res, next) {

    Custumer.findOne(req.param('id'), function custumerToEdite(err, custumer) {

      if (err) return next(err);
      if (!custumer) return next();

      res.view({
        custumer: custumer
      });

    });
  },

  'update': function (req, res, next) {

    Custumer.update(req.param('id'), req.params.all(), function custumerUpdated(err) {

      if (err) return res.redirect('/custumer/edite' + req.param('id'));

      res.redirect('/custumer/show/' + req.param('id'));


    });
  },

  'destroy': function (req, res, next) {
    Custumer.destroy(req.param('id')).exec(function () {

      res.redirect('/custumer');
    });


  }


};

