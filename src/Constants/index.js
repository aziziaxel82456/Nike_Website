import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import blueShoe from "../assets/images/png/blue-shoe.png";
import pinkShoe from "../assets/images/png/pink-shoe.png";
import maronShoe from "../assets/images/png/maron-shoe.png";


// products
import product1 from "../assets/images/shoe4.svg"
import product2 from "../assets/images/shoe5.svg"
import product3 from "../assets/images/shoe6.svg"
import product4 from "../assets/images/shoe7.svg"
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {customer1,customer2} from "../assets/images"

export const statistics = [
    {value: "1k+", label: "Brands"},
    {value:"500+", label : "Shops"},
    {value : "250k+", label: "Customers"}
];
export const navLikns = [
    {value : "Home",href : "#home" },
    {value : "About Us",href : "#about" },
    {value : "Products",href : "#product" },
    {value : "Contact Us",href : "#contact" }
] ;
export const cards =[
    {id:"1", image: maronShoe},
    {id:"1", image: pinkShoe},
    {id:"1", image: blueShoe}
];
export const products = [
    {image:product1  ,name:"Nike Air Jordan-01"  ,price: "200.20$" },
    {image:product2  ,name:"Nike Air Jordan-02"  ,price:"210.20$" },
    {image:product3  ,name:"Nike Air Jordan-1900"  ,price:"220.20$" },
    {image:product4 ,name:"Nike Air Jordan-100"  ,price:"190.20$" }
];
export const services= [
    {id:"1" ,image: truckFast ,label: "Free shipping" ,subtext: "Enjoy seamless shopping with our complimentary shipping service."},
    {id:"2" ,image: shieldTick ,label: "Secure Payment",subtext: "Experience worry-free transactions with our secure payment options."},
    {id:"3" ,image: support ,label: "Love to help you",subtext: "Our dedicated team is here to assist you every step of the way."}
];
export const reviews= [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];
export const socialMedia =[
    {src: facebook,alt: "Facebook" },
    {src: twitter,alt: "Twitter" },
    {src: instagram,alt: "Instagram" }
];
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

