pragma solidity ^0.4.2;

contract ThaiSmartRefer {
  
    
    event alert(uint date_time, uint est_time, string name, 
            string sex, uint age, string personal_id, 
            uint src_id, uint dest_id, uint department_id,
            string symptom, uint severity);
    
    
    function add(uint date_time, uint est_time, string name, 
            string sex, uint age, string personal_id, 
            uint src_id, uint dest_id, uint department_id,
            string symptom, uint severity){
      
        alert(date_time, est_time, name, sex, age, 
                personal_id, src_id, dest_id, 
                department_id, symptom, severity);
    }
    
}