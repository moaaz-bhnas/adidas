import React, { Component } from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner2';
import SubCategoriesList from '../../Components/Categories/SubCategoriesList';
import Categories from '../../Components/Categories/Categories2';

class SingleCategory extends Component {
  state = {  }
  render() {
    const category = 'men';
    const subCategories = [ 'shoes', 'apparel', 'new arrivals', 'best sellers' ];

    return (
      <main className="categoryPage">
        <TopBanner />
        
        <SubCategoriesList title={category} subCategories={subCategories} />

        <Categories />
      </main>
    );
  }
}

export default SingleCategory;