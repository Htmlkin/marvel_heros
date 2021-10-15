import React, { Component } from 'react';
import './cards-list-item.css';
import { withRouter } from 'react-router-dom';

// Cards List

class CardsListItem extends Component {
    render() {
        const { name, description, tags /*, onDelete */ } = this.props;
        // console.log(this.props);
        return (
            <div
                className="cardField"
                onClick={() => {
                    this.props.history.push(this.props.name.toLowerCase());
                }}
            >
                <div
                // className="deleteHero"
                // title="delete hero"
                // onClick={onDelete}
                >
                    {/* <div className="crossOne"></div>
                    <div className="crossTwo"></div> */}
                </div>
                <div className="propsWrap">
                    <div className="props">
                        Hero: <span className="heroName">{name}</span>
                    </div>
                    <div className="props">
                        Description: <br />{' '}
                        <span className="description">
                            {''}
                            {description.substr(0, 150)}
                            {'...'}
                        </span>
                    </div>

                    <div className="props">
                        Tags: <div className="all__tags">{tags}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CardsListItem);
