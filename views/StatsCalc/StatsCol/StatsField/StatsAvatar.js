/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames';
import { refs } from 'store';
import { connect } from 'react-redux';
import { Image, withTheme } from 'components';
import { selectFocus, selectStats, translate, getField } from 'actions';

class StatsAvatar extends React.Component {
  render() {
    let { lang, image, name, statsKey, highlight } = this.props;

    const field = getField(statsKey);
    const label = name ? name[lang] : translate(statsKey, lang);
    const cn = classNames('avatar center', { highlight });
    return (
      <div className={cn}>
        <Image field={field} image={image} size="lg" onClick={this.onClick} />
        <div className="caption ellipsis">{label}</div>
      </div>
    );
  }

  onClick = () => {
    const { highlight, statsKey, selectFocus, selectStats } = this.props;
    if (!highlight) selectStats(statsKey);
    selectFocus(statsKey);

    setTimeout(() => {
      window.scrollTo({
        top: refs.setCol.current.offsetTop - 48,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  };
}

const mapStateToProps = ({ focusKey, stats }, { statsKey }) => {
  return { highlight: focusKey === statsKey && !stats[focusKey] };
};

const mapDispatchToProps = dispatch => {
  return {
    selectFocus: statsKey => dispatch(selectFocus(statsKey)),
    selectStats: statsKey => dispatch(selectStats(statsKey, null)),
  };
};

export default withTheme(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatsAvatar)
);
