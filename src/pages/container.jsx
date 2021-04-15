import React from 'react';
import '../style.css';
import Header from './header';
import Table from './table';

function Container(props) {
    return (
      <div className="smallContainer">
      <Header headerName={props.headerName}/>
      <div className="tableContainer">
        <Table facultyName={props.facultyName} subject={props.subject}/>
        </div>
        </div>
    )
}

export default Container
