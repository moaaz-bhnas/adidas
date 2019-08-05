import React, { PureComponent } from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import View360 from '../../Components/View360/View360';
import Categories from '../../Components/Categories/Categories';

class Home extends PureComponent {
  state = {  }
  render() {
    return (
      <main className="homePage">
        <TopBanner />
        <View360 />
        <Categories />
      </main>
    );
  }
}

export default Home;