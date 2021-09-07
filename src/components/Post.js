import React from "react";

function Post(props){

    const [likes,addLikes]=React.useState(50);

    const setLikes=()=> {
        addLikes(likes + 1)
    }





    return(
        <div className={"post"}>
            <h1>Name:{props.data.name1}</h1>
            <button onClick={setLikes}>{likes} likes</button>
            <h2>The coolest color is {props.data.color1}</h2>


            <h1>Name:{props.data.name2}</h1>
            <button onClick={setLikes}>{likes} likes</button>
            <h2>The coolest color is {props.data.color2}</h2>




            <h1>Name:{props.data.name3}</h1>
            <button onClick={setLikes}>{likes} likes</button>

            <h2>The coolest color is {props.data.color3}</h2>

        </div>
    )
}
export default Post;