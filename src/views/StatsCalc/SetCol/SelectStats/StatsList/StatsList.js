/* eslint-disable no-unused-vars */
import React, { Fragment, forwardRef } from 'react';
import { connect } from 'react-redux';
import { FixedSizeList } from 'react-window';
import { TextField } from '@material-ui/core';
import { translate } from 'actions';
import { Context } from 'components';
import AutoSizer from 'react-virtualized-auto-sizer';
import dataList from 'data';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

class StatsList extends React.Component {
  state = {
    loading: true,
    search: '',
    element: ['Flame', 'Water', 'Wind', 'Light', 'Shadow', 'None'],
    weapon: [
      'Sword',
      'Blade',
      'Dagger',
      'Axe',
      'Lance',
      'Bow',
      'Wand',
      'Staff',
    ],
  };

  componentDidMount() {
    const list = dataList[this.props.field];
    this.setState({ list, loading: false });
  }

  render() {
    let { list, loading, search, element, weapon } = this.state;
    const { lang, field, fields, filters } = this.props;

    if (list) {
      list = list
        .filter(item => {
          for (let f of fields) {
            if (item[f].indexOf(filters[f]) === -1) {
              return false;
            }
          }

          return (
            item.name[lang].toUpperCase().indexOf(search.toUpperCase()) !== -1
          );
        })
        .sort((item1, item2) => {
          if (item1.rarity > item2.rarity) return -1;
          if (item1.rarity < item2.rarity) return 1;

          if (item1.element) {
            const element1 = element.indexOf(item1.element);
            const element2 = element.indexOf(item2.element);
            if (element1 > element2) return 1;
            if (element1 < element2) return -1;
          }

          if (item1.weapon) {
            const weapon1 = weapon.indexOf(item1.weapon);
            const weapon2 = weapon.indexOf(item2.weapon);
            if (weapon1 > weapon2) return 1;
            if (weapon1 < weapon2) return -1;
          }

          if (field === 'wyrmprint') {
            if (
              item1.MaxAtk +
                item1.MaxHp +
                item1.abilities12.might +
                item1.abilities22.might +
                item1.abilities32.might >
              item2.MaxAtk +
                item2.MaxHp +
                item2.abilities12.might +
                item2.abilities22.might +
                item2.abilities32.might
            ) {
              return -1;
            }

            if (
              item1.MaxAtk +
                item1.MaxHp +
                item1.abilities12.might +
                item1.abilities22.might +
                item1.abilities32.might <
              item2.MaxAtk +
                item2.MaxHp +
                item2.abilities12.might +
                item2.abilities22.might +
                item2.abilities32.might
            ) {
              return 1;
            }
          } else {
            if (item1.MaxAtk + item1.MaxHp > item2.MaxAtk + item2.MaxHp)
              return -1;
            if (item1.MaxAtk + item1.MaxHp < item2.MaxAtk + item2.MaxHp)
              return 1;
          }

          if (item1.id > item2.id) return -1;
          if (item1.id < item2.id) return 1;

          return 0;
        });
    }

    return (
      <Fragment>
        <TextField
          className="fluid"
          variant="filled"
          value={search}
          label={translate('search', lang)}
          onChange={this.onChange}
        />
        <ListHeader fields={fields} />
        <div id="stats-list">
          {loading ? (
            <img
              alt="loading"
              className="lg"
              src={`${process.env.PUBLIC_URL}/images/icon/loading.svg`}
            />
          ) : (
            <AutoSizer>
              {({ height, width }) => (
                <FixedSizeList
                  height={height}
                  width={width}
                  itemSize={80}
                  itemCount={list.length}
                  itemData={{
                    list,
                    fields,
                  }}
                >
                  {ListItem}
                </FixedSizeList>
              )}
            </AutoSizer>
          )}
        </div>
      </Fragment>
    );
  }

  onChange = e => this.setState({ search: e.target.value });

  clear = () => this.setState({ search: '' });
}

const mapStateToProps = ({ field, filters }) => {
  return { field, filters };
};

const wrapper = Component => {
  return forwardRef((props, ref) => (
    <Context.Consumer>
      {({ lang }) => <Component ref={ref} lang={lang} {...props} />}
    </Context.Consumer>
  ));
};

export default wrapper(
  connect(
    mapStateToProps,
    null,
    null,
    { forwardRef: true }
  )(StatsList)
);
