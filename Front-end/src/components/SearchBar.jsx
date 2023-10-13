import React, {  useState } from "react";
import { BsSearch } from 'react-icons/bs';

function Search({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });
        //console.log(searchWord);
        if (searchWord === ""){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };



    return (
        <div className="wrapper ">
            <div class="search-input">
                <a href="" target="_blank" hidden></a>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={wordEntered}
                    onChange={handleFilter}
                    id='search-box'
                />
                
                
                <div class="icon"><BsSearch/></div>
            </div>

            {filteredData.length !== 0 && (
                <div class="autocom">
                    {filteredData.slice(0, 7).map((value, index) => {
                        return (
                            <div className="listeur " key={index}>
                                <div className="result-th">
                                    <a href='/den' alt=''><span className="resulttxt">{value.name}</span></a> 
                                    {/* la balise a est utiliser pour rediriger vers /den */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

           
        </div>
    );
}

export default Search;