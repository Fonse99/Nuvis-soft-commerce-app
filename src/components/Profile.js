import react from "react";

import defaultPhoto from "../assets/defaultPhoto.png"

const Profile = ({ photo = defaultPhoto, name, altText = name }) => {

    return (

        <div className="profile-container">

            <img
                className={"profile"}
                src={photo}
                alt={altText} />

        </div>

    )
}

export default Profile;