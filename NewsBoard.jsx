import{useState,useEffect} from "react"
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles,setArticles]=useState([]);

  useEffect(() => {
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
  }, [category])
  
  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h2 className="text-center my-4">LATEST <span className="badge bg-danger">NEWS</span></h2>
      <div className="row justify-content-center w-100">
      {articles.map((news,index)=>(
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        </div>
      ))}
       </div>
    </div>

  )
}
NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard
