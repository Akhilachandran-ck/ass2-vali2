var em=document.getElementById("em");
var pwd=document.getElementById("pwd");



var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");
var pa2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function change1()
{
 if((pa2.test(pwd.value)))

    { pwd.style.borderColor= "green";
    }
   else    if(pwd.value.length < 4) 
    {
      pwd.style.borderColor = "red" ;
   } 
   else{
    pwd.style.borderColor = "orange" ;


   }






}




function validate(){
    var pa2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let regEx =/^([a-zA-Z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if ((regEx.test(em.value)) && (pa2.test(pwd.value) ))
    {
      //  pwd.style.borderColor='black';


    return true;

    }

    


    else if(!(regEx.test(em.value)))
    
            {
                err1.innerText="Email-id is invalid";
              //  pwd.style.borderColor='red';

                return false; 
        

        
            }

    

    else if((regEx.test(em.value)))
        {

            err2.innerText="password is invalid";
            //pwd.style.borderColor='red';

            return false; 
    
    
    
        }

        else  if((pa2.test(pwd.value)))
            {
            
        
            err1.innerText=" Email-id is invalid";







            return false;

 
            }
            



    else  if(!(pa2.test(pwd.value)))
        {
        
    
        err2.innerText="password is invalid";
        return false; 
    
        }
        else{
        

            return false; 
        }
  

    }


    
    



