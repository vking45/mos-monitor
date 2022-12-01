import React from 'react'
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
function Home() {
  return (
    <div >
    <aside>
        <Sidebar />
    </aside>
    <header>
    <Searchbar />
    </header>
    <main>
      <Tabs />
    </main>
  </div>
  )
}

export default Home;