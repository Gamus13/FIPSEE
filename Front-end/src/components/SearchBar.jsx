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
            {/* <div className="wrapper">
                <div className="form">
                <i className="fa fa-search"></i>
                <input 
                    placeholder={placeholder} 
                    type="text"
                    value={wordEntered}
                    onChange={handleFilter}
                    
                />
                <span className="left-pan"><i className="fa fa-microphone"></i></span>
                </div>
            </div> */}

            <div class="search-input">
                <a href="" target="_blank" hidden></a>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={wordEntered}
                    onChange={handleFilter}
                    id='search-box'
                />
                
                
                <div class="icon"><i class="fas fa-search"><BsSearch/></i></div>
            </div>

           

            {filteredData.length !== 0 && (
                <div class="autocom-box">
                    {filteredData.slice(0, 7).map((value, index) => {
                        return (
                            <div className="list border-bottom " key={index}>
                                <div className="d-flex flex-column ml-3">
                                    <a href='/den' alt=''><span>{value.name}</span></a> 
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