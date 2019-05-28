/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from 'components';

class DungeonSettings extends React.PureComponent {
  state = {
    inputFields: ['exHP', 'exDef', 'HP', 'def'],
  };

  render() {
    const { inputFields } = this.state;

    return (
      <div className="flex gutter-top">
        {inputFields.map(field => (
          <Input
            key={field}
            label={field}
            value={this.props[field]}
            classes='col-2'
            adornment="%"
            onChange={this.props.onChange}
          />
        ))}
      </div>
    );
  }
}

export default DungeonSettings;
