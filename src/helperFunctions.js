module.exports = function readAsText(file,callback) {
  var reader = new FileReader();
  reader.onloadend = function() {
   callback(reader.result);
  };
  reader.readAsText(file);
}
