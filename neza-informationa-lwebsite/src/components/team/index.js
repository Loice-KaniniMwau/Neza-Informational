
import React from "react";
import './style.css'
import Team from "../../atoms/team";
import { BsLinkedin } from "react-icons/bs";

const The_Team=()=>{
return(
    <>
 <div className="team_title">
            <h1>Team</h1>
        </div>

    <div className="team">
    <div className="team-content">
        {Team.map((team, index) => (
            <div key={index} className="team-container">
                <div className="team-member">
                    <img src={team.image} alt={team.name} className="img-menu" />
                    <div className="member-info">
                        <h2>{team.name}</h2>
                        
                        <a href={team.linkedin}><BsLinkedin className="linkedin-icons"/></a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


</>
)
}
export default The_Team