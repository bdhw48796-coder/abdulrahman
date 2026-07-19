var plyerOneChoice=`scissors`;
var plyerTwoChoice=`scissors`;
if ((plyerOneChoice==`rock`&&plyerTwoChoice==`paper`)||(plyerOneChoice==`paper`&&plyerTwoChoice==`rock`)) {
    console.log(true);
    
} else {
    console.log(false);
    
} 
    
if ((plyerOneChoice==`rock`&&plyerTwoChoice==`scissors`)||(plyerOneChoice==`scissors`&&plyerTwoChoice==`rock`)) {
    console.log(true);
    
} else{
    console.log(false);
    
}
if (plyerOneChoice==plyerTwoChoice) {
    console.log(true);
    
} else {
    console.log(false);
    
}
