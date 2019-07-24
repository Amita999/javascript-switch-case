function switchInVal(val)
{
  var answer;  
    switch(val)
    {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break; 
        case 3:
            answer = "gamma";
            break; 
        case 4:            
            answer = "theta";
            break;   
        default:
            answer ="Na";               
            
        }
     return answer;   
     
    }

console.log("The switch case value is "+switchInVal(3));