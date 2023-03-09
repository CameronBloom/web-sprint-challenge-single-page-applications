export default function RestaurantCard(props) {
//     { imageUrl: "https://source.unsplash.com/random/300x200/?img=1", placeName: "McDonald's", placePrice: "$", descriptions: ["American", "Fast Food", "Burgers"], wait: "20-30 Min", fee: "$5.99"}

  const { imageUrl, placeName, placePrice, descriptions, wait, fee } = props.restaurant;
  console.log(imageUrl)
  return (
    <div className="rest-container">
      <img src={imageUrl} alt={placeName} />
      <div className="rest-name">{placeName}</div>
      <div className="rest-descs">
        <div className="rest-price">{placePrice}&nbsp;</div>
        { descriptions.map((tag, idx) => {
          if (idx < 3) {
            return (
              <div>&#x2022;&nbsp;{tag}&nbsp;</div>
            )
          } else {
            return true;
          }
        })}
      </div>
      <div className="rest-delivery">
        <div className="rest-box">{wait}</div>
        <span />
        <div className="rest-box">{fee} Delivery Fee</div>
      </div>
      
    </div>
  )
}

