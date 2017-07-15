var React = require("react");
var Calculatr = require("./Calculator.jsx");

var Boock = React.createClass({

    render:function(){
       
        return(
             <li>
                 <div><h1>{this.props.book.author}</h1></div>
                 <div>{this.props.book.text}</div>
                 
             </li>

            )
    }
});
var BoockList = React.createClass({
    render:function(){
       
        return (<div>
           <Calculatr/>
            <ul>
               {this.props.book.map(function(el){
                return <Boock key={el.id} book={el}/>
               })
           }
            </ul>
        </div>)
    }
});
module.exports = BoockList ; 
