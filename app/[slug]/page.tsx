"use client";
import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";
import React, { useState, useEffect } from "react";


export default function FoodItem( { params } :  { params: Promise<{slug: string}> } ){
     const {slug}=React.use(params);
     const [food,setFood]=useState({ strMeal: '', strMealThumb:"globe.svg", strCategory:"", strCountry:"", strInstructions:"" , strIngredient1:"", strIngredient2:"", strIngredient3:"", strIngredient4:"", strIngredient5:"", strIngredient6:"", strIngredient7:"", strIngredient8:"", strIngredient9:"", strIngredient10:"", strIngredient11:"", strIngredient12:"", strIngredient13:"", strIngredient14:"", strIngredient15:"", strIngredient16:"", strIngredient17:"", strIngredient18:"", strIngredient19:"", strIngredient20:"",
     strMeasure1:"", strMeasure2:"", strMeasure3:"", strMeasure4:"", strMeasure5:"", strMeasure6:"", strMeasure7:"", strMeasure8:"", strMeasure9:"", strMeasure10:"",
     strMeasure11:"", strMeasure12:"", strMeasure13:"", strMeasure14:"", strMeasure15:"", strMeasure16:"", strMeasure17:"", strMeasure18:"", strMeasure19:"", strMeasure20:"",
     });
     
     useEffect(()=>{
      try{

          async function fetchFood(){
                const x=await fetch(`${process.env.URL_ID}?i=${slug}`);
                    // if(!x.ok){ throw new Error(x.status) }
               const y=await x.json();

               setFood(y?.meals[0]);
               
          }
         
          fetchFood();
          
     }
     catch(err){
          console.warn(err);
     }
     },[]);

     
     return (
          <div className="container mx-auto px-3">
           <Header></Header>
                <Nav></Nav>
                <main className="py-3">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                                 <h2 className="text-4xl font-bold">Name: { food?.strMeal }</h2>
                                   <p className="my-2">Food ID: {slug}</p>  
                                   <p className="my-2">Category: { food?.strCategory }</p>  
                                   <p className="my-2">Country: { food?.strCountry }</p>  

                               

                                   <h3 className="text-2xl font-bold">Ingredients</h3>
                                   <ol>
                                         { food?.strIngredient1 && <li>{food?.strIngredient1} - <i>{food?.strMeasure1}</i></li> }
                                         { food?.strIngredient2 && <li>{food?.strIngredient2} - <i>{food?.strMeasure2}</i></li> }
                                         { food?.strIngredient3 && <li>{food?.strIngredient3} - <i>{food?.strMeasure3}</i></li> }
                                         { food?.strIngredient4 && <li>{food?.strIngredient4} - <i>{food?.strMeasure4}</i></li> }
                                         { food?.strIngredient5 && <li>{food?.strIngredient5} - <i>{food?.strMeasure5}</i></li> }
                                         { food?.strIngredient6 && <li>{food?.strIngredient6} - <i>{food?.strMeasure6}</i></li> }
                                         { food?.strIngredient7 && <li>{food?.strIngredient7} - <i>{food?.strMeasure7}</i></li> }
                                         { food?.strIngredient8 && <li>{food?.strIngredient8} - <i>{food?.strMeasure8}</i></li> }
                                         { food?.strIngredient9 && <li>{food?.strIngredient9} - <i>{food?.strMeasure9}</i></li> }
                                         { food?.strIngredient10 && <li>{food?.strIngredient10} - <i>{food?.strMeasure10}</i></li> }
                                         { food?.strIngredient11 && <li>{food?.strIngredient11} - <i>{food?.strMeasure11}</i></li> }
                                        { food?.strIngredient12 && <li>{food?.strIngredient12} - <i>{food?.strMeasure12}</i></li> }
                                        { food?.strIngredient13 && <li>{food?.strIngredient13} - <i>{food?.strMeasure13}</i></li> }
                                        { food?.strIngredient14 && <li>{food?.strIngredient14} - <i>{food?.strMeasure14}</i></li> }
                                        { food?.strIngredient15 && <li>{food?.strIngredient15} - <i>{food?.strMeasure15}</i></li> }
                                        { food?.strIngredient16 && <li>{food?.strIngredient16} - <i>{food?.strMeasure16}</i></li> }
                                        { food?.strIngredient17 && <li>{food?.strIngredient17} - <i>{food?.strMeasure17}</i></li> }
                                        { food?.strIngredient18 && <li>{food?.strIngredient18} - <i>{food?.strMeasure18}</i></li> }
                                        { food?.strIngredient19 && <li>{food?.strIngredient19} - <i>{food?.strMeasure19}</i></li> }
                                        { food?.strIngredient20 && <li>{food?.strIngredient20} - <i>{food?.strMeasure20}</i></li> }
                                        
                                   </ol>

                                   <h3 className="font-bold text-2xl my-2">Instructions</h3>

                                   <p className="my-2">{food?.strInstructions} </p>

                         </div>
                         <div>
                              <img src={food?.strMealThumb} alt={food?.strMeal} width={400} height={300} />
                         </div>
                    </div>

                   
                   
                </main>
                <Footer></Footer>
           </div>     
     )
}