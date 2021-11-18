import React from "react"
const Stars = props => {
    const { val } = props;

    return (
        <>
            {[...Array(5)].map((v, index) => {
                return (
                    <i className={`gray-star material-icons ${Number(val) > index && "yellow-star"}`} key={index}>star</i>
                );
            })}
        </>
    );
};

export default Stars;