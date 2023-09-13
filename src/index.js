import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json'
// import './index.css';

// const paragraph = React.createElement('p', {id: 'test-P-id', children: ['I am P']})

// const p = <p id='test-P-id'>I am P</p>

// const div = React.createElement('div', { name: 'main', id: 'test-id', className: 'test-class', children: p,}, )
// const div = <div  name='main' id='test-id' className='test-class'>{p}</div>

const Head = () => {
    return <p> I am Head</p>
}


const Card = () => {
    return data.map(photo => {
        return(
            <div key={photo.id} className="card mx-auto my-2" style={{width: '18rem'}}>
<img src={photo.url} className="card-img-top" alt={photo.title}/>
<div className="card-body">
  <h5 className="card-title">Card title: {photo.title}</h5>
  {/* {head()} */}
  <Head />
  <a href="htpp" className="btn btn-primary">Go somewhere</a>
</div>
</div>
        )
    })
}

ReactDOM.createRoot(document.getElementById('root')).render(<Card />)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode></React.StrictMode>);

