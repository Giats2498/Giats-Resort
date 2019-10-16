import React, { Component } from "react";
import axios from 'axios';

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        singleRoom:[],
        loading:true,
        rtype:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    get actions() {
        return {
            featuredRooms: this.featuredRooms,
            allRooms:this.allRooms,
            singleRoom:this.singleRoom,
            reservation:this.reservation
        };
    }
    featuredRooms = () => {
        //axios
        axios.get('http://localhost:5000/')
        .then(response => {
                let featuredRooms= this.formatData(response.data);
                this.setState({
                    featuredRooms,
                    loading:false,
                });
        })  
    };
    
    allRooms = () => {
        //axios
        axios.get('http://localhost:5000/rooms')
        .then(response => {
                let rooms = this.formatData(response.data);
                let maxPrice = Math.max(...rooms.map(item =>item.price));
                let maxSize = Math.max(...rooms.map(item =>item.size));
                this.setState({
                    rooms,
                    sortedRooms:rooms,
                    loading:false,
                    price:maxPrice,
                    maxPrice, 
                    maxSize
                });
        })  
    };

    singleRoom = (slug) => {
        //axios
        axios.get(`http://localhost:5000/rooms/${slug}`)
        .then(response => {
                let rooms = this.formatDataSingleRoom(response.data);
                this.setState({
                    singleRoom:rooms,
                    loading:false
                });
        })  
    };

    reservation =(obj) => {
        return axios.post(`http://localhost:5000/reservation`,obj)
        .then(response => {
            return response;
        });
    }

    formatData(items){
        let tempItems= items.map(item =>{
            let id= item._id.toString();
            const image =new Buffer(item.images[0]).toString('base64');
            let room={...item.fields,id,image};
            return room;
        });
        return tempItems;
    };
    
    formatDataSingleRoom(items){
        let tempItems= items.map(item =>{
            let id= item._id.toString();
            const image=item.images.map((img) => {
                 return new Buffer(img).toString('base64');
             });
            
            let room={...item.fields,id,image,...item};
            return room;
        });
        return tempItems;
    };


    handleChange = event =>{
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        },this.filterRooms)
    };

    filterRooms = ()=>{
        let{
            rooms,rtype,capacity,price,minSize,maxSize,breakfast,pets
        }= this.state
        //all the rooms
        let tempRooms = [...rooms];
        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
        //filter by type
        if(rtype !== 'all'){
            tempRooms= tempRooms.filter(room => room.rtype===rtype)
        }
        //filter by capacity
        if(capacity !==1){
            tempRooms= tempRooms.filter(room => room.capacity >= capacity)
        }
        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <=maxSize);
        //filter by breakfast
        if(breakfast){
            tempRooms= tempRooms.filter(room => room.breakfast===true)
        }
        //filter by pets
        if(pets){
            tempRooms= tempRooms.filter(room => room.pets===true)
        }
        //changeState
        this.setState({
            sortedRooms:tempRooms       
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange,actions:this.actions}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export{RoomProvider,RoomConsumer,RoomContext};

export function withRoomConsumer(Compoment){
    return function ConsumerWrapper(props){
        return (
            <RoomConsumer>
                {value=> <Compoment {...props} context={value} {...value} />}
            </RoomConsumer>
        );
    };
}


