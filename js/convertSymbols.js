function convertSymbols(string){
	var newString = string.split('å').join('\&aring');
	var newString = newString.split('ä').join('\&auml');
	var newString = newString.split('ö').join('\&ouml');
	var newString = newString.split('Å').join('\&Aring');
	var newString = newString.split('Ä').join('\&Auml');
	var newString = newString.split('Ö').join('\&Ouml');
	return newString;
}