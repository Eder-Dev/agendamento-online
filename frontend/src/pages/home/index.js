//import data from '../../data.json'
import './style.css'
//<link rel="stylesheet" href="./css/home/style.css"/>
import banner from '../../assets/banner.svg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="container">
      <div id="content-home">
        <div id='text'>
          <h1>Agendamento de Consultas</h1>
          <p>Bem-vindo, aqui você consegue agendar sua consulta médica do Posto de Saúdo do bairro Paraíso de forma online.</p>
        </div>
        <div id='entrada'>
          <input id='consulta-text' type='text' placeholder='Escolha sua consulta'/>
          <Link id='consulta-button' to='/agendamento'>Próximo</Link> 
        </div>
      </div>
      <img id='banner'src={banner}/>
    </div>
  );
}

export default Home;
