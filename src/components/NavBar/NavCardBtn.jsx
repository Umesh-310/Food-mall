import React from 'react'

function NavCardBtn(props) { 

  // console.log('NavCardBtn.jsx')
  return (
    <div className="navbar-text" role="search">
        <button onClick={() => props.onClick(true)} className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <b className=""><i>{props.icon}</i>{props.text}</b>
            <span>{props.cardOrder}</span>
            </button>
      </div>
  )
}

export default NavCardBtn