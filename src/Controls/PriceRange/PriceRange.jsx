import React, { PureComponent } from 'react';
import './PriceRange.scss';

class PriceRange extends PureComponent {
  state = {  
    newRange: { newMin: null, newMax: null }
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'min':
        this.setState({ min: value });
        break;
      case 'max':
        this.setState({ max: value });
        break;
    }
  }

  componentDidMount() {
    const { min, max } = this.props.item.range;
    this.setState({ newMin: min, newMax: max });
  }

  render() {
    const { item, visible } = this.props;
    const { min, max } = item.range;
    const { newMin, newMax } = this.state.newRange;

    return (
      <form 
        className="priceRange" 
        data-visible={visible}
      >
        <div className="priceRange__inputContainer">
          <label htmlFor="min" className="priceRange__label">From (EGP)</label>
          <input 
            tabIndex={visible ? 0 : -1}
            type="number" 
            min={min} 
            max={max} 
            id="min" 
            className="form-control priceRange__min" 
            value={newMin}
            onChange={this.handleChange}
          />
        </div>
        <div className="priceRange__inputContainer">
          <label htmlFor="max" className="priceRange__label">To (EGP)</label>
          <input 
            tabIndex={visible ? 0 : -1}
            type="number" 
            min={min} 
            max={max} 
            id="max" 
            className="form-control priceRange__max" 
            value={newMax}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default PriceRange;