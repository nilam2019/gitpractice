import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function AmazonBook(props){
    const [book,setBook] = useState('');

    console.log(props.book)
    return (
        <div className = "App">
            <img src="amazon.png" width="200px" height="200px"/>
        </div>
    )

}

export default AmazonBook;