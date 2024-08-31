var em=document.getElementById("em");
var pwd=document.getElementById("pwd");
var ph=document.getElementById("ph");

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
    var regEx =/^([a-zA-Z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    var ph1 = /^(0)?(\+)?(91)?[\-.]?\d{3}[\-.]?\d{3}[\-.]?\d{4}$/;



    if ((pa2.test(pwd.value)) && (regEx.test(em.value)) && (ph1.test(ph.value)))

    
        {

        return true;
        }

    
    else   if (!(regEx.test(em.value)))
           {

               err1.innerText="Email-id is invalid ";
               return false;


           }   
           else if (!(ph1.test(ph.value)))
            {

                err3.innerText="phone number is invalid ";
                return false;

            }
        
              else  if (!(pa2.test(pwd.value)))
                {

                    err2.innerText="password is invalid ";
                    
                    return false;

                }
               
                
        else{

        
            return false; 
        }


}






