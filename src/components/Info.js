import React from "react"

export default function Info(){
    return(
        <div className="info">
            <img src="../images/333.jpg"  className="info--img"/>
            <h2 className="info--name">sahar mustafa</h2>
            <p className="info--title">Frontend Developer</p>
            <a href="#" className="info--website">www.saharghoniem.com</a>
            <div className="buttons">
                <a href="#" className="button--email">
                <i className="fa-solid fa-envelope"></i>
                Email</a>
                <a href="#" className="button--linkedin">
                <i className="fa-brands fa-linkedin"></i>
                Linkedin</a>
            </div>
            
            
        </div>
        
    )
}