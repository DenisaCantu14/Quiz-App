import React, { useState } from 'react';
import Start from './Start';
function Quiz ()
{
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [start, setStart] = useState(false);
    function s ()
    {
        setStart(true);
    }
    const info = 
    {
        difficulty,
        category,
        type,
    }
    return ( 
        <>
          {!start && <div className="menu" >
            <select className = "select-btn" name="difficulty" id="difficulty" onChange ={e => setDifficulty(e.target.value)} >
              <option value="" >ANT DIFFICULTY</option>           
              <option value="easy" >EASY</option>
              <option value="medium">MEDIUM</option>
              <option value="hard">HARD</option>
            </select>
            <select className = "select-btn" name="category" id="category" onChange ={e => setCategory(e.target.value)}>
              <option value="">ANY CATEGORY</option>
              <option value="27">ANIMALS</option>
              <option value="25">ART</option>
              <option value="16">BOARD GAMES</option>
              <option value="10">BOOKS</option>
              <option value="32">CARTOON & ANIMATIONS</option>
              <option value="26">CELEBRITIES</option>
              <option value="29">COMICS</option>
              <option value="18">COMPUTERS</option>
              <option value="11">FILM</option>
              <option value="30">GADGES</option>
              <option value="9" >GENERAL KNOWLEDGE</option>
              <option value="22">GEOGRAPHY</option>
              <option value="23">HISTORY</option>
              <option value="31">JAPANESE ANIME & MANGA</option>
              <option value="19">MATHEMATICS</option>
              <option value="12">MUSIC</option>
              <option value="13">MUSICAL & THEATRES</option>
              <option value="20">MYTHOLOGY</option>
              <option value="24">POLITICS</option>
              <option value="17">SCIENCE & NATURE</option>
              <option value="21">SPORTS</option>
              <option value="14">TELEVISION</option>
              <option value="28">VEHICLES</option>
              <option value="15">VIDEO GAMES</option>
            </select>
            <select className = "select-btn" name="type" id="type" onChange ={e => setType(e.target.value)}>
              <option value="">ANY TYPE</option>
              <option value="boolean">True or False</option>
              <option value="multiple">Multiple Choise</option>
            </select>
            <br></br>
            <button id="continue" onClick ={s}> Continue</button>
        </div>
}
        {start && <Start select = {info} />}

       
            </>
            )
}

export default Quiz