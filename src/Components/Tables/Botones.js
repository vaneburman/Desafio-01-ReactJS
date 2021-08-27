import React, { Component } from 'react';


export default class Botones extends Component {
       
    render(){
        const { data } = this.props;
        return(
            
                data.map((t => 
                    <td>
                        <button>{t}</button>
                    </td>
                ))
            
        
        )

    }
}