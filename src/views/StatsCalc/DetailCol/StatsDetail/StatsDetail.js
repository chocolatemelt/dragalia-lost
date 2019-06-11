import React, { Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { translate, getDetails, getEnemyDamage, getAdventurerDamage } from '../../../../actions';
import { exValues } from '../../../../data';
import { withTheme } from '../../../../components';
import DungeonSelect from './DungeonSelect';
import DungeonSettings from './DungeonSettings';
import DungeonDamage from './DungeonDamage';

class StatsDetail extends React.Component {
  state = {
    rows: ['adventurer', 'weapon', 'wyrmprint1', 'wyrmprint2', 'dragon', 'ability', 'halidom'],
    dungeon: 'hmc',
    exHP: '',
    exDef: '',
    HP: '',
    def: '',
  };

  static getDerivedStateFromProps(props, state) {
    const { adventurer } = props.stats;
    const { id, ex, weapon, rarity } = adventurer || {};

    if ((weapon === 'Axe' || weapon === 'Lance') && (id !== state.id || ex !== state.ex)) {
      let exHP = '';
      let exDef = '';
      if (weapon === 'Axe') {
        exDef = exValues[weapon][rarity][ex];
      } else if (weapon === 'Lance') {
        exHP = exValues[weapon][rarity][ex];
      }
      return {
        id,
        ex,
        exHP,
        exDef,
      };
    }

    return null;
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { rows, dungeon, ...res } = this.state;
    const { lang, expand, stats, halidom } = this.props;
    const { adventurer } = stats;
    let name;
    let details;
    let enemyMax;
    let enemyMin;
    let totalHP;
    let enemyTextArea;
    let adventurerTextArea;
    if (adventurer) {
      const { HP, exHP } = this.state;
      name = adventurer ? adventurer.name[lang] : '';
      details = getDetails(stats, halidom);
      const trueBaseHP = details.total.HP - details.halidom.HP + details.trueHalidom.HP;
      totalHP = Math.ceil(trueBaseHP * (1 + HP * 0.01) * (1 + exHP * 0.01));
      const enemyDamage = getEnemyDamage(stats, this.state);
      enemyMax = enemyDamage.max;
      enemyMin = enemyDamage.min;
      enemyTextArea = enemyDamage.textArea;
      adventurerTextArea = getAdventurerDamage(stats, details.total.STR);
    }

    return (
      <Fragment>
        {adventurer && (
          <Fragment>
            <table id="stats-detail" className="gutter">
              <thead>
                <tr>
                  <th>{name}</th>
                  <th>{translate('HP', lang)}</th>
                  <th>{translate('STR', lang)}</th>
                  <th>{translate('might', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {expand &&
                  rows.map(row => {
                    const { HP, STR, might } = details[row];
                    return (
                      <tr key={row}>
                        <td>{translate(row, lang)}</td>
                        <td>{HP}</td>
                        <td>{STR}</td>
                        <td>{might}</td>
                      </tr>
                    );
                  })}

                <tr>
                  <td>{translate('total', lang)}</td>
                  <td>{details.total.HP}</td>
                  <td>{details.total.STR}</td>
                  <td>{details.total.might}</td>
                </tr>
              </tbody>
            </table>

            {expand && (
              <Fragment>
                <table id="calc-detail" className="gutter">
                  <thead>
                    <tr>
                      <th>{translate('Type', lang)}</th>
                      <th>{translate('Skill Name', lang)}</th>
                      <th>{translate('Level', lang)}</th>
                      <th>{translate('Modifier', lang)}</th>
                      <th>{translate('Damage', lang)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adventurerTextArea.map(data => {
                      return (
                        <tr key={data[5]} data-tip={`${data[2]} ${data[1]}`}>
                          <td>{data[0]}</td>
                          <td>{data[1]}</td>
                          <td>{data[2]}</td>
                          <td>{data[3]}</td>
                          <td>{data[4]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ReactTooltip place="right" effect="solid" />
              </Fragment>
            )}

            {!expand && (
              <Fragment>
                <DungeonSelect dungeon={dungeon} onChange={this.onChange} />
                <DungeonSettings onChange={this.onChange} {...res} />
                <DungeonDamage
                  min={enemyMin}
                  max={enemyMax}
                  HP={totalHP}
                  textArea={enemyTextArea}
                />
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ stats, halidom }) => {
  return { stats, halidom };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO clear
    // : () => dispatch(),
  };
};

export default withTheme(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatsDetail)
);
