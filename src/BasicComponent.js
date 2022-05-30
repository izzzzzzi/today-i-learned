import React, { Component} from 'react';

export default class BasicComponent extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}