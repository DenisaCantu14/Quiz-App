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
              <option value="9">GENERAL KNOWLEDGE</option>
              <option value="25">ART</option>
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