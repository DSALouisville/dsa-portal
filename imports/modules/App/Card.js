import React from 'react';
import _ from 'lodash';

export default class Card extends React.Component {
  removeObject() {
    Meteor.call(`${this.props.coll}.remove`, this.props.object._id);
  }
  fieldDiv(key, object) {
    return (
      <div className="card-text" key={key}>
        {this.props.object[key].toString()}
      </div>
    );
  }
  render() {
    const object = this.props.object;
    console.log(_.keys(object));
    const schema = this.props.schema;
    const fields = _.keys(_.pickBy(object, (v, key) => schema[key].card)).map(this.fieldDiv.bind(this));
    console.log(fields);

    return (
      <div className="card">
        <div className="card-icons">
          <div className="card-icon" onClick={this.removeObject.bind(this)}>X</div>
          <div className="card-icon">V</div>
        </div>
        {fields}
     </div>
    );
  }
}
Card.propTypes = {
  object: React.PropTypes.object,
  coll: React.PropTypes.string,
  schema: React.PropTypes.object,
};
