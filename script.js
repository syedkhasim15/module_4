var names=new Array();
names[0]="Tomas";
names[1]="John";
names[2]="Jason";
names[3]="Paul";
names[4]="Frank";
names[5]="Larry";
names[6]="Nicol";
names[7]="Peter";
names[8]="Harry";
names[9]="Jimmy";

for (var i = 0; i < names.length; i++){
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}