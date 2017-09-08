function commonElement(a,b) {
	var obj={}, matched = [];
	for(i=0;i<a.length;i++){
		obj[a[i]] = (obj[a[i]] || 0) + 1;
	}

	for(i=0;i<b.length;i++){
		var val = b[i];
		if(val in obj){
			matched.push(val);
		}
	}
	return matched;
}

var a=[2,3,5,7,11,13,15];
var b=[4,2,7,6,10];


console.log(commonElement(a,b));

