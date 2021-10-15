import React, { Component } from 'react';

import './search-block.css';

export default class SearchBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <div className="form-floating mb-3 srcHero">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter Hero Name"
                    onChange={this.onUpdateSearch}
                ></input>
                <label htmlFor="floatingInput">Hero Name or Tags</label>
            </div>
        );
    }
}
