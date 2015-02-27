var stations = [
				//Green Line
				{'id':"Slussen", 'x':18.072222, 'y':59.319444, 'year':1949, 'before':"Medborgarplatsen", 'line-color':"green"}, //Green and Red
				{'id':"Medborgarplatsen", 'x':18.073611, 'y':59.314306, 'year':1950, 'before':"Skanstull", 'line-color':"green"},
				{'id':"Skanstull", 'x':18.076111, 'y':59.307833, 'year':1950, 'before':"Gullmarsplan", 'line-color':"green"},
				{'id':"Gullmarsplan", 'x':18.081111, 'y':59.298889, 'year':1950, 'before':"Skärmarbrink", 'line-color':"green"},
					{'id':"Skärmarbrink", 'x':18.089806, 'y':59.295639, 'year':1950, 'before':"Sandsborg", 'line-color':"green"},
						{'id':"Sandsborg", 'x':18.092278, 'y':59.284806, 'year':1950, 'before':"Skogskyrkogården", 'line-color':"green"},
						{'id':"Skogskyrkogården", 'x':18.095278, 'y':59.278056, 'year':1950, 'before':"Tallkrogen", 'line-color':"green"},
						{'id':"Tallkrogen", 'x':18.086389, 'y':59.271667, 'year':1950, 'before':"Gubbängen", 'line-color':"green"},
						{'id':"Gubbängen", 'x':18.082222, 'y':59.262889, 'year':1950, 'before':"Hökarängen", 'line-color':"green"},
						{'id':"Hökarängen", 'x':18.082361, 'y':59.257778, 'year':1950, 'before':"Gubbängen", 'line-color':"green"},
				
					{'id':"Sockenplan", 'x':18.070417, 'y':59.283333, 'year':1951, 'before':"Gullmarsplan", 'line-color':"green"},

				{'id':"Råcksta", 'x':17.881861, 'y':59.354722, 'year':1952, 'before':"Åkeshov", 'line-color':"green"},
				{'id':"Åkeshov", 'x':17.923889, 'y':59.342083, 'year':1952, 'before':"Alvik", 'line-color':"green"},	
				{'id':"Alvik", 'x':17.9825, 'y':59.333333, 'year':1952, 'before':"Fridhemsplan", 'line-color':"green"},
				{'id':"Fridhemsplan", 'x':18.030556, 'y':59.332500, 'year':1952, 'before':"Slussen", 'line-color':"green"}, //Green and Blue
				
				{'id':"Bandhagen", 'x':18.049722, 'y':59.270556, 'year':1954, 'before':"Sockenplan", 'line-color':"green"},
				
				{'id':"T-Centralen", 'x':18.060833, 'y':59.331667, 'year':1957, 'before':"Slussen", 'line-color':"green"}, //Green, Red and Blue
				
				{'id':"Kärrtorp", 'x':18.114444, 'y':59.2845, 'year':1958, 'before':"Skärmarbrink", 'line-color':"green"},
				
				{'id':"Hagsätra", 'x':18.01325, 'y':59.262639, 'year':1960, 'before':"Bandhagen", 'line-color':"green"},
				
				{'id':"FarstaStrand", 'x':18.101111, 'y':59.235, 'year':1971, 'before':"Hökarängen", 'line-color':"green"},
				
				{'id':"Hässelbystrand", 'x':17.8325, 'y':59.361389, 'year':1980, 'before':"Råcksta", 'line-color':"green"},
				
				{'id':"Skarpnäck", 'x':18.133333, 'y':59.266806, 'year':1994, 'before':"Kärrtorp", 'line-color':"green"},
				
				
				
				//Blue line
						{'id':"Hjulsta", 'x':17.899722, 'y':59.396667, 'year':1975, 'before':"Tensta", 'line-color':"blue"},
						{'id':"Tensta", 'x':17.901944, 'y':59.393889, 'year':1975, 'before':"Rinkeby", 'line-color':"blue"},
					{'id':"Rinkeby", 'x':17.928611, 'y':59.388056, 'year':1975, 'before':"Rissne", 'line-color':"blue"},
						{'id':"Hallonbergen", 'x':17.969306, 'y':59.375417, 'year':1975, 'before':"Näckrosen", 'line-color':"blue"},
						{'id':"Näckrosen", 'x':17.983194, 'y':59.366667, 'year':1975, 'before':"SolnaCentrum", 'line-color':"blue"},
					{'id':"SolnaCentrum", 'x':17.998889, 'y':59.358750, 'year':1975, 'before':"VästraSkogen", 'line-color':"blue"},
				{'id':"VästraSkogen", 'x':18.003889, 'y':59.347500, 'year':1975, 'before':"Stadshagen", 'line-color':"blue"},
				{'id':"Stadshagen", 'x':18.017778, 'y':59.337222, 'year':1975, 'before':"Fridhemsplan", 'line-color':"blue"},
				{'id':"Rådhuset", 'x':18.041944, 'y':59.330278, 'year':1975, 'before':"Fridhemsplan", 'line-color':"blue"},
				
					{'id':"Akalla", 'x':17.917778, 'y':59.413889, 'year':1977, 'before':"Husby", 'line-color':"blue"},
					{'id':"Husby", 'x':17.926944, 'y':59.409444, 'year':1977, 'before':"Kista", 'line-color':"blue"},
					{'id':"Kista", 'x':17.941472, 'y':59.403667, 'year':1977, 'before':"Hallonbergen", 'line-color':"blue"},
					{'id':"Kungsträdgården", 'x':18.073333, 'y':59.330778, 'year':1977, 'before':"T-Centralen", 'line-color':"blue"},
				
					{'id':"Rissne", 'x':17.939722, 'y':59.375833, 'year':1985, 'before':"Duvbo", 'line-color':"blue"},
					{'id':"Duvbo", 'x':17.964444, 'y':59.367778, 'year':1985, 'before':"SundbybergsCentrum", 'line-color':"blue"},
					{'id':"SundbybergsCentrum", 'x':17.970556, 'y':59.360833, 'year':1985, 'before':"SolnaStrand", 'line-color':"blue"},
					{'id':"SolnaStrand", 'x':17.973889, 'y':59.354167, 'year':1985, 'before':"Huvudsta", 'line-color':"blue"},
					{'id':"Huvudsta", 'x':17.985556, 'y':59.349444, 'year':1985, 'before':"VästraSkogen", 'line-color':"blue"},
				

				//Red Line
				{'id':"Mariatorget", 'x':18.063333, 'y':59.316944, 'year':1964, 'before':"Slussen", 'line-color':"red"},
				{'id':"Zinkensdamm", 'x':18.05, 'y':59.317778, 'year':1964, 'before':"Mariatorget", 'line-color':"red"},
				{'id':"Hornstull", 'x':18.034167, 'y':59.315833, 'year':1964, 'before':"Zinkensdamm", 'line-color':"red"},
				{'id':"Liljeholmen", 'x':18.023056, 'y':59.310806, 'year':1964, 'before':"Hornstull", 'line-color':"red"},
				{'id':"Aspudden", 'x':18.001389	, 'y':59.306444, 'year':1964, 'before':"Liljeholmen", 'line-color':"red"},	
				{'id':"Örnsberg", 'x':17.989028, 'y':59.3055, 'year':1964, 'before':"Aspudden", 'line-color':"red"},
				{'id':"Midsommarkransen", 'x':18.012361, 'y':59.301667, 'year':1964, 'before':"Aspudden", 'line-color':"red"},
				{'id':"Telefonplan", 'x':17.997222, 'y':59.298333, 'year':1964, 'before':"Midsommarkransen", 'line-color':"red"},
				{'id':"Hägerstensåsen", 'x':17.979028, 'y':59.295417, 'year':1964, 'before':"Telefonplan", 'line-color':"red"},
				{'id':"Västertorp", 'x':17.966667, 'y':59.291111, 'year':1964, 'before':"Hägerstensåsen", 'line-color':"red"},
				{'id':"Fruängen", 'x':17.965, 'y':59.286111, 'year':1964, 'before':"Västertorp", 'line-color':"red"},
				
				{'id':"Axelsberg", 'x':17.974722, 'y':59.304333, 'year':1965, 'before':"Örnsberg", 'line-color':"red"},
				{'id':"Mälarhöjden", 'x':17.957361, 'y':59.301056, 'year':1965, 'before':"Axelsberg", 'line-color':"red"},
				{'id':"Bredäng", 'x':17.934028, 'y':59.294778, 'year':1965, 'before':"Mälarhöjden", 'line-color':"red"},
				{'id':"Sätra", 'x':17.921306, 'y':59.284944, 'year':1965, 'before':"Bredäng", 'line-color':"red"},
				{'id':"Östermalmstorg", 'x':18.074028, 'y':59.335, 'year':1965, 'before':"T-Centralen", 'line-color':"red"},
				
				{'id':"Skärholmen", 'x':17.906944, 'y':59.277139, 'year':1967, 'before':"Sätra", 'line-color':"red"},
				{'id':"Vårberg", 'x':17.889583, 'y':59.275833, 'year':1967, 'before':"Skärholmen", 'line-color':"red"},
				{'id':"Karlaplan", 'x':18.090833, 'y':59.338889, 'year':1967, 'before':"Östermalmstorg", 'line-color':"red"},
				{'id':"Gärdet", 'x':18.098611, 'y':59.347222, 'year':1967, 'before':"Karlaplan", 'line-color':"red"},
				{'id':"Ropsten", 'x':18.102222, 'y':59.357333, 'year':1967, 'before':"Gärdet", 'line-color':"red"},
				
				{'id':"Vårbygård", 'x':17.884306, 'y':59.264583, 'year':1972, 'before':"Vårberg", 'line-color':"red"},
				{'id':"Masmo", 'x':17.880278, 'y':59.249667, 'year':1972, 'before':"Vårbygård", 'line-color':"red"},
				{'id':"Fittja", 'x':17.860972, 'y':59.247472, 'year':1972, 'before':"Masmo", 'line-color':"red"},
				
				{'id':"Stadion", 'x':18.081667, 'y':59.342917, 'year':1973, 'before':"Östermalmstorg", 'line-color':"red"},
				{'id':"Tekniskahögskolan", 'x':18.071667, 'y':59.345694, 'year':1973, 'before':"Stadion", 'line-color':"red"},
				
				{'id':"Alby", 'x':17.844861, 'y':59.239028, 'year':1975, 'before':"Fittja", 'line-color':"red"},
				{'id':"Hallunda", 'x':17.825278, 'y':59.243333, 'year':1975, 'before':"Alby", 'line-color':"red"},
				{'id':"Norsborg", 'x':17.813056, 'y':59.243889, 'year':1975, 'before':"Hallunda", 'line-color':"red"},
				{'id':"Universitetet", 'x':18.054722, 'y':59.365694, 'year':1975, 'before':"Tekniskahögskolan", 'line-color':"red"},
				
				{'id':"Bergshamra", 'x':18.036528, 'y':59.3815, 'year':1978, 'before':"Universitetet", 'line-color':"red"},
				{'id':"Danderydssjukhus", 'x':18.041667, 'y':59.392222, 'year':1978, 'before':"Bergshamra", 'line-color':"red"},
				{'id':"MörbyCentrum", 'x':18.036667, 'y':59.398333, 'year':1978, 'before':"Danderydssjukhus", 'line-color':"red"},
				

            ];
			
function returnStations(){
	return stations
}