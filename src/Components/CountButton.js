import React, { Component } from 'react';
import { properties } from '../properties.js';

class CountButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: null
        };
    }

    //get count and update everytime button is clicked
    getCount = () => {
        var url = properties.countsApi.replace('{namespace}', properties.nameSpace).replace('{key}', properties.apiKey);
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({count: data.value})

            })
            .catch((error) => console.log(error));
    }

    // populate on mount so we have current count
    componentDidMount(){
        var url = properties.countsApiGet.replace('{namespace}', properties.nameSpace).replace('{key}', properties.apiKey);
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({count: data.value})

            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" onClick={this.getCount}>Click to Count</button>
                <h2>
                    Current Count Is: {this.state.count}
                </h2>
            </div>

        );
    }
}

export default CountButton;