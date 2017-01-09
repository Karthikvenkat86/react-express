
exports.defaultURL = function(req, res){
  res.render('index', { name: 'John' });
};

exports.sendOne = function(req, res){
  res.render('pageOne');
};

