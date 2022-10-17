import React from 'react'
import { Link } from 'react-router-dom'

const Brazil = () => {
    return (
        <>
        <h2 className="text-left ml-20 mt-9 mb-4 font-serif text-xl text-pink-800 font-bold">Cherry Blossom in Brazil</h2>
        <img className="w-50 h-36 ml-5 mr-2 rounded-xl float-left" alt="brazil" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/CuritibaPracaDoJapaoCerejeira.JPG/220px-CuritibaPracaDoJapaoCerejeira.JPG"/>
         <p className="font-serif ml-5 mr-7 text-justify indent-3.5">With the Japanese diaspora to Brazil, many immigrants brought seedlings of cherry trees. In São Paulo State, home to the largest Japanese community outside Japan, it is common to find them in Japan-related facilities and in some homes, usually of the cultivars Prunus serrulata 'Yukiwari' and Prunus serrulata var. lannesiana 'Himalaya'. Some cities, such as Garça[29] and Campos do Jordão,[30] have annual festivals to celebrate the blooming of the trees and Japanese culture. In the Parana State (in southern Brazil), many cities received many of these immigrants, who planted the trees, as in Apucarana,[31] Maringá, Cascavel[32] and especially in the capital city of Curitiba.</p>
         <br/>
         <p className="font-serif ml-5 mr-9 text-justify indent-3.5">In the capital city of Paraná, the first seedlings were brought by Japanese immigrants in the first half of the 20th century, but large quantities of them were only planted from the 1990s, with the opening of the Botanical Garden of Curitiba.[33] Nowadays, the seedlings are produced locally and used in afforestation[34] of streets and squares – as in the Japanese Square, where there are more than 30 cherry trees around the square which were sent by the Japanese Empire to Curitiba.</p>
         <hr className="mt-10"></hr>
         <Link to="/"><button className="mt-4 ml-14 text-pink-800 italic font-bold font-serif">Back to Home</button></Link>
        </>
    )
}

export default Brazil