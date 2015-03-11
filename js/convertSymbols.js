function convertSymbols(string){
	var newString = string.replace('å', '&aring');
	var newString = string.replace('ä', '&auml');
	var newString = string.replace('ö', '&ouml');
	return newString;
}