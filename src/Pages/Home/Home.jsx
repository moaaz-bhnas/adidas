import React, { PureComponent } from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import View360 from '../../Components/View360/View360';
import Categories from '../../Components/Categories/Categories';
import Editions from '../../Components/Editions/Editions';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Trending from '../../Components/Trending/Trending';

const products = [
  { id: 0, name: 'Lite Racer RBN Shoes', category: 'Essentials', price: { old: 1350, new: 1550 }, img: '/img/trending-1.png' },
  { id: 1, name: 'Duramo 9 Shoes', category: 'Running', price: { new: 1230 }, img: '/img/trending-2.png' },
  { id: 2, name: 'Adilette Comfort Slides', category: 'Swim', price: { new: 570 }, img: '/img/trending-3.png' },
  { id: 4, name: 'Adilette Cloudform Plus Stripes Slides', category: 'Essentials', price: { new: 350 }, img: '/img/trending-4.png' }
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
      </main>
    );
  }
}

export default Home;