import React, { createContext, useState } from 'react'

export const store = createContext();

const BlogData = (props) => {
    const[data,setData] = useState([
        {
            id:1,
            Category:"Home",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/run8u2b2ala2qiyccjdp",
            Title:"Le Bistro",
            Name:"European,Italian,Grill,Fast Food",
            Rating:"Rating 3.7",
            Price:"200"
        },
        {
            id:2,
            Category:"Home",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b6fa5396eb8d3a4c3ddb1e9af6d867bb",
            Title:"AL Baked Fried Chicken",
            Name:"Snacks,Indian",
            Rating:"Rating 4.0",
            Price:"120"

        },
        {
            id:3,
            Category:"Home",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi",
            Title:"Meghna Foods",
            Name:"Biryani,Andhra,South Indian",
            Rating:"Rating 4.6",
            Price:"300"
        },
        {
            id:4,
            Category:"Home",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ovelwkcuxkf8pb2ezivl",
            Title:"Kota Kachori and Falahaar",
            Name:"North Indian,sweets,Chaat",
            Rating:"Rating 4.3",
            Price:"250"
        },
        {
            id:5,
            Category:"Home1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h",
            Title:"Chicking",
            Name:"Amerian,grill,snacks,Pizza,Mexican",
            Rating:"Rating 4.1",
            Price:"150"
        },
        {
            id:6,
            Category:"Home1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/6f0945b8b18d9f4241dd1cd9a70e23d7",
            Title:"Magnolia Bakery",
            Name:"Bakery,Desserts,Ice Cream",
            Rating:"Rating 4.5",
            Price:"200"

        },
        {
            id:7,
            Category:"Home1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cd832b6167eb9f88aeb1ccdebf38d942",
            Title:"Truffles Foods",
            Name:"Desserts,American,Italian",
            Rating:"Rating 4.4",
            Price:"100"
        },
        {
            id:8,
            Category:"Home1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mocil3npmwpcdcfaxql1",
            Title:"La Pino'z Pizza",
            Name:"Pizzas",
            Rating:"Rating 3.9",
            Price:"300"
        },
        {
            id:9,
            Category:"Home2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kjilj6yf2fd4vnvqdx6n",
            Title:"Kabab Magic",
            Name:"North Indian,Chinese",
            Rating:"Rating 3.4",
            Price:"220"
        },
        {
            id:10,
            Category:"Home2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/egxf0qblotchjyavztke",
            Title:"Maven Kitchen",
            Name:"Naga,Chinese",
            Rating:"Rating 4.5",
            Price:"260"

        },
        {
            id:11,
            Category:"Home2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/me4mzdjxosmk0lg4ndog",
            Title:"Anand Sweets and Savouries",
            Name:"Desserts,Sweets,North Indian",
            Rating:"Rating 4.5",
            Price:"230"
        },
        {
            id:12,
            Category:"Home2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jxp8y1chnqljwqylpkov",
            Title:"Sri Udupai Park",
            Name:"North Indian,South Indian,Chaat",
            Rating:"Rating 4.3",
            Price:"150"
        },
        {
            id:13,
            Category:"Home3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ml1ituszk5qurjia3r9h",
            Title:"Hari Super sandwich",
            Name:"Chat,snacks,Pizza,Fast Food",
            Rating:"Rating 4.0",
            Price:"200"
        },
        {
            id:14,
            Category:"Home3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
            Title:"Burger King",
            Name:"Burgers,Americans",
            Rating:"Rating 4.1",
            Price:"270"

        },
        {
            id:15,
            Category:"Home3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/soegobqsiqvhmkfvnnkj",
            Title:"Call Me Chow Foods",
            Name:"Chinese,Pan-Asian",
            Rating:"Rating 4.3",
            Price:"400"
        },
        {
            id:16,
            Category:"Home3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/evfa6jofvgu4fjuc01ul",
            Title:"Pizza Hut",
            Name:"Pizzas",
            Rating:"Rating 4.0",
            Price:"200"
        }
    ])
  return (
    <div>
        <store.Provider value = {[data,setData]}>
            {props.children}
        </store.Provider>
    </div>
  )
}

export default BlogData