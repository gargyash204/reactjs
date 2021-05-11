import React,{Component} from 'react';

const AvatarList = (props) => {
	return( 
		<div className="maindiv_style ma4 bg-light-purple dib pa4"> 
		    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt ="Avatar"/> 
			<h1 className="tc"> {props.name} </h1>
	       	<p> {props.work} </p> 
	    </div>
	    )
}

export default AvatarList;