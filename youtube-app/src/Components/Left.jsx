
import "./Left.css";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { RiGooglePlayFill } from "react-icons/ri";
import { FiAirplay } from "react-icons/fi";
import { CgPlayButtonR } from "react-icons/cg";
import { GrHistory } from "react-icons/gr";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BsBroadcast } from "react-icons/bs";


export const Left = ()=>{
    return (
        <div className="main">

        <div className="b1">
          <h2 className="b2"><AiFillHome/></h2>
          <p className="b3">Home</p>
        </div>


        <div className="b1">
          <h2 className="b2"><MdExplore/></h2>
          <p className="b3">Explore</p>
        </div>


        <div className="b1">
          <h2 className="b2"><RiGooglePlayFill/></h2>
          <p className="b3">Shorts</p>
        </div>


        <div className="b1">
          <h2 className="b2"><FiAirplay/></h2>
          <p className="b3">Subscriptions</p>
        </div>

<hr />

        <div className="b1">
          <h2 className="b2"><CgPlayButtonR/></h2>
          <p className="b3">Library</p>
        </div>


        <div className="b1">
          <h2 className="b2"><GrHistory/></h2>
          <p className="b3">History</p>
        </div>


        <div className="b1">
          <h2 className="b2"><MdOutlineFeaturedPlayList/></h2>
          <p className="b3">Your Videos</p>
        </div>



        <div className="b1">
          <h2 className="b2"><BiTimeFive/></h2>
          <p className="b3">Watch Later</p>
        </div>


        <div className="b1">
          <h2 className="b2"><BiLike/></h2>
          <p className="b3">Liked Videos</p>
        </div>


        


        <hr />

        <p className="title">Subscription</p>

        <div className="b1">
          
          <img className="subPic" src="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">T-Series</p>
           <h5 className="broadCast"><BsBroadcast/></h5>
        </div>


        <div className="b1">
          <img className="subPic" src="https://yt3.ggpht.com/ytc/AKedOLSsQCQ5OPDxOO21aNL5b7dHEA-42JUP2W7oxMefwA=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">Republic</p>
          <h5 className="broadCast"><BsBroadcast/></h5>
        </div>


        <div className="b1">
          <img className="subPic" src="https://yt3.ggpht.com/ytc/AKedOLSc7IUG42KqMNCPmSC15JZi5YfxCv-uIyUwZh28oQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">Study IQ</p>
          <h5 className="broadCast"><BsBroadcast/></h5>
        </div>



        <div className="b1">
        <img className="subPic" src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">Programmer</p>
        </div>


        <div className="b1">
        <img className="subPic" src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">codeWithHary</p>
          <h5 className="broadCast"><BsBroadcast/></h5>
        </div>



        <div className="b1">
        <img className="subPic" src="https://yt3.ggpht.com/EUsoJXoDysvYXZqVtG2cSuwCZAuic9id4iJoh_MEyqHcfWpF7OnpuV7WzEZCWqMdLtqlYEGI=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">Prep</p>
          <h5 className="broadCast"><BsBroadcast/></h5>
        </div>


        <div className="b1">
        <img className="subPic" src="https://yt3.ggpht.com/q4XpFn68nGLu9bD2htNEIq3ZNNbWyuf9dMf8xKpjFoiHkGO3DuW14B6h2cSk0BE6Trj_KBSjLA=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <p className="b3">Code</p>
        </div>



        </div>
    )
}
