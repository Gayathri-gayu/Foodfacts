// let fs=require('fs');
// let lineReader = require('readline').createInterface({
//  input : fs.createReadStream('data/FoodFacts.csv') 
// });

// let i=0;
// let linearray=[];
// let headerline = 0;
// let cIndex=0,saltIndex=0,sugarIndex=0,fatIndex=0,protienIndex=0,carboIndex=0;
// let countryArray = ['Netherlands', 'Canada', 'United Kingdom' , 'United States' , 'Australia' , 'France' , 'Germany' , 'Spain', 'South Africa'];
// let north = ['United Kingdom', 'Denmark', 'Sweden','Norway'];
// let central  = ['France', 'Belgium', 'Germany', 'Switzerland','Netherlands'];
// let South = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia','Albania'];
// let sugarArray=new Array(countryArray.length).fill(0);
// let	saltArray=new Array(countryArray.length).fill(0);
// let nfatArray =0;
// let nprotienArray=0;
// let ncarboArray =0;
// let cfatArray =0;
// let cprotienArray =0;
// let ccarboArray =0;
// let sfatArray =0;
// let sprotienArray=0;
// let scarboArray=0;
// let exist = false,existn=false,existc=false,exists=false;
// let jsonArray = [];
// let Europe=[];
// lineReader.on('line',function(line)
// {
// 	linearray = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); 

// 	if(headerline==0)
// 	{
// 		cIndex = linearray.indexOf("countries_en");
// 		saltIndex = linearray.indexOf("salt_100g");
// 		sugarIndex = linearray.indexOf("sugars_100g");
// 		protienIndex = linearray.indexOf("proteins_100g");
// 		carboIndex = linearray.indexOf("carbohydrates_100g");
// 		fatIndex = linearray.indexOf("fat_100g");
// 		headerline++;
// 	}	
// 		exist = countryArray.includes(linearray[cIndex]);	
// 		existn = north.includes(linearray[cIndex]);
// 		existc = central.includes(linearray[cIndex]);
// 		exists = South.includes(linearray[cIndex]);
// 	if(exist)
// 	{
// 		let index = countryArray.indexOf(linearray[cIndex]);
// 		let salt = linearray[saltIndex];
// 		let sugar=linearray[sugarIndex];

// 		if(salt=="")
// 			salt=0;
// 		if(sugar=="")
// 			sugar=0;

// 		saltArray[index]+=parseFloat(salt);
// 		sugarArray[index]+=parseFloat(sugar);
// 		exist = false;
// 	}
// 	if(existn)
// 	{
// 		let nfat = linearray[fatIndex];
// 		let nprotien=linearray[protienIndex];
// 		let ncarbo=linearray[carboIndex];
// 		if(nfat=="")
// 			nfat=0;
// 		if(ncarbo=="")
// 			ncarbo=0;
// 		if(nprotien=="")
// 			nprotien=0;

// 		nfatArray+=parseFloat(nfat);
// 		ncarboArray+=parseFloat(ncarbo);
// 		nprotienArray+=parseFloat(nprotien);
// 		existn=false;
// 	}
// 	if(existc)
// 	{
// 		let cfat = linearray[fatIndex];
// 		let cprotien=linearray[protienIndex];
// 		let ccarbo=linearray[carboIndex];
// 		if(cfat=="")
// 			cfat=0;
// 		if(cprotien=="")
// 			cprotien=0;
// 		if(ccarbo=="")
// 			ccarbo=0;

// 		cfatArray+=parseFloat(cfat);
// 		cprotienArray+=parseFloat(cprotien);
// 		ccarboArray+=parseFloat(ccarbo);
// 		existc=false;
// 	}
// 	if(exists)
// 	{
// 		let sfat = linearray[fatIndex];
// 		let sprotien=linearray[protienIndex];
// 		let scarbo=linearray[carboIndex];
// 		if(sfat=="")
// 			sfat=0;
// 		if(sprotien=="")
// 			sprotien=0;
// 		if(scarbo=="")
// 			scarbo=0;

// 		sfatArray+=parseFloat(sfat);
// 		sprotienArray+=parseFloat(sprotien);
// 		scarboArray+=parseFloat(scarbo);
// 		exists=false;
// 	}
	
// 	});
// 	lineReader.on('close',function ()
// 	{
// 		for(let i=0;i<countryArray.length;i++)
// 		{
// 			let obj = {};
// 			obj["country"] = countryArray[i];
// 			obj["salt"] = saltArray[i];
// 			obj["sugar"] = sugarArray[i];
// 			jsonArray.push(obj);
// 		}
		
// 			let nobj = {};
// 			nobj["country"] = "NorthEurope";
// 			nobj["Fat"] = nfatArray;
// 			nobj["Protien"] = nprotienArray;
// 			nobj["carbohydrates"] = ncarboArray;
// 			Europe.push(nobj);

// 			let cobj= {};
// 			cobj["country"] = "CentralEurope";
// 			cobj["Fat"] = cfatArray;
// 			cobj["Protien"] = cprotienArray;
// 			cobj["carbohydrates"] = ccarboArray;
// 			Europe.push(cobj);

// 			let sobj={};
// 			sobj["country"] = "SouthEurope";
// 			sobj["Fat"] = sfatArray;
// 			sobj["Protien"] = sprotienArray;
// 			sobj["carbohydrates"] = scarboArray;
// 			Europe.push(sobj);

// /*writing into json file*/
// 		fs.writeFileSync('output/convertedTojson.json', JSON.stringify(jsonArray),'utf-8');
// 		fs.writeFileSync('output/Multi-seriesline.json',JSON.stringify(Europe),'utf-8');
		
// 	});


	const fs=require('fs');

const rl=require('readline').createInterface(fs.createReadStream('data/FoodFacts.csv'));

let countryArray = [{country:'Netherlands',sugar:0,salt:0}, {country:'Canada',sugar:0,salt:0}, {country:'United Kingdom',sugar:0,salt:0} , {country:'United States',sugar:0,salt:0} ,{country:'Australia',sugar:0,salt:0} , {country:'France',sugar:0,salt:0} , {country:'Germany',sugar:0,salt:0} , {country:'Spain',sugar:0,salt:0}, {country:'South Africa',sugar:0,salt:0}];

let northRegion = ['United Kingdom', 'Denmark', 'Sweden','Norway'];

let centralRegion  = ['France', 'Belgium', 'Germany', 'Switzerland','Netherlands'];

let SouthRegion = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia','Albania'];

let regions=[];

let flag=true,country=0,salt=0,sugar=0,protein=0,carbo=0,fat=0;



function processData(lineArray,regionName){

    let flag=true;

    regions.forEach(function(region){

        if(region.Region===regionName){

           region.Protein+= +lineArray[protein];

           region.Carbohydrate+= +lineArray[carbo];

           region.Fat+= +lineArray[fat];

           flag=false;

          }

    });

    if(flag){

          regions.push({

          Region:regionName,

          Protein : +lineArray[protein],

          Carbohydrate : +lineArray[carbo],

          Fat : +lineArray[fat]

         });

       }

    }



/*On line event*/

rl.on('line',function(row){

let lineArray=row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);



    if(flag){

	    country = lineArray.indexOf("countries_en");

		salt = lineArray.indexOf("salt_100g");

		sugar = lineArray.indexOf("sugars_100g");

        protein = lineArray.indexOf("proteins_100g");

		carbo = lineArray.indexOf("carbohydrates_100g");

		fat = lineArray.indexOf("fat_100g");

	    flag=false;

    }



    /*First Json File*/

    countryArray.forEach(function(name){

        if(name.country==lineArray[country]){

          if(lineArray[sugar].length)         

             name.sugar += parseFloat(lineArray[sugar]);

          if(lineArray[salt].length)

             name.salt += parseFloat(lineArray[salt]);

        }

    });



    /*Second JSON file*/

    if(northRegion.includes(lineArray[country])){

        processData(lineArray,"northRegion");

	}

    else if(centralRegion.includes(lineArray[country])){

        processData(lineArray,"centralRegion");

    }

    else if(SouthRegion.includes(lineArray[country])){

        processData(lineArray,"southRegion");

    }

});



rl.on('close',function(){

    rl.close();

		fs.writeFile('output/convertedTojson.json', JSON.stringify(countryArray) , 'utf-8',function(){

			console.log('success');

		});

        	fs.writeFile('output/Multi-seriesline.json', JSON.stringify(regions) , 'utf-8',function(){

			console.log('success');

		});

		

});