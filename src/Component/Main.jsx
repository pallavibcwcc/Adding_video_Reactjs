import '../styles/Main.css'
import vedioBg from '../Asset/vedieo.mp4'
const Main = () => {
    return(
        <div className='Main'>
{/* <video src={vedioBg} autoPlay loop muted type="video/mp4"/> */}
{/* <video>
<source src={vedioBg} type="video/mp4"/>
</video> */}
 <video autoPlay loop muted className="w-full h-full object-cover">
           <source src={vedioBg} type="video/mp4" />
           Your browser does not support the video tag.
      </video>
        </div>
    )
}
export default Main