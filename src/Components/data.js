import React from 'react'

class Data extends React.Component{
    render(){
        return(
            <div className='dataDiv'>
                {this.props.title}
                <ul>
                    {this.props.items.map(x=><li key={x}>{x}</li>)}
                </ul>
            </div>
        )
    }
}

export default Data