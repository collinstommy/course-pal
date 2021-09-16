import React from 'react';

const SearchControls = () => {
  return <React.Fragment>
    <div className="form-group">
      <label htmlFor="search">Search Courses</label>
      <input type="text" placeholder="Search" id="search" />
    </div>
    <fieldset className="form-group">
      <legend>View Options</legend>
      <label htmlFor="paperRadios1" className="paper-radio" >
        <input type="checkbox" name="paperRadios" id="paperRadios1" value="option 1" />
        <span>Hide Featured</span>
      </label>
      <label htmlFor="paperRadios2" className="paper-radio" >
        <input type="checkbox" name="paperRadios" id="paperRadios2" value="option 2" />
        <span>Hide New</span>
      </label>
    </fieldset>
  </React.Fragment>
}

export default SearchControls;