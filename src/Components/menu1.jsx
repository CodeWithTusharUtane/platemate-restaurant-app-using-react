import React from 'react'
import {menu1} from '../Data/MenuList1'
import {menu2} from '../Data/MenuList2'
import {menu3} from '../Data/MenuList3'
import {menu4} from '../Data/MenuList4'
import { menu5 } from '../Data/MenuList5'
import { menu6 } from '../Data/MenuList6'
const Menu1 = () => {
  return (
    <div className='flex'>
        <div>
        {
            menu1.map((item)=>{
                return(
                    <>
                        <div className=" ">
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