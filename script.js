window.onload = function() {
   function doit(number)  {
      let num = Math.pow(number, 2)
      console.log(num)
      return num
     }

   
    
    function getPow(num,time){
      var number = num; 
      var num2 = 0;
      setTimeout(()=> {
       num2 = doit(number);
       (function(){setTimeout(()=> doit(num2), 3000);})();
      }, time);
    
   }

      getPow(2, 1000);

 }  
        
    
   
