import './Home.scss';
import Row from '../components/Row'
import Banner from '../components/Banner'
import { categories } from '../api';
import Nav from '../components/Nav';

  const Home = () => {

    return (
      <div className="Home">
        <Nav />
        <Banner />
        {categories.map( (category) => {
          return <Row 
                    key={category.name} 
                    title={category.title} 
                    path={category.path}
                    isLarge={category.isLarge}
                  />
        } )}
  
      </div>
    );
}

export default Home;