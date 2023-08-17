let head = document.getElementById('head');
let reloadBtn = document.getElementById('reloadBtn');
let content = [];
let tmp = 'X';

function getId(id){
    let element = document.getElementById(id);
    if(tmp === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        tmp = 'O';
        head.innerHTML = 'O';
    }
    else if(tmp === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        tmp = 'X';
        head.innerHTML = 'X';
    } 
    winner();
    حالةالتعادل();
}

function end(num1 , num2 , num3){
        head.innerHTML = `${content[num1]} winner`;
        document.getElementById('content' + num1).style.background = 'black';
        document.getElementById('content' + num2).style.background = 'black';
        document.getElementById('content' + num3).style.background = 'black';
        reloadgame();
        colorBody();
}

function winner(){
    for(let i = 1; i < 10; i++){
        content[i] = document.getElementById('content' + i).innerHTML;
    }

    if(content[1] ==  content[2] && content[2] == content[3] && content[1] != ''){
        end(1,2,3);
    }

    if(content[4] == content[5] && content[5] == content[6] && content[4] != ''){
       end(4,5,6);
    }
    if(content[7] == content[8] && content[8] == content[9] && content[7] != ''){
        end(7,8,9);
    }

    if(content[1] == content[4] && content[4] == content[7] && content[1] != ''){
        end(1,4,7);
    }

    if(content[2] == content[5] && content[5] == content[8] && content[2] != ''){
        end(2,5,8);
    }

    if(content[3] == content[6] && content[6] == content[9] && content[3] != ''){
        end(3,6,9);
    }

    if(content[1] == content[5] && content[5] == content[9] && content[1] != ''){
        end(1,5,9);
    }

    if(content[3] == content[5] && content[5] == content[7] && content[3] != ''){
        end(3,5,7);
    }
}
    
function reloadgame(){
    let stop = 0;
    let time = setInterval(() => {
        if(stop == 3){
            this.clearInterval(time);
            location.reload();
        }else{
            head.innerHTML += '.'
            stop++;
        }
        
    }, 700);
}

function colorBody(){   
    let array = ['#444', '#445' , '#446' , '#447' , '#448' , '#449' , '#4410' , 'darkgreen' ,'green' , '#4ec915'  ,'#4ac411'  ,'#61ce2f'  ];
    let i = 0;
   
         let clear = setInterval(function(){
             if(i == 11){
                clearInterval(clear);
             }else{
                document.body.style.background = array[i];
                i++;
             }
        },200)
    
      
        

}
function حالةالتعادل(){
    if( content[1] != '' && content[2] != '' && content[3] != '' && content[4] != ''  &&  content[5] != ''  && content[6] != '' && content[7] != ''  &&  content[8] != '' &&  content[9] != '' && head.innerHTML.includes('winner') == false){
            head.innerHTML = `تعادل`;
            let i = 0;
            let clear = setInterval(function(){
                if(i == 3){
                   clearInterval(clear);
                   location.reload();
                }else{
                    head.innerHTML += `.`;
                    i++;
                }
           },700)

        }
}

reloadBtn.addEventListener('click' ,function(){
    window.location.reload();
})