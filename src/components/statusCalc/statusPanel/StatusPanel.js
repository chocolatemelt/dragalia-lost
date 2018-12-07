import React, { Component } from 'react';
import { connect } from 'react-redux';
import Status from './status/Status';
import uuidv4 from 'uuid/v4';
import FacilityStatus from './status/FacilityStatus';

const mapStateToProps = (state) => {
  const { adventurer, facility } = state.statusSets;
  return {
    adventurer,
    facility,
  };
}

class StatusPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: ["adventurer", "weapon", "wyrmprint", "dragon"],
    }
  }

  render() {
    const { sections } = this.state;
    const { adventurer, facility } = this.props;
    return (
      <div className="ui two column grid">
        {sections.map(section =>
          <Status
            key={uuidv4()}
            section={section}
          />
        )}

        {adventurer &&
          facility.typeList.map(facilityType =>
            <FacilityStatus
              facilityType={facilityType}
            />
          )
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(StatusPanel);