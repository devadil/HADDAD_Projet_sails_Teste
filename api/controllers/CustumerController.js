/**
 * CustumerController
 *
 * @description :: Server-side logic for managing custumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  'new' : function (req, res) {

    res.view() ;

  },


  'create' : function (req , res , next) {

    Custumer.create(req.params.all() , function (err , custumer) {

      if (err) return next (err) ;

      res.redirect('/custumer/show/' +  custumer.id) ;

    });

  } ,


  'show' : function (req , res , next) {

    Custumer.findOne(req.param('id') ,  function (err , custumer) {

      if (err) return next()  ;
      if (!custumer) return next() ;

      res.view({

        custumer :  custumer

      });

    })

  }












};

