import './Draft1.css'
import react,{useState} from 'react';
import { Link } from 'react-router-dom';
function Draft1() {
    const [count,setcount] =useState(0);
    const [img,setimage]=useState("https://cdn-icons-png.flaticon.com/512/3048/3048127.png")
    const [name,setName]=useState("BEGINNER");
    const [link,setlink]=useState("/Beginnerform")
    const clickhandler=() =>{
        console.log(count);
        if(count===0){
            setName('BEGINNER');
            setimage('https://cdn-icons-png.flaticon.com/512/3048/3048127.png');
            setlink('/Beginnerform');
            setcount(count+1);
        }
        else if(count===1){
            setName('INTERMEDIATE');
            setimage('https://cdn-icons-png.flaticon.com/512/4042/4042171.png');
            setlink('/Intermediateform');
            setcount(count+1);
        }
        else if(count===2){
            setName('PRO');
            setimage('https://cdn-icons-png.flaticon.com/512/9308/9308310.png');
            setlink('/Proform');
            setcount(0);
        }
    }
  return (
    <div>
      <div className='header'>
        <h1>SELECT ACCORDING TO YOUR KNOWLEDGE ON SPECIFICATIONS</h1>
      </div>
    <div className="typesofpersoncontainer">
          <div className="typesofperson">
            <Link to={link} >
                <button id="typesofpersonbutton">
                    <div >
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoYalG0iZwdwwSFMhNL4aDADjcSJFcuo31Y9OY6saF8ZG5dq3lLc8uXw0eJfUwvdwjTw&usqp=CAU" alt="person" />     */}
                      <img src={img}alt='person1' style={{ width: '230px', height: 'auto' }}></img>
                    </div>
                    <div>
                        <h2>{name}</h2>
                    </div>
                </button>
            </Link>

            </div>
            <div className="typesofperson">
                <button onClick={clickhandler} id="typesofpersonbutton2">
                    <div >
                        {/* <img src='https://png.pngtree.com/element_our/20190601/ourmid/pngtree-start-icon-image_1344375.jpg' alt='person3' style={{ width: '50px', height: 'auto' }}></img> */}
                        <img src={'https://w7.pngwing.com/pngs/323/627/png-transparent-green-arrow-computer-icons-next-arrow-text-logo-green-arrow.png'} alt='person3' style={{ width: '60px', height: 'auto' }}></img>
                    </div>
                </button>

            </div>
            
           
           

    </div>
    </div>
  );
}

export default Draft1;
