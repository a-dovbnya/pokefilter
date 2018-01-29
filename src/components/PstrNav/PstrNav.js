import React, {PureComponent} from 'react';
import {connect} from "react-redux";

export class PstrNav extends PureComponent{
    render(){
        return (
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
        );
    }
}

export default connect(null, null)(PstrNav);