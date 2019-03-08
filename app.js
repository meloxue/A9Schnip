
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var add = require('./routes/add');
var stores = require('./routes/stores');
var coupons = require('./routes/coupons');
var setting = require('./routes/setting');
var users = require('./routes/users');
var login = require('./routes/login');
var mongo = require('mongodb');
var mongoose = require('mongoose');
// Example route
// var user = require('./routes/user');

var app = express();

//mongoose.connect('localhost:27017/users'); causing an error

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add', add.addFriend);
//Add routes here // add store routes
app.get('/main', stores.maininfo);
app.get('/mainb', stores.mainbinfo);
app.get('/99ranch', stores.nineinfo);
app.get('/ralph', stores.ralphinfos);
app.get('/walmart', stores.walinfo);
app.get('/sprouts', stores.sprinfo);
app.get('/vons', stores.vonsinfo);
app.get('/costco', stores.cosinfo);
app.get('/cvs', stores.cvsinfo);
app.get('/traderjoes', stores.trinfo);
app.get('/zionmarket', stores.zioninfo);
app.get('/albertsons', stores.albertinfo);
app.get('/food4less', stores.foodinfo);
app.get('/pavillions', stores.pavinfo);
app.get('/wholefoods', stores.wholeinfo);
app.get('/northgate', stores.northinfo);
app.get('/swapmain', stores.swapinfo);
app.get('/addcard-b', stores.loyalinfo);
//Add routes here // add coupon handlebar
app.get('/beef', coupons.beef);
app.get('/fish', coupons.fish);
app.get('/beverage', coupons.beverage);
app.get('/snack', coupons.snack);
app.get('/other', coupons.other);
// app.get('/coupon_cat', coupons.couponscata);
// app.get('/coupon_expire', coupons.couponsexp);
// app.get('/couponjson', coupons.couponslist);
app.get('/chicken', coupons.chicken);
app.get('/checkout', coupons.couponsbar);
app.get('/barcodes', coupons.couponscodes);
app.post('/couponsRen', coupons.couponsRen);
app.post('/clearBarss', coupons.clearBarss);
//Add setting routes
//app.get('/preferences', setting.prefdisplay);
app.get('/addcard', setting.addloyalty);
app.get('/addcard-b', setting.loyalinfo);
app.get('/signout', setting.returntosignin);
//logout sign in
app.get('/rsvp', login.adminView);
app.post('/addRSVP', login.addRSVP);
app.post('/clearRSVP', login.clearRSVP);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
