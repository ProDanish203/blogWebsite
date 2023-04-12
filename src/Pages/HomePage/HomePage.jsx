import React, { useState } from 'react'
import "./HomePage.css"
import { banner } from "../../utils/images";
import { searchIcon } from "../../utils/images";
import { Title } from "../../Components/Title/Title";
import { BlogList } from "../../Components/BlogList/BlogList";
import { UseBlogsContext } from "../../context/blogsContext";


export const HomePage = () => {

  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch} = UseBlogsContext();
  // console.log(blogs)

  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchBox = (e) => {

    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){

      setSearchTerm(e.target.value);
      setErrorMsg("");
    }else{
      setErrorMsg("Invalid search Term...");
    }


  }

  const handleSearchResult = (e) => {
    
    e.preventDefault();
    // console.log(searchTerm);
    fetchBlogsFromSearch(searchTerm);

  }

  return (
    <div className="main">
      <header className='header' style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,0.2)), url(${banner}) center/cover no-repeat`
      }}>
        
        <div className="container">

          <div className="header-container">
              <h1 className='header-title'>blogging website made by using fecth api and react hooks </h1>
              <form className='header-form' onSubmit={(e) => handleSearchResult(e)}>
                <div className="header-searchField">

                <input type="text" className='header-serarch' placeholder='seacrh blogs' onChange={(e) => handleSearchBox(e)}/>
                <button className='btn-search'>
                  <img src={searchIcon} alt="" />
                </button>
                </div>
                <span className='error-msg'>{errorMsg}</span>
              </form>
          </div>

        </div>

      </header>


      <section className="section">

        <div className="container">

          <div className="section-content">

            <Title title="Blogs" color={"#0d1741"}/>

            { <BlogList blogs={blogs}/>}

          </div>

        </div>

      </section>


    </div>
  )
}
