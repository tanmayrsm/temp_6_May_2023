import { Col } from "react-bootstrap";
import Button from "@mui/material/Button"
import gitIcon from "../assets/img/logos/git.png";

export const ProjectCard = ({ title, description, imgUrl, techStack, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx flex items-center bg-gray-700">
        <img src={imgUrl} className="object-cover" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {techStack ?
          <div className="mt-1 flex justify-center items-center bg-white py-1">
            {techStack.map(item => <img src={item} className="max-h-6 max-w-[1.5rem] mx-1 object-contain"></img>) }
          </div>
          : null}
          <div className="mt-2 text-black">
            <button className="rounded-lg border-white flex justify-center w-full items-center">
              <img src={gitIcon} className="max-h-5 max-w-[1.25rem] mx-1"></img>
              <a href={gitUrl} target="_blank" className="text-black no-underline">View Demo</a>
            </button>
          </div>
        </div>
      </div>
    </Col>
  )
}
