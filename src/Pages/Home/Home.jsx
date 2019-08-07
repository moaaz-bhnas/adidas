import React, { PureComponent } from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import View360 from '../../Components/View360/View360';
import Categories from '../../Components/Categories/Categories';
import Editions from '../../Components/Editions/Editions';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Trending from '../../Components/Trending/Trending';
import Contact from '../../Components/Contact/Contact';
import trending1 from '../../img/trending-1.png';
import trending2 from '../../img/trending-2.png';
import trending3 from '../../img/trending-3.png';
import trending4 from '../../img/trending-4.png';

const products = [
  { id: 0, name: 'Lite Racer RBN Shoes', category: 'Essentials', price: { old: 1350, new: 1550 }, img: trending1 },
  { id: 1, name: 'Duramo 9 Shoes', category: 'Running', price: { new: 1230 }, img: trending2 },
  { id: 2, name: 'Adilette Comfort Slides', category: 'Swim', price: { new: 570 }, img: trending3 },
  { id: 4, name: 'Adilette Cloudform Plus Stripes Slides', category: 'Essentials', price: { new: 350 }, img: trending4 }
];

class Home extends PureComponent {
  state = {  }
  render() {
    return (
      <main className="homePage">
        <TopBanner />
        <View360 />
        <Categories />
        <Editions />
        <BottomBanner />
        <Trending products={products} />
        <Contact />
      </main>
    );
  }
}

export default Home;