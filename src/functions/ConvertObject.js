
function  ConvertObject(setCoinData, Data) {
  console.log(Data)
  if(Data){
    setCoinData({
      id:Data.id,
      name:Data.name,
      symbol:Data.symbol,
      image:Data.image.large,
      desc:Data.description.en,
      price_change_percentage_24h:Data.market_data.price_change_percentage_24h,
      total_volume:Data.market_data.total_volume.inr,
      current_price:Data.market_data.current_price.inr,
      market_cap:Data.market_data.market_cap.inr
    });
  }
}
export default ConvertObject
