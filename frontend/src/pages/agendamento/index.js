//import data from '../../data.json'
import api from '../../api/api.js'
import {useEffect, useState} from 'react'
//<link rel="stylesheet" href="./css/agendamento/style.css"/>
import './style.css'
import banner from '../../assets/banner2.svg'
function Agendamento(){
	const [data, setData] = useState({horario: []})
	useEffect(() => {
		console.log('useEffect')
		api.get('/').then(response => {
			console.log(response)
	      	setData(response.data);
	    })
	},[])
	return(
		<div className="container">
			
			<div id='content-agendamento'>
				<h1>Agende sua consulta...</h1>
				<div className='quest'>
					<p className='label'>Nome Completo</p>
					<input type='text' className='nome' placeholder='Escreva aqui'/>
				</div>
				<div className='quest'>
					<p className='label'>CPF</p>
					<input type='number' className='cpf' placeholder='Apenas número'/>
				</div>
				<div className='quest'>
					<p className='label'>Horario</p>
					<select className='horario'>
						{
							data.horario.map((value, index) => {
								return(<option>{value}</option>);
							})

						}
					</select>
				</div>
				<button id='consulta-button'>Concluir</button> 
			</div>
			<img id='banner'alt='Banner' src={banner}/>
		</div>
	)
}

export default Agendamento;