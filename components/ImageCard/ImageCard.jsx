import './index.scss';

const ImageCard = ({data}) => {
  console.log(data)
  return (
    <div className="image__card">
      <div className="image__card-img">
        <img src= {data.urls.regular}/>
      </div>
      <div className="image__card-user">
        <span>By {data.user.name}</span>
      </div>
    </div>
  )
}

export default ImageCard