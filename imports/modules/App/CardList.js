import React from 'react';
import Reorder from 'react-reorder';
import Card from './Card';

export default class CardList extends React.Component {
  render() {
    const coll = this.props.coll;
    const schema = this.props.schema;
    return (
      <Reorder
        itemKey='_id'
        holdTime='250'
        list={this.props.list}
        template={ React.createClass({
          render: function () {
            const item = this.props.item;
            return ( React.createElement( Card, {
              object: item,
              coll: coll,
              schema: schema,
            }));
          }
        }) }
      />
    );
  }
}
CardList.propTypes = {
  coll: React.PropTypes.string,
  schema: React.PropTypes.object,
  list: React.PropTypes.array,
};
