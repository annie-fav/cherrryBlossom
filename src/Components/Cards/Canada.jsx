import React from 'react'
import { Link } from 'react-router-dom'

const Canada = () => {
    return (
        <>
         <h2 className="text-left ml-20 mt-9 mb-4 font-serif text-xl text-pink-800 font-bold">Cherry Blossom in Canada</h2>
         <img className="w-50 h-36 ml-5 mr-2 rounded-xl float-left" alt="canada" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/12Cherry_blossoms.JPG/800px-12Cherry_blossoms.JPG"/>
         <p className="font-serif ml-5 mr-7 text-justify indent-3.5">Vancouver, British Columbia, is famous for its thousands of cherry trees (estimated 50,000) lining many streets and in many parks, including Queen Elizabeth Park and Stanley Park. Vancouver holds the Vancouver Cherry Blossom Festival every year.[36] With multiple varieties and a temperate climate, they begin to bloom in February yearly and peak in April.</p>
         <br/>
         <p className="font-serif ml-5 mr-9 text-justify indent-3.5">High Park in Toronto, Ontario, features many Somei-Yoshino cherry trees (the earliest species to bloom and much loved by the Japanese for their fluffy white flowers) that were given to Toronto by Japan in 1959. Through the Sakura Project, the Japanese Consulate donated a further 34 cherry trees to High Park in 2001, plus cherry trees to various other locations like Exhibition Place, McMaster University, York University (near Calumet College and on Ottawa Road near McLaughlin College) and the University of Toronto's main (next to Robarts Library) and Scarborough campuses. Niagara Falls has many near the falls itself. Royal Botanical Gardens in Burlington and Hamilton was the recipient of a number of Somei-Yoshino cherry trees that were donated by the Consulate-General of Japan in Toronto as part of the Sakura Project. The trees are located in the Arboretum and the Rock Garden and were planted to celebrate the continual strengthening of friendship between Japan and Canada. Peak bloom time at Royal Botanical Gardens is normally around the last week of April or the first week of May.</p>
         <hr className="mt-10"></hr>
         <Link to="/"><button className="mt-4 ml-14 text-pink-800 italic font-bold font-serif">Back to Home</button></Link>
        </>
    )
}

export default Canada