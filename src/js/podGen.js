function podGen(roomNum){
    //special cases
    var hall = roomNum.slice(0,1);
    var floor = Number.parseInt(roomNum.slice(1,2));
    var bRoom = Number.parseInt(roomNum.slice(1));
    var room = Number.parseInt(roomNum.slice(2));

    if(hall.toUpperCase() === "A"){ //A hall
        var aRooms = [1,2,3,4,5,6];
        if(floor === 1){
            return Math.floor((room+1)/4);
        }
        else if (floor === 2){
            if(aRooms.includes(room)){
                return 31;
            }
            else{
                return 17;
            }
        }
        else { //3rd floor
            if(aRooms.includes(room)){
                return 51;
            }
            else{
                return 37;
            }
        }
    }

    else if(hall.toUpperCase() === "B"){ //B hall
        room+=1;
        if(bRoom===127){return 5;}
        if(floor === 1){
            return Math.floor(room/4);
        }
        else if(floor === 2){
            return (Math.floor(room/4)+15);
        }
        else{
            return (Math.floor(room/4)+35);
        }
    }

    else if(hall.toUpperCase() === "C"){ //C hall
        if(floor===1){
            return Math.floor(room/4);
        }
        else if(floor===2){
            return (Math.floor(room/4)+15);
        }
        else{
            return (Math.floor(room/4)+35);
        }
        
    }

    else if(hall.toUpperCase() === "D"){ //D hall
        if(floor===1){
            return Math.floor((room+2)/4);
        }
        else if(floor===2){
            return (Math.floor((room+2)/4)+15);
        }
        else{
            return (Math.floor((room+2)/4)+35);
        }
    }

    else if(hall.toUpperCase() === "G"){ //G hall
        var weird = false;
        if(room===14){
            weird=true;
        }
        if(floor===1){
            if(weird){
                return 64;
            }
            return (Math.floor((room+1)/4)+60);
        }
        else if(floor===2){
            if(weird){
                return 35;
            }
            return (Math.floor((room+1)/4)+31);
        }
        else{
            if(weird){
                return 55;
            }
            return (Math.floor((room+1)/4)+51);
        }
    }
    
    else if(hall.toUpperCase() === "E"){ //E hall
        if(bRoom === 184 || bRoom === 185 || bRoom === 183){
            return 83;
        }

        if(bRoom === 182){
            return 82;
        }
        else if(bRoom>185 && bRoom<188){
            return room;
        }
        else if(bRoom>158 && bRoom<167){
            if(bRoom === 159){return 75;}
            if(bRoom === 162 || bRoom === 163){return 74;}
            return Math.floor(room/4);
        }
    }
    else{
        return "l";
    }
}