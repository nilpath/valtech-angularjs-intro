'use strict';

var restify = require('restify');

var server = restify.createServer({
  name: 'ListApi',
  version: '0.0.1'
});


//setup cors'
restify.CORS.ALLOW_HEADERS.push('sid');
server.use(restify.CORS());
server.use(restify.fullResponse());

server.use(restify.bodyParser());

var CurrentList = [
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 1,
    unit: 'dl',
    product: 'Matlagningsgrädde',
    price: 15,
    purchased: true
  },
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 1,
    unit: 'påse',
    product: 'bröd',
    price: 35,
    purchased: false
  }
];

//list items
server.get('/items', function getItems(req, res, next) {
  res.json(200, CurrentList);
  return next();
});

//create item
server.post('/items', function createItem(req, res, next){
  var newItem = {
    id: Math.random().toString(36).substr(3, 8),
    qty: req.body.qty,
    unit: req.body.unit,
    product: req.body.product,
    price: req.body.price,
    purchased: false
  };
  CurrentList.push(newItem);

  res.json(201, newItem);
  next();
});

//get specific item
server.get('/items/:id', function getSingleItem(req, res, next) {
  var id = req.params.id;

  CurrentList.forEach(function(item){
    if(item.id === id) {
      res.json(200, item);
      next();
    }
  });

  res.json(404, {error: 'Item not found.'});
  return next();
});

//update existing item
server.put('/items/:id', function updateItem(req, res, next){
  var id = req.params.id;

  CurrentList.forEach(function(item){
    if(item.id === id) {

      item.qty = req.body.qty ? req.body.qty : item.qty;
      item.unit = req.body.unit ? req.body.unit : item.unit;
      item.product = req.body.product ? req.body.product : item.product;
      item.price = req.body.price ? req.body.price : item.price;
      item.purchased = req.body.purchased ? req.body.purchased : item.purchased;

      res.json(200, item);
      next();
    }
  });

  res.json(404, {error: 'Item not found.'});
  return next();
});

//delete item
server.del('/items/:id', function deleteItem(req, res, next){
  var id = req.params.id,
      index;

  CurrentList.forEach(function(item, idx){
    if(item.id === id) {
      index = idx;
    }
  });

  if(index) {
    CurrentList.splice(index, 1);
    res.json(204, {id: id});
  }
  else {
    res.json(404, {error: 'Item not found.'});
  }
  return next();
});

server.listen(9001);
