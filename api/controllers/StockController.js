/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res) {

    Custumer.findOne(req.param('id') , function (err , custumer) {

      if (err) return next(err) ;

      res.view({
        custumer : custumer
      })
    });


  },

  'create': function (req, res, next) {


    Stock.create(req.params.all(), function (err, stock) {

      if (err) return next(err);

      res.redirect('custumer/show/' + stock.entity )

    });
  },


};

