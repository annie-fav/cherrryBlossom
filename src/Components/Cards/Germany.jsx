import React from 'react'
import { Link } from 'react-router-dom'

const Germany = () => {
    return (
        <>
         <h2 className="text-left ml-20 mt-9 mb-4 font-serif text-xl text-pink-800 font-bold">Cherry Blossom in Germany</h2>
         <img className="w-50 h-36 ml-5 mr-2 rounded-xl float-left" alt="germany" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bonn%2C_Breite_Stra%C3%9Fe_--_2020_--_6522.jpg/220px-Bonn%2C_Breite_Stra%C3%9Fe_--_2020_--_6522.jpg"/>
         <p className="font-serif ml-5 mr-7 text-justify indent-3.5">The cherry blossom is a major tourist attraction in Germany's Altes Land orchard region. The largest Hanami in Germany, in Hamburg, with Japanese-style fireworks, organized by the German-Japanese society, draws tens of thousands spectators every spring. Starting in 2015, Hamburg will be allowed to bestow the title of "Cherry Blossom Queen" by the Japan Cherry Blossom Association, one of only three cities worldwide to receive this privilege. The first Cherry Blossom Queen of Hamburg will be crowned by the Cherry Blossom Queen of Japan on 23 May</p>
         <br/>
         <p className="font-serif ml-5 mr-9 text-justify indent-3.5">In 1990, along prior sections of the Berlin Wall, Japan donated cherry blossoms to express appreciation of German reunification. The gift was supported by donations from the Japanese people allowing for over 9,000 trees to be planted. The first trees were planted in November of that year near Glienicker Bridge.The Cherry Blossom festival in the Bonn Altstadt is also very famous: Kirschblütenfest Bonn.</p>
         <hr className="mt-10"></hr>
         <Link to="/"><button className="mt-4 ml-14 text-pink-800 italic font-bold font-serif">Back to Home</button></Link>
        </>
    )
}

export default Germany