function dataPreparation(myData, mode){

	var myArray = [];
	var i = 0;
				
	myData.forEach(function(d) {
	
		if(mode == 0){
		
			myArray.push(populationDensity(++myData[i].Vastermalm, $("#Vastermalm").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Vantor, $("#Vantor").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Farsta, $("#Farsta").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Bromma, $("#Bromma").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Hagersten, $("#Hagersten").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Hasselby, $("#Hasselby").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Skarpnack, $("#Skarpnack").attr("hektar")));
			myArray.push(populationDensity(++myData[i].St_Johannes, $("#St_Johannes").attr("hektar")));
			myArray.push(populationDensity(++myData[i].St_Matteus, $("#St_Matteus").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Adolf_Fredrik, $("#Adolf_Fredrik").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Brannkyrka, $("#Brannkyrka").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Skarholmen, $("#Skarholmen").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Engelbrekt, $("#Engelbrekt").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Sofia, $("#Sofia").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Hogalid, $("#Hogalid").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Hedvig_Eleonora, $("#Hedvig_Eleonora").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Katarina, $("#Katarina").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Vasterled, $("#Vasterled").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Vallingby, $("#Vallingby").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Spanga_Kista, $("#Spanga_Kista").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Oscar, $("#Oscar").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Maria_Magdalena, $("#Maria_Magdalena").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Enskede_Arsta, $("#Enskede_Arsta").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Gustav_Vasa, $("#Gustav_Vasa").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Domkyrkoforsamlingen, $("#Domkyrkoforsamlingen").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Solna_kommun, $("#Solna_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Danderyds_kommun, $("#Danderyds_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Botkyrka_kommun, $("#Botkyrka_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Huddinge_kommun, $("#Huddinge_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Sundbyberg_kommun, $("#Sundbyberg_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Jarfalla_kommun, $("#Jarfalla_kommun").attr("hektar")));
			myArray.push(populationDensity(++myData[i].Nacka_kommun, $("#Nacka_kommun").attr("hektar")));
		
		}
		else if(mode == 1){
		
			myArray.push(populationPeopleChange(++myData[i].Vastermalm, 			++myData[0].Vastermalm 				));
			myArray.push(populationPeopleChange(++myData[i].Vantor, 				++myData[0].Vantor 					));
			myArray.push(populationPeopleChange(++myData[i].Farsta, 				++myData[0].Farsta 					));
			myArray.push(populationPeopleChange(++myData[i].Bromma, 				++myData[0].Bromma 					));
			myArray.push(populationPeopleChange(++myData[i].Hagersten, 			++myData[0].Hagersten 				));
			myArray.push(populationPeopleChange(++myData[i].Hasselby, 			++myData[0].Hasselby 				));
			myArray.push(populationPeopleChange(++myData[i].Skarpnack, 			++myData[0].Skarpnack 				));
			myArray.push(populationPeopleChange(++myData[i].St_Johannes, 		++myData[0].St_Johannes 				));
			myArray.push(populationPeopleChange(++myData[i].St_Matteus, 			++myData[0].St_Matteus				));
			myArray.push(populationPeopleChange(++myData[i].Adolf_Fredrik, 		++myData[0].Adolf_Fredrik 			));
			myArray.push(populationPeopleChange(++myData[i].Brannkyrka, 			++myData[0].Brannkyrka 				));
			myArray.push(populationPeopleChange(++myData[i].Skarholmen, 			++myData[0].Skarholmen 				));
			myArray.push(populationPeopleChange(++myData[i].Engelbrekt, 			++myData[0].Engelbrekt 				));
			myArray.push(populationPeopleChange(++myData[i].Sofia, 				++myData[0].Sofia 					));
			myArray.push(populationPeopleChange(++myData[i].Hogalid, 			++myData[0].Hogalid 					));
			myArray.push(populationPeopleChange(++myData[i].Hedvig_Eleonora, 	++myData[0].Hedvig_Eleonora 			));
			myArray.push(populationPeopleChange(++myData[i].Katarina, 			++myData[0].Katarina 				));
			myArray.push(populationPeopleChange(++myData[i].Vasterled, 			++myData[0].Vasterled 				));
			myArray.push(populationPeopleChange(++myData[i].Vallingby, 			++myData[0].Vallingby 				));
			myArray.push(populationPeopleChange(++myData[i].Spanga_Kista, 		++myData[0].Spanga_Kista 			));
			myArray.push(populationPeopleChange(++myData[i].Oscar, 				++myData[0].Oscar 					));
			myArray.push(populationPeopleChange(++myData[i].Maria_Magdalena, 	++myData[0].Maria_Magdalena 			));
			myArray.push(populationPeopleChange(++myData[i].Enskede_Arsta, 		++myData[0].Enskede_Arsta 			));
			myArray.push(populationPeopleChange(++myData[i].Gustav_Vasa, 		++myData[0].Gustav_Vasa 				));
			myArray.push(populationPeopleChange(++myData[i].Domkyrkoforsamlingen,++myData[0].Domkyrkoforsamlingen 	));
			myArray.push(populationPeopleChange(++myData[i].Solna_kommun, 		++myData[0].Solna_kommun 			));
			myArray.push(populationPeopleChange(++myData[i].Danderyds_kommun, 	++myData[0].Danderyds_kommun 		));
			myArray.push(populationPeopleChange(++myData[i].Botkyrka_kommun,		++myData[0].Botkyrka_kommun			));
			myArray.push(populationPeopleChange(++myData[i].Huddinge_kommun, 	++myData[0].Huddinge_kommun				));
			myArray.push(populationPeopleChange(++myData[i].Sundbyberg_kommun, 	++myData[0].Sundbyberg_kommun 		));
			myArray.push(populationPeopleChange(++myData[i].Jarfalla_kommun, 	++myData[0].Jarfalla_kommun 			));
			myArray.push(populationPeopleChange(++myData[i].Nacka_kommun, 		++myData[0].Nacka_kommun 			));
		
		}	
		i++;
	});
	
	return myArray;

}