function vowels(str) {
	var string ='';
	for (var i = 0; i < str.length; i++) {
		if (str[i]!=='a' && str[i]!=='e' && str[i]!=='i' && str[i]!=='o' && str[i]!=='u') {
			string +=str[i];
		}
	}
	return string;
}

console.log(vowels("Programming is fun"));