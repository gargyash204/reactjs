import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
import AvatarList from './AvatarList';
import 'tachyons';

const Demo = (props) => {
	return( 
		<div>
		<h1> Welcome to Coding World </h1>
		<AvatarList id="1" name="Yash" work="Web Developer"/>
		<AvatarList id="2" name="Rupal" work="ML Expert"/>
		<AvatarList id="3" name="Nikhil" work="Backend"/>
		<AvatarList id="4" name="Ramesh" work="Database"/>
		<button> Useless </button>
	    </div>
	)
}

export default Demo;