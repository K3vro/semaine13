angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
					
	
		$scope.questions = [
	
			{id:"01",
			 categorie:"Jeux videos",
			 question:"Quelle et le FPS le plus compétitif",
			 reponseA:"Counter strike",
			 reponseB:"Quake",
			 reponseC:"Call of Duty",
			 reponseD:"Mario kart",
			 correct:"reponseA",
			 bonneReponse:"Counter strike",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://img0.gtsstatic.com/wallpapers/ff1c720203d2f57027ee316c80079333_large.jpeg"
			},
			{id:"02",
			 categorie:"Counter strike",
			 question:"Combien de temp faut il pour planter la bomb en compétitif",
			 reponseA:"2.5sec",
			 reponseB:"3,5sec",
			 reponseC:"4.5sec",
			 reponseD:"5sec",
			 correct:"reponseB",
			 bonneReponse:"3.5sec",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"https://i.ytimg.com/vi/f7PHY6B2PA4/maxresdefault.jpg"
			},
			{id:"03",
			 categorie:"Counter strike",
			 question:"Quelle et le plus haut rank en Matchmaking compétitif",
			 reponseA:"Wood 1",
			 reponseB:"Master guardian",
			 reponseC:"Global Elite",
			 reponseD:"Challanger",
			 correct:"reponseC",
			 bonneReponse:"Global Elite",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			image:"http://images3.alphacoders.com/570/570391.jpg"
			},
			{id:"04",
			 categorie:"Jeux video",
			 question:"Qui est le best sur counter strike?",
			 reponseA:"K3vroJESUS",
			 reponseB:"Dief77",
			 reponseC:"Phalanx",
			 reponseD:"Poutine",
			 correct:"reponseA",
			 bonneReponse:"K3vroJESUS",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"http://images.akamai.steamusercontent.com/ugc/39742853663297840/F83A5E6CEA449E8DD262D0EDBD60C566C02F31AE/"
			},
			{id:"05",
			 categorie:"Jeu videos",
			 question:"Qui a crée Blade and Soul",
			 reponseA:"Window",
			 reponseB:"Vincare Corp",
			 reponseC:"Ubisoft",
			 reponseD:"NcSoft",
			 correct:"reponseD",
			 bonneReponse:"Ncsoft",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://image.noelshack.com/fichiers/2016/04/1454160316-107472.jpg"
			},
			{id:"06",
			categorie:"Manga",
			 question:"Quelle et l'auteur de Dragon Ball",
			 reponseA:"Eiichirō Oda",
			 reponseB:"Masashi Kishimoto",
			 reponseC:"lee seen",
			 reponseD:"Akira Toriyama",
			 correct:"reponseD",
			 bonneReponse:"Akira Toriyama",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://images.alphacoders.com/605/605799.jpg"
			},
			{id:"07",
			 categorie:"Manga",
			 question:"Qui et le capitaine de l'équipage de mugiwara?",
			 reponseA:"Zoro",
			 reponseB:"brook",
			 reponseC:"franky",
			 reponseD:"luffy",
			 correct:"reponseD",
			 bonneReponse:"luffy",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			 image:"http://wallpapercave.com/wp/SBbtHsS.jpg"
			},
			{id:"08",
			 categorie:"Manga",
			 question:"Dans Sword art Online saison 1 dans quelle type de jeux son il ?",
			 reponseA:"FPS",
			 reponseB:"MMORPG",
			 reponseC:"RTS",
			 reponseD:"MOBA",
			 correct:"reponseB",
			 bonneReponse:"MMORPG",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"http://aniwallpapers.com/wp-content/uploads/2015/08/Kirito-x-Asuna-HD-Wallpaper.jpg"
			}


		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

		
	function cat (){
		if ($scope.numquestion < 8){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="sport";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 8)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==80)
				{
					$scope.texte = "Super vous êtes trop fort !";
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				else if ($scope.categorie1 == 20)
				{
					$scope.texte = "Bien joué mais c'est pas terrible !";
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				else if ($scope.categorie2 == 20)
				{
					
					$scope.texte = "pas mal du tout !";
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				else if ($scope.categorie3 == 20)
				{
					$scope.texte = "Bien mais sans être bien !";
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				}
				else if ($scope.categorie4 == 20)
				{
					$scope.texte = "Bien mais sans être bien!";
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				else if ($scope.categorie1 == 15)
				{
					$scope.texte = "Vous avez presque réussie !"
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				
				}
				
				else if ($scope.categorie2 == 15)
				{
					$scope.texte = "Vous avez presque réussie !"
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				
				else if ($scope.categorie3 == 15)
				{
					$scope.texte = "Vous avez presque réussie !"
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				
				else if ($scope.categorie4 == 15)
				{
					$scope.texte = "Vous avez presque réussie !"
					$scope.image = "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11224181_894575400608965_5036117922990490401_o.jpg";
				}
				
			
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
	}]);
	
