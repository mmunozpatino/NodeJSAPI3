var mongoose = require('mongoose');
var Client = mongoose.model('Client');

//GETALL
exports.findAll = function(req, res){
   Client.find(function(err, clients){
      if(err) res.send(500, err.message);
      console.log('GETALL');
      res.status(200).jsonp(clients);
   })
}

//GETBYID
exports.findById = function(req, res){
   Client.findById(req.params.id, function(err, client){
      if(err) return res.send(500, err.message);
      console.log('/GETBYID');
      res.status(200).jsonp(client);
   });
};

//POSTNEW
exports.add = function(req, res){
   console.log('POSTNEW');
   console.log(req.body);
   var client = new Client({
      name: req.body.name,
      email: req.body.email,
      genre: req.body.genre
   });
   client.save(function(err, client){
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(client);
   });
};

//PUTOLD
exports.update = function(req,res){
   Client.findById(req.params.id, function(err, client){
      client.name = req.body.name;
      client.email = req.body.email;
      client.genre = req.body.genre;
      client.save(function(err){
         if(err) return res.send(500, err.message);
         res.status(200).jsonp(client);
      });
   });
};

//DELETE
exports.delete = function(req, res){
   Client.findById(req.params.id, function(err, client){
      client.remove(function(err){
         if(err) return res.send(500, err.message);
         res.json({ message: 'Borrado!'});
      });
   });
};