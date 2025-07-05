import React, {useState} from 'react'

export default function About(props) {

    const[btnText, setBtnText] =useState("Enable Dark Mode");

    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // })

    // let toggleStyle=()=>{
    //     if(myStyle.color=='white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    // }

    // let myStyle={
    //     color: "white",
    //     backgroundColor: "black"
    // }

    let myStyle={
      color: props.mode==='dark' ? 'white' : '#183c71',
      backgroundColor: props.mode==='dark' ? '#183c71' : 'white',
      border : '1px solid',
      borderColor: props.mode==='dark' ? 'white' : '#183c71', 
    }



  return (
    <div className='container' style={myStyle}>
        <h2 className='my-3' style={{color: props.mode==='dark' ? 'white' : '#183c71'}}>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This will analyze your text.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et, dolor rerum assumenda sapiente tempora iure reprehenderit vitae vel mollitia? <code>.information-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
        You don't have to pay
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This website provides free services</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quasi voluptatum praesentium mollitia veniam sit corporis id, aliquam omnis harum magnam, illo cum culpa ducimus. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Information-3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the third item’s information body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nemo. Cupiditate necessitatibus, eos tempore rem, similique recusandae provident voluptatem dolorum eius error, cumque reiciendis sed dignissimos laborum natus ut exercitationem.<code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    {/* <div className="container">
        <button onClick={toggleStyle} type='button' className='btn btn-primary mx-4 my-4'>{btnText}</button>
        </div> */}
    
    </div>
  )
}
