let resturent = ["Tikka","BBQ","Biryani","zinger","Karahi","Brost"];

    function mydish(){
        let items = document.getElementById("item");
        for(let i = 0; i < resturent.length; i++){
            items.innerText <= `${i + 1} ${resturent[i]} \n` 
           
        }
    }
    mydish();

    function userorder(){
        
        let userfood = document.querySelector("#food");
        for(let i=0; i < resturent.length; i++){
            // console.log(resturent[i]); 
            if(resturent[i] === userfood.value){
                console.log("available");
            }
            else{
                console.log("This food is not our menu");
            }
            break;
        }
    }