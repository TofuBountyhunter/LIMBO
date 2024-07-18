import React from 'react'

const CustomButton = ({onCLick,href,className,children}) => {
    const classes =`font-semibold text-purple-700 transition-all duration-300 ease-linear
                    bg-transparent border-purple-700 border-2 px-8 py-2 hover:shadow-allShadow hover:shadow-purple-700 hover:bg-purple-700 hover:text-white active:scale-95 ${className || ""}`  
    const Button_properties=()=>(
        <button className={classes}>
            {children}
        </button>
    )
    return Button_properties();
}

export default CustomButton

