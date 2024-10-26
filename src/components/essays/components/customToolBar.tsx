import React from 'react'


// Define the custom toolbar
const CustomToolbar = () => (
  <div id="custom-toolbar" className="quill-custom-toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-align" value=""></button>
    <button className="ql-align" value="center"></button>
    <button className="ql-align" value="right"></button>
    <button className="ql-link"></button>
    {/* <button className="ql-image"></button>
    <button className="ql-video"></button> */}
  </div>
)

export default CustomToolbar
