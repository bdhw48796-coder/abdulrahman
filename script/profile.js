var myProfile={
    userName:`abdo waleed`,
    age:19,
    study:function() {
        console.log(`computer since`);
        console.log(`uni of O6U /n up to level 2`);
        
    },
    level:2,
    skill:function(level) {
        if (level==1) {
            console.log(`skills is cpp`);
        } else if (level>1&&level<3){
            console.log(`skills is cpp and front end`);
            
        }else {
            console.error(`don't know`);    
        }
    }
    
}
console.table(myProfile);
console.log(myProfile.study());
console.log(myProfile.skill(2));

function calcSumNum(num){
    var result=0;
    for (var i=1;i<num;i++){
        num+=i;
    }
    result+=num;
    console.log(`result = ${result}`);
    
}
calcSumNum(3); 
(
    function(){
        var x=6;
        x=9;
        console.log(x);
        x=8;  
    }
)()       