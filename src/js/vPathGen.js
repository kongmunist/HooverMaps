    var path = JSON.parse(localStorage.path);
    
    var corners = [11,20,26,34,40,46,54,63,69,70,71,72,74,79,89,90,96,97]; 
    var leftTurns = [
        //first floor
        [83,82],[82,92],[71,82],[89,71],[93,89],[69,93],
        [97,69],[98,90],[90,96],[96,95],[95,98],
        [69,97],[73,69],[59,15],[16,59],[78,4],[61,5],
        [12,76],[66,62],[96,90],[89,96],[71,69],
        //second floor
        [32,21],[21,19],[35,33],[27,25],
        //third floor
        [52,41],[41,39],[55,53],[47,45],
    ];
    var rightTurns = [];
    function rightsidegen(){
        for(var i=0; i<leftTurns.length;i++){
            rightTurns[i] = [leftTurns[i][1],leftTurns[i][0]];
        }
    }
    var stairs = [67,68,80,81,84,85,57,60,88,91];
    var whichWay;


        function textGen(whichPath){
            var currentLocation = Number.parseInt(path[whichPath+1]);
            //document.getElementById("pathshow").innerHTML =  "   " + path.length+ "      " + currentLocation;
            rightsidegen();
            //alert(whichPath);
            if(whichPath+2 === path.length){
				document.getElementById("currentInstruction").innerHTML = "Go forward to the next pod and you'll see it! Look around!";
            }
            else if(whichPath+1 === path.length){
				document.getElementById("currentInstruction").innerHTML = "Thanks for using our project! Give us some feedback in the tab above?";
            }
            else if(currentLocation === 58 || (currentLocation === 14 && Number.parseInt(path[whichPath]) !==13) || (currentLocation === 75 && Number.parseInt(path[whichPath]) !==15)){
                document.getElementById("currentInstruction").innerHTML = "Go through these doors";
            }
            else if(corners.includes(currentLocation)){
                whichWay = JSON.stringify([Number.parseInt(path[whichPath]),Number.parseInt(path[whichPath+2])]);
                if(JSON.stringify(leftTurns).indexOf(whichWay) != -1){
                    //alert("toes");
                    if(currentLocation === 90){
                        document.getElementById("currentInstruction").innerHTML = "Take the next right";
                    }
                    document.getElementById("currentInstruction").innerHTML = "Take the next left";
                }
                else if(JSON.stringify(rightTurns).indexOf(whichWay) != -1){
                    document.getElementById("currentInstruction").innerHTML = "Take the next right";
                }
                else{
                    document.getElementById("currentInstruction").innerHTML = "Keep going forward through this junction";
                }
            }
            else if(stairs.includes(currentLocation)){//add which way to take the stairs
                document.getElementById("currentInstruction").innerHTML = "Take the stairs";
            }
            else{
                document.getElementById("currentInstruction").innerHTML = "Go down this hallway";
            }
            //alert("toes3");
		}