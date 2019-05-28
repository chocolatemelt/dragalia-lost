/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { refs } from 'store';
import { selectStats, selectFilters } from 'actions';
import { Image, withTheme } from 'components';

class ListItem extends React.Component {
  render() {
    const {
      field,
      lang,
      index,
      style,
      data: { list, fields },
    } = this.props;

    const item = list[index];
    const name = item.name[lang];
    const { id, rarity } = item;
    let image;
    if (field === 'adventurer') {
      image = `${id}_r0${rarity}`;
    } else if (field === 'wyrmprint') {
      image = `${id}_01`;
    } else {
      image = id;
    }

    return (
      <div style={style} className="list-item flex">
        <div className="list-item-image" onClick={this.clickAvatar}>
          <Image field={field} image={image} />
        </div>

        <div className="list-item-name ellipsis">{name}</div>

        {fields.map(f => {
          if (f === 'weapon' || f === 'element') {
            const icon = `${f}_${item[f]}`;
            return (
              <div
                key={f}
                className="list-item-icon"
                data-key={f}
                data-value={item[f]}
                onClick={this.clickIcon}
              >
                <Image size="sm" field="icon" image={icon} />
              </div>
            );
          }

          return (
            <div key={f} className="list-item-icon">
              {item[f]}
            </div>
          );
        })}
      </div>
    );
  }

  clickAvatar = () => {
    const {
      index,
      focusKey,
      selectStats,
      data: {
        list: { [index]: item },
      },
    } = this.props;

    selectStats(focusKey, item);
    setTimeout(() => {
      window.scrollTo({
        top: refs.statsField.current.offsetTop - 48,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  };

  clickIcon = e => {
    const { key, value } = e.currentTarget.dataset;
    this.props.selectFilters(key, value);
  };
}

const mapStateToProps = ({ focusKey, field }) => {
  return { focusKey, field };
};

const mapDispatchToProps = dispatch => {
  return {
    selectStats: (statsKey, item) => dispatch(selectStats(statsKey, item)),
    selectFilters: (key, value) => dispatch(selectFilters(key, value)),
  };
};

export default withTheme(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem)
);
