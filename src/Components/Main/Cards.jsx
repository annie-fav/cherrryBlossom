import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
      <div>
        <h2 className="text-left ml-20 mt-9 mb-4 font-serif text-xl text-pink-800 font-bold">By country and region</h2>
        <div className="flex flex-wrap text-center ml-28">
        <div className="ml-14 border-dotted border-black border-2">
            <img className="w-40 h-36" alt="canada" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/12Cherry_blossoms.JPG/800px-12Cherry_blossoms.JPG"/>
            <Link to="/canada"><p className="text-center font-serif text-pink-800 font-bold">Canada</p></Link>
        </div>
        <div className="ml-14 border-dotted border-black border-2">
            <img className="w-40 h-36" alt="germany" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bonn%2C_Breite_Stra%C3%9Fe_--_2020_--_6522.jpg/220px-Bonn%2C_Breite_Stra%C3%9Fe_--_2020_--_6522.jpg"/>
            <Link to="/germany"><p className="text-center font-serif text-pink-800 font-bold">Germany</p></Link>
        </div>
        <div className="ml-14 border-dotted border-black border-2">
            <img className="w-40 h-36" alt="new-zeland" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Christchurch_cherry_blossoms_and_water_wheel.jpg/800px-Christchurch_cherry_blossoms_and_water_wheel.jpg"/>
            <Link to="/newzeland"><p className="text-center font-serif text-pink-800 font-bold">New Zeland</p></Link>
        </div>
        <div className="ml-14 border-dotted border-black border-2">
            <img className="w-40 h-36" alt="Brazil" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/CuritibaPracaDoJapaoCerejeira.JPG/220px-CuritibaPracaDoJapaoCerejeira.JPG"/>
            <Link to="/brazil"><p className="text-center font-serif text-pink-800 font-bold">Brazil</p></Link>
        </div>
        <div className="ml-14 border-dotted border-black border-2">
            <img className="w-40 h-36" alt="india" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zosterops_japonicus%2C_Cibodas_Botanical_Gardens%2C_Java.jpg/220px-Zosterops_japonicus%2C_Cibodas_Botanical_Gardens%2C_Java.jpg"/>
            <Link to="/india"><p className="text-center font-serif text-pink-800 font-bold">India</p></Link>
        </div>
        </div>
        <hr className="mt-10"></hr>
      </div>
    )
}

export default Cards