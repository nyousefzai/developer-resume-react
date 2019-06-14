import React from 'react';
import _ from 'lodash';
import Container from './container';
import Games from './Games';

const layout = _.range(0, 16).map(n => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [80 * col, 80 * row];
});
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: _.shuffle(_.range(0, 16)),
    };
  }
  updatePosition(index) {
    let { positions } = this.state;
    let emptyIndex = positions.indexOf(0);
    let targetIndex = positions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif == 1 || dif == 4) {
      positions[emptyIndex] = index;
      positions[targetIndex] = 0;
      this.setState({ positions });
      let win = _.every(positions, (value, index, array) => {
        value = value || 16;
        return index === 0 || parseInt(array[index - 1]) <= parseInt(value);
      });
      if (win) {
        window.alert('U Win!!!');
      }
    }
  }

  render() {
    return (
      <Container>
        <div style={{ margin: ' 0 0 0 0' }}>
          <Games>
            {this.state.positions.map((i, key) => {
              let cellClass = key ? 'cell' : 'empty cell';
              let [x, y] = layout[this.state.positions.indexOf(key)];
              return (
                <div
                  key={key}
                  className={cellClass}
                  onClick={this.updatePosition.bind(this, key)}
                  style={{
                    transform: `translate3d(${x}px,${y}px,0) scale(1.1)`,
                  }}
                >
                  {key}
                </div>
              );
            })}
          </Games>
        </div>
      </Container>
    );
  }
}
export default Game;
