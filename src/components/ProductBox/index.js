import "./style.css"

const ProductBox = ({id, wishlist, photo, name, price, comp_value, star}) => {
  const stars = [];
  for (let i = 0; i < star; i ++) {
    stars.push(<li><i className="fa fa-star" aria-hidden="true"></i></li>);
  }
  for (let i = star; i < 5; i ++) {
    stars.push(<li><i className="fa fa-star-o" aria-hidden="true"></i></li>);
  }
  return (
    <>
      <div className="flex flex-col mb-[16px] relative product-box">
        <div id={"myCarousel" + id} className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">
              <img alt="Image" src={photo.one} />
            </div>
            <div className="item">
              <img alt="Image" src={photo.two} />
            </div>
            <div className="item">
              <img alt="Image" src={photo.three} />
            </div>
          </div>
          <a className="left carousel-control" href={"#myCarousel" + id} data-slide="prev">
            <span className="icon-prev"></span>
          </a>
          <a className="right carousel-control" href={"#myCarousel" + id} data-slide="next">
            <span className="icon-next"></span>
          </a>
        </div>
        <div className="product-content-box">
          <h6>
            Clearance
            <a href="#">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </a>
          </h6>
          <h5>{name}</h5>
          <p>
            ${price} <span>Comp. Value: ${comp_value}</span>
          </p>
          <ul>
            { stars }
          </ul>
        </div>
        <div>
          {
            wishlist ? 
            <i className="fa fa-heart wishlist-heart" aria-hidden="true"></i> :
            <i className="fa fa-heart-o wishlist-heart" aria-hidden="true"></i>
          }
          
        </div>
      </div>
    </>
  );
};

export default ProductBox;
