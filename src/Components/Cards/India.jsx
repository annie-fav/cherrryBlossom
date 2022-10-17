import React from 'react'
import { Link } from 'react-router-dom'

const India = () => {
    return (
        <>
        <h2 className="text-left ml-20 mt-9 mb-4 font-serif text-xl text-pink-800 font-bold">Cherry Blossom in India</h2>
         <img className="w-50 h-36 ml-5 mr-2 rounded-xl float-left" alt="india" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zosterops_japonicus%2C_Cibodas_Botanical_Gardens%2C_Java.jpg/220px-Zosterops_japonicus%2C_Cibodas_Botanical_Gardens%2C_Java.jpg"/>
         <p className="font-serif ml-5 mr-7 text-justify indent-3.5">In India, the cherry blossom is an attraction as well, most notably in Himalayan states like Himachal Pradesh, Uttarakhand, Jammu & Kashmir, Sikkim & northern districts of West Bengal namely Jalpaiguri and Darjeeling, along with tropical highlands of Garo Hills and Khasi Hills in Northeast India where Prunus cerasoides is native to.[39] Temple towns like Kalpa, Sarahan, Chitkul, Sangla and Narkanda are notable for their wild cherry blossoms covering Himalayan foothills. They can also be seen in various British-era botanical gardens especially in Nilgiri Hills in the Western Ghats in southern India.
</p>
         <br/>
         <p className="font-serif ml-5 mr-9 text-justify indent-3.5">Prunus cerasoides, called wild Himalayan cherry, Indian wild cherry, and sour cherry, is known in Hindi as padam, pajja, or padmakashtha.[39][42] Among Hindus in Himachal Pradesh and Uttarakhand, it is considered sacred and associated with Vishnu and Shiva.[43][44] During Maha Shivaratri, the leaves are used to make a wreath with wild citrus fruits and hung at the prayer altar. In addition, the leaves are also used as incense.[45][46] Unlike its cousin species in Japan and Korea, which flower in spring, Prunus cerasoides cherry trees flower during autumn. Cherry blossom festivals in India are held during October–November when Prunus cerasoides blooms.[47] Shillong is notable for its cherry blossom festival during autumn.</p>
         <hr className="mt-10"></hr>
         <Link to="/"><button className="mt-4 ml-14 text-pink-800 italic font-bold font-serif">Back to Home</button></Link>
        </>
    )
}

export default India