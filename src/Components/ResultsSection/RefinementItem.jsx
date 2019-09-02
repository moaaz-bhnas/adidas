import React, { PureComponent } from 'react'
import './RefinementItem.scss';
import PriceRange from '../../Controls/PriceRange/PriceRange';
import OptionsList from './OptionsList';

class RefinementItem extends PureComponent {
  state = {  
    optionsVisible: true
  }

  toggleOptions = () => {
    this.setState((prevState) => ({
      optionsVisible: !prevState.optionsVisible
    }));
  }

  render() {
    const { item } = this.props;
    const { optionsVisible } = this.state;

    return (
      <li className="refinement__item">
        <h4 className="refinement__name">
          <button 
            className="refinement__nameBtn"
            aria-expanded={optionsVisible}
            aria-pressed={optionsVisible}
            aria-controls="refinement__options"
            onClick={this.toggleOptions}
            onMouseDown={(e) => e.preventDefault()}
          >
            {item.name} <i className="fas fa-chevron-down" />
          </button>
        </h4>

        {
          item.name === 'price' ?
          <PriceRange visible={optionsVisible} item={item} /> :
          <OptionsList visible={optionsVisible} item={item} />
        }
      </li>
    );
  }
}

export default RefinementItem;