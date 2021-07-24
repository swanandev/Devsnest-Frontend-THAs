import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BSItem from './BSItem';

const BSGrid = () => {
    const day_nos = ['01_2', '03', '04', '05', '06', '07', '08', '09','10', '11', '12', '13', '15'];
    const dayDiv = []
    for(let i = 0; i < day_nos.length ; i+=5){
        let jx = []
        for(let j = i ; j < i + 5 && j < day_nos.length; j++){
            jx.push(<Col style={{width:'100%'}}><BSItem title={day_nos[j]}/></Col>)
        }
        dayDiv.push(jx);
    }
    return (
        <div>
            <div className="bootstrap-demo">
                <Container style={{width:'80vw'}}>   
                    {dayDiv.map(el => <Row>{el}</Row>)}
                </Container>
                <h3 className='div-title'>BootStrap</h3>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default BSGrid
