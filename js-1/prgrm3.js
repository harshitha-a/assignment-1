var runs=[1,2,4,1,3,1,1,4,6,0,0,1,1,1,2,1,0,6,0,0,1,2,1,0,0,4,0,1,0];

function score(a) {
	var i,dravid=[], sachin=[];
for(i=0;i<runs.length;i++){
if(runs[i]%2==1){
	return dravid += runs[i];	
}
else {
	return sachin += runs[i];
}
}
}
console.log(score(runs));

