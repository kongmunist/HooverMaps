function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function dijk(startVert, endVert){
    
    var numVert=100;
    
    //making checked array
    var checked = new Array(numVert);
    for(var i=0; i<numVert; i++){
        checked[i]=0;
    }
    
    //making our distance array
    var distanceTo = [];
    for (var i=0;i<numVert;i++) {
       distanceTo[i] = [];
    }
    //fill it with zeros
    for(var i =0;i<numVert;i++){
        for(var j=0;j<numVert;j++){
            distanceTo[i][j]=0;
        }
    }
    //populate the array
    for(var i=11; i<14; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=1; i<4; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=61; i<63; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=17; i<29; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=32; i<36; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=37; i<49; i++){
        distanceTo[i][i+1] = 1;
    }
    for(var i=52; i<56; i++){
        distanceTo[i][i+1] = 1;
    }
    var connections = [
        [4,79], [79,78], [78,7], [7,8], [8,77], [77,9],
        [9,76], [76,11], [14,58], [58,75], [75,15], [75,99],
        [15,74], [74,16], [74,59], [59,98], [59,99], [98,97],
        [97,95], [95,94], [94,1], [97,90], [90,69], [69,96],
        [90,73], [89,71], [97,96], [96,93], [93,71], 
        [71,70], [70,92], [92,87], [70,82], [79,61], [63,66],
        [66,64], [64,65], [82,72], [72,83], [83,86], 
        
        [20,32], [31,17], [30,31], //2nd floor
        [40,52], [51,37], [50,51], //3rd floor
        [95,67], [67,30], [30,68], [68,50], //Stair 1
        [78,80], [80,21], [21,81], [81,41], //Stair 2
        [76,84], [84,25], [25,85], [85,45], //Stair 3
        [14,57], [57,29], [29,60], [60,49], //Stair 4
        [65,88], [88,36], [36,91], [91,56], //Stair 5
    ];
    for (var i = 0; i<connections.length; i++){
        distanceTo[connections[i][0]][connections[i][1]] = 1;
    }
    distanceTo[69][89] = 2;
    distanceTo[14][58] = 2;
    distanceTo[75][58] = 2;
    distanceTo[99][59] = 3;
    distanceTo[98][59] = 3;
    distanceTo[98][97] = 3;



    //transposing and adding distanceTo to itself
    var EvildistanceTo = transpose(distanceTo);
    for(var i=0;i<numVert;i++){
        for(var j=0;j<numVert;j++){
            distanceTo[i][j] += EvildistanceTo[i][j];
        }
    }
    
    //making distances-to-everywhere-starting-at-one-place array
    var shortPathTo = [];
     for(var i =0;i<numVert;i++){
        shortPathTo[i]=Number.MAX_SAFE_INTEGER;
     }
     shortPathTo[startVert] = 0;

     //making what-path-should-i-take-from-this-node-to-get-to-end-node array
     var pathFrom = [];
     for(var i=0;i<numVert;i++){
        pathFrom[i]=-1;
     }

     //loops of death:
     
     for(var i=0;i<numVert;i++){
        
        //find next unvisited node with shortestPathTo
        var min = Number.MAX_SAFE_INTEGER;
        var min_index = 0;
        
        for(var j=0;j<numVert;j++){
            if(checked[j]===0 && shortPathTo[j]<min){
                min=shortPathTo[j];
                min_index = j;
            }
        }
        checked[min_index]=1;
        
        for(var j=0;j<numVert;j++){
            if(distanceTo[min_index][j] !== 0 && checked[j] === 0 && distanceTo[min_index][j]+shortPathTo[min_index]<shortPathTo[j]){
                shortPathTo[j] = distanceTo[min_index][j]+shortPathTo[min_index];
                pathFrom[j]=min_index;
            }
        }
     }

     
     var nextStep=endVert;//generate path to get to endVert. You could replace endVert with a random number for fun. I guess.

     var path = [];
     i=0;

     //processing the path, and the array it generates to make it friendlier
     while(nextStep !== -1){
        path[i]=pathFrom[nextStep];
        nextStep=path[i];
        i=i+1;
     }
     path.splice(i-1,1);
     path.reverse();
     path[i-1]=endVert;
     
     //store that path! Access it later!
     localStorage.path=JSON.stringify(path);
}