window.onload = function() {
   function doit(number)  {
      let num = Math.pow(number, 2)
      console.log(num)
      return num
     }

   
    
    function getPow(num,time1,time2){
      var number = num; 
      var num2 = 0;
      setTimeout(()=> {
       num2 = doit(number);
       (function(){setTimeout(()=> doit(num2), time2);})();
      }, time1);
    
   }

      getPow(2, 1000);

 }  
        
    
   
