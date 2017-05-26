function randomString(length, specialChars=false) {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = length;
	var randomstring = '';

  if(specialChars){
    chars+='!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

module.exports = {
    randomString : randomString
}
