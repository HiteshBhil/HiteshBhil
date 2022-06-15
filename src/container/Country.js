import React, {Component} from 'react';

class Country extends Component{
    constructor(props) {
        super(props);

        this.state={
            CountryName : 'india'
        }
    }
    changeCountry=()=>{
        this.setState({
            CountryName : 'us'
        });
    }

    vender(){
        <div><p>{this.state.CountryName}</p></div>
        <button onclick={()=> this.changeCountry()}>change Country</button>
    }
}
export default Country;