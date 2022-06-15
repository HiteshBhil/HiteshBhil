import React,{usestate} from 'react';

function Countryfun(props){
    const[CountryName,setcountryName]=usestate('india');
    const changeCountry=()=>{
        set CountryName('us');
}
return(
    <div>
        <p>
            {CountryName}
        </p>
        <button onClick={()=>changecountry()}>changeCountry</button>
    </div>
)

export default Country; 