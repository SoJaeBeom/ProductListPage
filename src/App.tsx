import Footer from 'components/Footer';
import Header from 'components/Header';
import Item from 'components/Item';
import SearchBar from 'components/SearchBar';
import SearchCategory from 'components/SearchCategory';
import React, { useEffect, useState } from 'react';
import './App.css';
import items from './dummy.json';

function App() {
  const filteritem: any = [];
  const [item, setItem] = useState(items);
  const [search, setSearch] = useState('');
  const [filterItem, setFilterItem] = useState(filteritem);

  useEffect(() => {
    setFilterItem(item.filter((data) => data.club.name.includes(search)));
  }, [search, item]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const renderList = filterItem.map((list: any) => {
    return (
      <>
        <div>
          <Item item={list} />
        </div>
      </>
    );
  });

  return (
    <main>
      <Header />
      <section>
        <article className="search">
          <SearchCategory />
          <SearchBar onChange={onChange} />
        </article>
        <article className="items">
          {renderList.length > 0 ? (
            renderList
          ) : (
            <p>해당 상품이 존재하지 않습니다.</p>
          )}
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default App;
