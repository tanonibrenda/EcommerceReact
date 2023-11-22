import React from "react";
import  Recetas  from "./Recetas";
import  Limpieza  from "./Limpieza";


const Consejos = () => {
    return(
        <div>
            
        <div className="container-md">
            <section className="container d-flex">
                <div className="w-100 h-100"> 
                    <Recetas/>
                </div>

            </section>
            <section className="container d-flex">
                <div className="w-100 h-100"> 
                    <Limpieza/>
    </div>
    </section>
    <section className="d-flex">
      <div className="w-100 h-100"> 
        
    </div>
    </section>
</div>
        </div>
    )
}
export default Consejos;