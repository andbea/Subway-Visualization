function fillMap(myData, mode, myColorscale,n){
	
	if(!(myData[n] == undefined)){
		
		if(mode == 0){
		
			$("#Vastermalm").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Vastermalm, $("#Vastermalm").attr("hektar")) );});
			$("#Vantor").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Vantor, $("#Vantor").attr("hektar")) );});
			$("#Farsta").children("path").attr("fill", function(d,i){ return myColorscale( 					populationDensity(++myData[n].Farsta, $("#Farsta").attr("hektar")) );});
			$("#Bromma").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Bromma, $("#Bromma").attr("hektar")) );});
			$("#Hagersten").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Hagersten, $("#Hagersten").attr("hektar")) );});
			$("#Hasselby").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Hasselby, $("#Hasselby").attr("hektar")) );});
			$("#Skarpnack").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Skarpnack, $("#Skarpnack").attr("hektar")) );});
			$("#St_Johannes").children("polygon").attr("fill", function(d,i){ return myColorscale(	 		populationDensity(++myData[n].St_Johannes, $("#St_Johannes").attr("hektar")) );});
			$("#St_Matteus").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].St_Matteus, $("#St_Matteus").attr("hektar")) );});
			$("#Adolf_Fredrik").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Adolf_Fredrik, $("#Adolf_Fredrik").attr("hektar")) );});
			$("#Brannkyrka").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Brannkyrka, $("#Brannkyrka").attr("hektar")) );});
			$("#Skarholmen").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Skarholmen, $("#Skarholmen").attr("hektar")) );});
			$("#Engelbrekt").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Engelbrekt, $("#Engelbrekt").attr("hektar")) );});
			$("#Sofia").children("polygon").attr("fill", function(d,i){ return myColorscale( 					populationDensity(++myData[n].Sofia, $("#Sofia").attr("hektar")) );});
			$("#Hogalid").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Hogalid, $("#Hogalid").attr("hektar")) );});
			$("#Hedvig_Eleonora").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Hedvig_Eleonora, $("#Hedvig_Eleonora").attr("hektar")) );});
			$("#Katarina").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Katarina, $("#Katarina").attr("hektar")) );});
			$("#Vasterled").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Vasterled, $("#Vasterled").attr("hektar")) );});
			$("#Vallingby").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Vallingby, $("#Vallingby").attr("hektar")) );});
			$("#Spanga_Kista").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Spanga_Kista, $("#Spanga_Kista").attr("hektar")) );});
			$("#Oscar").children("polygon").attr("fill", function(d,i){ return myColorscale( 					populationDensity(++myData[n].Oscar, $("#Oscar").attr("hektar")) );});
			$("#Maria_Magdalena").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Maria_Magdalena, $("#Maria_Magdalena").attr("hektar")) );});
			$("#Enskede_Arsta").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Enskede_Arsta, $("#Enskede_Arsta").attr("hektar")) );});
			$("#Gustav_Vasa").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Gustav_Vasa, $("#Gustav_Vasa").attr("hektar")) );});
			$("#Domkyrkoforsamlingen").children("polygon").attr("fill", function(d,i){ return myColorscale( 	populationDensity(++myData[n].Domkyrkoforsamlingen, $("#Domkyrkoforsamlingen").attr("hektar")) );});
			$("#Solna_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationDensity(++myData[n].Solna_kommun, $("#Solna_kommun").attr("hektar")) );});
			$("#Danderyds_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Danderyds_kommun, $("#Danderyds_kommun").attr("hektar")) );});
			$("#Botkyrka_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Botkyrka_kommun, $("#Botkyrka_kommun").attr("hektar")) );});
			$("#Huddinge_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Huddinge_kommun, $("#Huddinge_kommun").attr("hektar")) );});
			$("#Sundbyberg_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Sundbyberg_kommun, $("#Sundbyberg_kommun").attr("hektar")) );});
			$("#Jarfalla_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationDensity(++myData[n].Jarfalla_kommun, $("#Jarfalla_kommun").attr("hektar")) );});
			$("#Nacka_kommun").children("path").attr("fill", function(d,i){ return myColorscale( 				populationDensity(++myData[n].Nacka_kommun, $("#Nacka_kommun").attr("hektar")) );});
		}
		else if(mode == 1){

		$("#Vastermalm").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].Vastermalm, 			++myData[0].Vastermalm				))});
			$("#Vantor").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(			++myData[n].Vantor, 				++myData[0].Vantor 						))});
			$("#Farsta").children("path").attr("fill", function(d,i){ return myColorscale( 					populationPeopleChange(			++myData[n].Farsta, 				++myData[0].Farsta 						))});
			$("#Bromma").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(			++myData[n].Bromma, 				++myData[0].Bromma 						))});
			$("#Hagersten").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Hagersten, 				++myData[0].Hagersten 				))});
			$("#Hasselby").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Hasselby, 				++myData[0].Hasselby 					))});
			$("#Skarpnack").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Skarpnack,				++myData[0].Skarpnack					))});
			$("#St_Johannes").children("polygon").attr("fill", function(d,i){ return myColorscale(	 		populationPeopleChange(			++myData[n].St_Johannes, 			++myData[0].St_Johannes 					))});
			$("#St_Matteus").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].St_Matteus, 			++myData[0].St_Matteus 					))});
			$("#Adolf_Fredrik").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(		++myData[n].Adolf_Fredrik, 			++myData[0].Adolf_Fredrik 			))});
			$("#Brannkyrka").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].Brannkyrka, 			++myData[0].Brannkyrka					))});
			$("#Skarholmen").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].Skarholmen, 			++myData[0].Skarholmen 					))});
			$("#Engelbrekt").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].Engelbrekt, 			++myData[0].Engelbrekt 					))});
			$("#Sofia").children("polygon").attr("fill", function(d,i){ return myColorscale( 					populationPeopleChange(		++myData[n].Sofia, 					++myData[0].Sofia			))});
			$("#Hogalid").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(			++myData[n].Hogalid, 				++myData[0].Hogalid 						))});
			$("#Hedvig_Eleonora").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(			++myData[n].Hedvig_Eleonora, 		++myData[0].Hedvig_Eleonora 				))});
			$("#Katarina").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Katarina, 				++myData[0].Katarina					))});
			$("#Vasterled").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Vasterled, 				++myData[0].Vasterled 				))});
			$("#Vallingby").children("polygon").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Vallingby, 				++myData[0].Vallingby 				))});
			$("#Spanga_Kista").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(		++myData[n].Spanga_Kista, 			++myData[0].Spanga_Kista 				))});
			$("#Oscar").children("polygon").attr("fill", function(d,i){ return myColorscale( 					populationPeopleChange(		++myData[n].Oscar, 					++myData[0].Oscar					))});
			$("#Maria_Magdalena").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(			++myData[n].Maria_Magdalena, 		++myData[0].Maria_Magdalena				))});
			$("#Enskede_Arsta").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(		++myData[n].Enskede_Arsta, 			++myData[0].Enskede_Arsta			))});
			$("#Gustav_Vasa").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(			++myData[n].Gustav_Vasa, 			++myData[0].Gustav_Vasa					))});
			$("#Domkyrkoforsamlingen").children("polygon").attr("fill", function(d,i){ return myColorscale( 	populationPeopleChange(		++myData[n].Domkyrkoforsamlingen, 	++myData[0].Domkyrkoforsamlingen 	))});
			$("#Solna_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 			populationPeopleChange(		++myData[n].Solna_kommun, 			++myData[0].Solna_kommun 			))});
			$("#Danderyds_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(		++myData[n].Danderyds_kommun, 		++myData[0].Danderyds_kommun 		))});
			$("#Botkyrka_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(			++myData[n].Botkyrka_kommun, 		++myData[0].Botkyrka_kommun 			))});
			$("#Huddinge_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(			++myData[n].Huddinge_kommun, 		++myData[0].Huddinge_kommun 			))});
			$("#Sundbyberg_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(		++myData[n].Sundbyberg_kommun, 		++myData[0].Sundbyberg_kommun 			))});
			$("#Nacka_kommun").children("path").attr("fill", function(d,i){ return myColorscale( 				populationPeopleChange(		++myData[n].Nacka_kommun, 			++myData[0].Nacka_kommun 				))});
			$("#Jarfalla_kommun").children("polygon").attr("fill", function(d,i){ return myColorscale( 		populationPeopleChange(			++myData[n].Jarfalla_kommun,		++myData[0].Jarfalla_kommun			))});
		
		}
	}
}