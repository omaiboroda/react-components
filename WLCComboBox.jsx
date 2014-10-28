/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var cx    = require('react-classset');

require('./WLCComboBox.less');

var ComboBox = React.createClass({
    propTypes: {
        items:    React.PropTypes.array.isRequired,
        selected: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },

    _handleChange(event) {
        var selectedItem = this.props.items.find( item => item.name === event.target.value );

        if (this.props.onChange) {
            this.props.onChange(selectedItem);
        }
    },

    render() {
        var items = this.props.items;

        var listItems = items.map( item => <option value={item.name} key={item.id}>{item.name}</option>);

        var selectClass = cx({
            'disabled' : this.props.disabled
        });

        return (
            <div className='ComboBox'>
                <select value={this.props.selected ? this.props.selected : undefined}
                        onChange={this._handleChange}
                        className={selectClass}
                        disabled={this.props.disabled}>
                    {listItems}
                </select>
            </div>
        );
    }
});

module.exports = ComboBox;