var React = require("react");
var css  = require("./Contact.css")
var contacts = [
         {
         	id:1,
         	name:"viktor",
         	phoneNumber:"2344573",
         	image:"/img/1.jpg",
            emeil :"gus@gmail.com"
         },
         {
         	id:2,
         	name:"Liza",
         	phoneNumber:"2344573",
         	image:"/img/2.jpg",
            emeil :"srach@gmail.com"
         },
         {
         	id:3,
         	name:"Dmitrieva",
         	phoneNumber:"2344573",
         	image:"/img/3.jpg",
            emeil :"antoha@gmail.com"
         },
       
];


var Contact = React.createClass({
     getInitialState: function() {
    return {
      visible: false
    };
  },
    ClickImg:function(e){
         e.preventDefault();
    this.setState({visible: true});

    },
     ClickNou:function(e){
         e.preventDefault();
    this.setState({visible: false});
    
    },

    render:function(){
        var visible = this.state.visible;    	
    	return( 
    	<li onClick={visible ? this.ClickNou:this.ClickImg} className="contacts">

    		<div claassName="contacts_name" >{this.props.date.name}</div>
    		<div className="contacts_phone_number">{this.props.date.phoneNumber}</div>
            <div className={visible ? '': 'none'}>{this.props.date.emeil}</div>
    		<img className="contacts_img"src={this.props.date.image} width={visible ? "120px":"60px"} height={visible ? "150px":"80px"}/>	
    			
    	</li>
    	)


    }
});
var ContactsList = React.createClass({
	getInitialState:function(){
		return{
			dispCont:contacts
		}
	},
	handleSearch:function(event){
		
	   var serch = event.target.value.toLowerCase();
       var dispCont = contacts.filter(function(el){
       var searchValue = el.name.toLowerCase();
               
               return searchValue.indexOf(serch)!== -1;
        });
        this.setState({
            dispCont:dispCont
        });
        

	},
	render:function(){
		return (
			<div>
			<input type="text" onChange={this.handleSearch}/>
				<ul>
					{
						this.state.dispCont.map(function(el){
							return <Contact key={el.id} date={el}/>
						})
					}
				</ul>
			</div>
			)

	}
});
module.exports= ContactsList;