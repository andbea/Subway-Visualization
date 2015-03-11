function convertSymbols(string){
	var newString = string.split('å').join('&#229');
	var newString = newString.split('ä').join('&#228');
	var newString = newString.split('ö').join('&#246');
	var newString = newString.split('Å').join('&#197');
	var newString = newString.split('Ä').join('&#196');
	var newString = newString.split('Ö').join('&#214');
	return newString;
}