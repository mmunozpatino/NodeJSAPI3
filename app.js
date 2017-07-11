var express = require('express'),
   bodyParser = require('body-parser'),// guarda lo que llega en req.body
   mongoose = require('mongoose'),
   methodOverride = require('method-override'),
   app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//ROUTES
/* OTRA MANERA DE HACERLO VIEJA
var router = express.Router();

router.get('/',function(req, res){
   res.send("Hola Mundo !");
});

app.use(router);
 */

//import models and controllers
var models = require('./models/client'),
   clientCtrl = require('./controllers/client');

//Index
app.get('/',function(req, res){
   res.send("Hola Mundo !");
});

//API routes
//OTRA MANERA DE HACERLO VIEJA
/*
var api = express.Router();

api.route('/clients') 
 .get(clientCtrl.findAll)
 .post(clientCtrl.add);

api.route('/clients/:id') 
 .get(clientCtrl.findById)
 .put(clientCtrl.update);

app.use('/api', api);
*/
app.route('/clients')
   .get(clientCtrl.findAll)
   .post(clientCtrl.add);

app.route('/clients/:id')
   .get(clientCtrl.findById)
   .put(clientCtrl.update)
   .delete(clientCtrl.delete);

//Conexion a Mongo
mongoose.connect('mongodb://localhost/clients', function(err, res){
   if(err) throw err;
   console.log('Connected de Database');
});

//Start Server
app.listen(3000, function(){
   console.log("Node running on port 3000");
});