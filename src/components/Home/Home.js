import React from 'react';
import Navbar from '../navbar/navbar';
import Contact from '../contacts/contact';
import Suggestions from '../suggestions/suggestion';
import Search from '../search/search';
import Recent from '../recent/recent';
import Displaycard from '../Displaycard/displaycard';
const Home=(props)=>{
    return(
        <div>
            <Navbar></Navbar>
            {/* display_card */}
            <Displaycard></Displaycard>
            <Recent></Recent>
            <Search></Search>
            {/* feed */}
            <Contact></Contact>
            <Suggestions></Suggestions>
        </div>
    )

}

export default Home;