import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title:'Террасная доска FAYNAG VELVET Венге', price: 295, imageUrl:"/img/doski/velvet.jpg"
  },
  {
    title:'Террасная доска FAYNAG VELVET Зебра', price: 600, imageUrl:"/img/doski/zebra.jpg" 
  },
  {
    title:'Террасная доска FAYNAG VELVET Кварц', price: 700, imageUrl:"/img/doski/velvet_kvarc.jpg" 
  },
  {
    title:'Террасная доска FAYNAG VELVET Серебро', price: 800, imageUrl:"/img/doski/velvet_silver.jpg" 
  }
  
 
];

function App() {
  return (
    <div className="wrapper clear">
      
      <Drawer />

      <Header />

      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все Доски</h1>
            <div className="search-block ">
                <img width={17} height={17} src="/img/search.svg" alt="Search"/>
                <input placeholder="Поиск..."/>



            </div>          
        </div>
        

        <div className="d-flex">

          {arr.map((obj)=>(
           <Card 
           title= {obj.title}
           price= {obj.price}
           imageUrl={obj.imageUrl}
           onFavorite={()=>console.log('Добавили в закладки')}
           onPlus={()=>console.log('Нажали на плюс')}
         />
         ))} 
           
        </div>
      </div>
    </div>
  );
}

export default App;
