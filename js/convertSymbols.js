function convertSymbols(string){
	var newString = string.replace('å', '\&aring');
	var newString = newString.replace('ä', '\&auml');
	var newString = newString.replace('ö', '\&ouml');
	return newString;
}