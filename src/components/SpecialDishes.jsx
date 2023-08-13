import React from 'react'

const SpecialDishes = () => {
  return (
    <>
    <div className="dishesHeadingArea">
        <h4>This week's specials!</h4>
        <button className='btn'>Online Menu</button>
    </div>
    <div className="dishCardsArea">
        <div className="dishCard">
            <img src="images/dish1.jpg" alt=""/>
            <div>
                <h5>  dish name</h5>
                <span> $ 180.00 </span>            
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum adipisci nam ea perferendis ipsum consequuntur temporibus repellat placeat modi, enim asperiores aliquam? Natus, molestiae amet.
            </p>
            <a href="">Order a delivery</a>

        </div>
        <div className="dishCard"image>
            <img src="images/dish1.jpg" alt="" />
            
            <div>
                <h5>  dish name</h5>
                <span> $ 180.00 </span>            
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum adipisci nam ea perferendis ipsum consequuntur temporibus repellat placeat modi, enim asperiores aliquam? Natus, molestiae amet.
            </p>
            <a href="">Order a delivery</a>

        </div>
        <div className="dishCard"image>
        <img src="images/dish1.jpg" alt="" />
            <div>
                <h5>  dish name</h5>
                <span> $ 180.00 </span>            
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum adipisci nam ea perferendis ipsum consequuntur temporibus repellat placeat modi, enim asperiores aliquam? Natus, molestiae amet.
            </p>
            <a href="">Order a delivery</a>

        </div>
    </div>
    </>
  )
}

export default SpecialDishes