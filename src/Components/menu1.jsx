import React from 'react'
import {menu1} from '../Data/MenuList1'
import {menu2} from '../Data/MenuList2'
import {menu3} from '../Data/MenuList3'
import {menu4} from '../Data/MenuList4'
const Menu1 = () => {
  return (
    <div className='flex'>

        <div>

        {
            menu1.map((item)=>{
                return(
                    <>
                        <div className="w-24">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                )
            })
        }
        </div>
<div className="">

{
    menu2.map((item)=>{
        return(
            <>
                        <div className="w-24">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                )
            })
        }
        </div>

<div className="">

{
    menu3.map((item)=>{
        return(
            <>
                        <div className="w-24">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                )
            })
        }

</div>
<div className="">
    
{
    menu4.map((item)=>{
        return(
            <>
                        <div className="w-24">
                            <img src={item.image} alt="" />
                            
                        </div>
                    </>
                )
            })
        }
        </div>
    </div>
  )
}

export default Menu1