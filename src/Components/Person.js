import './Person.css'
import { Link } from 'react-router-dom';
function Person() {
  return (
    <div>
      <div className='header'>
        <h1>SELECT ACCORDING TO YOUR KNOWLEDGE ON SPECIFICATIONS</h1>
      </div>
    <div className="typesofpersoncontainer">
          <div className="typesofperson">
                <button  id="typesofpersonbutton">
                <Link to={'/Beginnerform'} >
                    <div >
                       
                      <img src='https://cdn-icons-png.flaticon.com/512/3048/3048127.png' alt='person1' style={{ width: '230px', height: 'auto' }}></img>
                    </div>
                    <div className='beginnerlink'>
                        <h2>BEGINNER</h2>
                    </div>
                </Link>
                </button>

            </div>
            <div className="typesofperson">
                <button  id="typesofpersonbutton2">
                <Link to={'/Intermediateform'} >
                    <div >
                        
                        <img src='https://cdn-icons-png.flaticon.com/512/4042/4042171.png' alt='person2' style={{ width: '230px', height: 'auto' }}></img>
                        
                    </div>
                    <div>
                        <h2>INTERMEDIATE</h2>
                    </div>
                    </Link>
                </button>

            </div>
            <div className="typesofperson">
                <button  id="typesofpersonbutton3">
                <Link to={'/Proform'} >
                    <div >
                       
                        <img src='https://cdn-icons-png.flaticon.com/512/9308/9308310.png' alt='person3' style={{ width: '230px', height: 'auto' }}></img>
                    </div>
                    <div>
                        <h2>PRO</h2>
                    </div>
                    </Link>
                </button>

            </div>
           
           

    </div>
    </div>
  );
}

export default Person;
