import PropTypes from "prop-types";
import image from '../assets/NewsApp.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-4 px-3 py-3" style={{maxWidth:"350px"}}>
  <img src={src?src:image} style={{ height: "200px",width: "100%",objectFit: "cover",borderRadius: "10px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description? description.slice(0,90):"News is information about something that has just happened"}</p>
    <a href= {url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItem
