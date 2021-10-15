import React, { Component } from 'react';

import './hero-page.css';

export default class HeroPage extends Component {
    render() {
        console.log(this.props.match.params.name);
        return (
            <div className="hero_ttl">
                <h1>{this.props.match.params.name}</h1>
            </div>
        );
    }
}
