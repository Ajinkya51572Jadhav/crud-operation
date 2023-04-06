
// class component


 
// import React,{Component} from 'react';
// export default class User extends Component{
//   render()
//    {
//           return (
//             <h1>hello from user</h1>
//           );
//   }
// };

//   function component

// // const { useState } = require("react")
// import React,{useState} from "react";

// function App(){
//   const [data,setdata]=useState(0);
 
//   function updatevalue(){
//     setdata(data+1);
//   }
//   return (
//     <div>
//        <h1>{data}</h1>  
//       <button onClick={updatevalue}>update</button>
//        </div>
//   )
// };

// export default App;


// class component


// import React ,{Component} from "react";

// export default class App extends Component{
 
//   constructor(){
//     super();
//     this.state={
//       data:1
//     }
//   }
 
//   funcall(){
//   this.setState({data:this.state.data+1});
//   }

//   render(){
//   return(
//    <div>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.funcall()}>click</button>
//    </div>
//   );
//   }
// }

           

 // nexted object 

//  export default function App(){
//     const  obj = [
//         {name:"ajinkya",lastname:"jadhav" , age:20, address:[
//             {no:12 , plot_no:102, temp :"dagadi chal"}
//         ]
        
//     },
//         {name:"suraj",lastname:"jadhav" , age:20, class :"medical"},
//         {name:"rokade",lastname:"jadhav" , age:20, class :"busincesss"},
//         {name:"mapari",lastname:"jadhav" , age:20, class :"bbaca"},
//     ];
    
//     return(
//         <div>
//         <table border="1">
//         <tbody>
         
//         <tr>
//         <td>name</td>
//         <td>lastname</td>
//         <td>age</td>
//         <td>class</td>
//        </tr>
//            {
//             obj.map((elm, ind,arr)=>
//             <tr>
//             <td>{elm.name}</td>
//             <td>{elm.lastname}</td>
//             <td>{elm.age}</td>
//             <td>{elm.class}</td>
//            <tr> {
//              elm.address.map((data)=>
//                <tr>{data.no}</tr>
             
//              )                    
//         }</tr>
         
         
//           </tr>              
//               )       
//          }      
//          </tbody>
//          </table>
//          </div>
//     )};
 
  
 
// lifting state up
 
// import LiftingState from "./component/LiftingState"
// export default  function App(){

//     function ParentDataPass(string){
   
//          let da = string();
//          console.log(da);
       
//     }

//     return(
//         <div>
//          <LiftingState pass={ParentDataPass}/>
//         </div>
//     )
// };

    //  //  Pure Component 
    //  import React,{Component ,PureComponent}  from "react"
    //  export default class Pure extends  PureComponent{
    //  constructor(){
    //     super();
    //     this.state={
    //         data:1
    //     }

    //  }
    //  render(){
    //     console.log("componet update")
    //     return(
    //         <div>
    //         <h3>this is pure component</h3>
    //         <h4>{this.state.data}</h4>
    //          <button onClick={()=>this.setState({data:this.state.data+1})}>click</button>
    //         </div>
    //     )
    //  }
    //   }
       
    

    // useMemo(  )    hook is not  a update  button vr click kelyavr tati pn 
    //  import React,{useState,useMemo} from "react";
    // export default function Memo(){
    
    //    const [count,setcount]=useState(0);
    //    const [update,setupdate]=useState(10);
    
    //       const memo = useMemo(()=>{
    //         console.log('usememo call');
    //         return count *5;
            
    //       },[count]); 
    // //   console.log('update component')
    //     return(
    //     <div>
    //     <h4>useMemo Hook is update for component in not a update</h4>
    //     <h1>{count}count</h1>
    //     <h1>{update}update</h1>
    //      <h1>{memo}memo</h1>
    //     <button onClick={()=>setcount(count+1)}>click count</button>
    //     <button onClick={()=>setupdate(update*10)}>click update</button>
    //     </div>
    //     )
    // }









//     import React from 'react'
//     import { useState } from 'react';
   
    
//     //mobile responcive view
    
//    export default  function App(){
//     const [inputdata,setinputdata]=useState();
//     const [getData,setgetdata]=useState([]);
//     const [toggle,settoggle]=useState(true);
//     const [chnagedata,setchnagedata]=useState(null);
    
//        function AddText(e){
//     if(!inputdata){
//         alert('please text write');
//     }else if(inputdata && !toggle){
//     setgetdata(getData.map((elm)=>{
//     if(elm.id==chnagedata){
//         return {...elm,name:inputdata}
        
//     }
//     return elm;
    
//     }))
    
    
    
//     settoggle(true);
//     setinputdata('');
//     setchnagedata(null);   
    
    
    
    
//     }else{
//     const allInputdata ={id:new Date().getTime().toString(),name:inputdata}
//     console.log(new Date().getTime()) 
    
    
//         setgetdata([...getData,allInputdata]);
//     setinputdata('');
//     }
//      }
    
    
    
    
    
//     function deleteText(index){
//     const filtermethod = getData.filter((val,id)=>{
//          return val.id!=index;
//     })
//     setgetdata(filtermethod);   
    
//     }
    
    
    
    
//     function editText(id){
//         const editdata = getData.find((elm)=>{
//                return elm.id==id;
//       }) 
//       console.log(editdata);
//       settoggle(false);
//       setinputdata(editdata.name);
//       setchnagedata(id);   
//           }
    
//           function remove(){
//             setgetdata([]);
//             }
        
    
    
//       return(
    
    
//          <div>
   
    
    
       
     
// <input type={'text'} placeholder="Enter a text" value={inputdata} onChange={(e)=>setinputdata(e.target.value)}/>
    
//         <div className='toggle-btn'>
//         {toggle?<span onClick={AddText}>➕</span>:<span onClick={AddText}>💬</span>}   
//         </div>
    
    
//     <div>
//     {
//        getData.map((elm,index)=>{
//            return(
//                <div key={elm.id}>
    
                            
//                 <span className='name-text'>{elm.name}</span>
                          
//                <span onClick={()=>deleteText(elm.id)}>❌</span>
              
//                <span onClick={()=>editText(elm.id)}>🔄</span>
                        
    
//                 </div>            
//            )
        
//        })
//     }

//     <span onClick={remove}>remove all</span>

    
//     </div>
 
//     </div> 
//     )
//     }
    
    

import React , {useEffect, useState} from "react";


const getLocalItems=()=>{
 let list = localStorage.getItem('lists');
 console.log(list);
 
 if(list){
    return JSON.parse(localStorage.getItem('lists'));
 }else{
     return [];
 }
}


function App(){
    const [inputData,setinputData]=useState('');
    const [items,setitems]=useState(getLocalItems());
    const [toggle,settoggle]=useState(true);  
    const [EditeNote,setEditNote]=useState(null);

    function addItem(){
        if(!inputData){
               alert('plese fill the data');
        }else if(inputData && !toggle){
              setitems(
                items.map((elem)=>{
                    if(elem.id==EditeNote){
                        return {...elem,name:inputData};
                    }
                    return elem;
                })
              )

              settoggle(true);
              setinputData('');
              setEditNote(null);

        }else{
            const allInputData = {id:new Date().getTime().toString(),name:inputData}
            setitems([...items,allInputData]); // inputData
            setinputData('');
        }
        
    }
    
    function deleteitem(ind){
         const updateitem = items.filter((elm,id)=>{
            return elm.id!=ind;
    })   
    setitems(updateitem);
    }
    
      function edititem(id){
         const newEditItem = items.find((elm)=>{
               return elm.id==id;
         });
         
         settoggle(false);
         setinputData(newEditItem.name);
         setEditNote(id);
        }

    function deleteNote(){
        setitems([]);
    }
//    add data To LocalStorage
    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(items))
    },[items]);

    return(
        <div>
        
        <input type='text' value={inputData} onChange={(e)=>setinputData(e.target.value)}/>
        {toggle?<button onClick={addItem}>Add Note</button>:<button onClick={addItem}>Edite Note</button>}
       
        <div>
        {items.map((elm)=>{
            return(
                <div key={elm.id}>
                <h3>{elm.name}</h3>
 <button onClick={()=>edititem(elm.id)}>Edite Note</button>
 <button onClick={()=>deleteitem(elm.id)}>Delete Note</button>
                </div>

                )
        })}
        </div>

         <button onClick={deleteNote}>Cleare All </button> 

        </div>
    )
}
    export default App;
     


































































































































































































































































































































