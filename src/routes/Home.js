import './Home.scss';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Row from '../components/Row'
import Banner from '../components/Banner'
import { authTeste, categories } from '../api';
import Nav from '../components/Nav';

  const Home = () => {
    const navigateTo = useNavigate()
    const location = useLocation();

    async function autenticacao() {
      let sessionID = location.state ? location.state.sessionID : ''
      debugger
      let res = await authTeste({'sessionID': sessionID})

      if (res.codigo) {
        alert('Login não realizado')
        navigateTo('/login')
      }
    }

    useEffect(() => {
      autenticacao()
    })

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