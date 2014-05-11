'use strict';

var restify = require('restify');

var server = restify.createServer({
  name: 'ListApi',
  version: '0.0.1'
});

var CurrentList = [
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 1,
    unit: 'dl',
    product: 'Matlagningsgrädde',
    price: '15',
    purchased: true
  },
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 4,
    unit: 'st',
    product: 'Äpplen',
    price: '20',
    purchased: true
  },
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 1,
    unit: 'påse',
    product: 'bröd',
    price: '35',
    purchased: false
  },
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 5,
    unit: 'st',
    product: 'röda paprikor',
    price: '15',
    purchased: false
  },
  {
    id: Math.random().toString(36).substr(3, 8),
    qty: 1,
    unit: 'st',
    product: 'Magnum Mandel',
    price: '18',
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
    qty: req.params.qty,
    unit: req.params.unit,
    product: req.params.product,
    price: req.params.price,
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

      item.qty = req.params.qty ? req.params.qty : item.qty;
      item.unit = req.params.unit ? req.params.unit : item.unit;
      item.product = req.params.product ? req.params.product : item.product;
      item.price = req.params.price ? req.params.price : item.price;
      item.purchased = req.params.purchased ? req.params.purchased : item.purchased;

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
    res.json(204, {id: id});
  }
  else {
    res.json(404, {error: 'Item not found.'});
  }
  return next();
});

server.listen(9001);
