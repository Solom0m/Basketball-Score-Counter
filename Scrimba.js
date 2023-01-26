let count = 0
let total = 0

let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")


    //LOGO functions
    function add(){ 
        count += 1
        countEl.textContent = count
        
        }

    function attach(){
        count += 2
        countEl.textContent = count

    }


    function join(){
        count += 3
        countEl.textContent = count

    }

    function reShuffle(){
        countEl.textContent=0
        count=0
    }



//  MOVE functions
    function sum(){
        total += 1
        totalEl.textContent = total
    }

    function compute(){
        total += 2
        totalEl.textContent = total
    }

    function appends(){
        total += 3
        totalEl.textContent = total
        
    }
    function reset(){
        totalEl.textContent=0
        total=0
    }