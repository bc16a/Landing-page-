import React, { useState } from 'react';
import * as S from './styled';

function Home() {
    const [email, setEmail] = useState('');
    const [erro, setError] = useState(false);

    function verification(){
        if(email.includes("@")){
            setError(false)
        }else{
            setError(true)
        }       
    }

    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input className="emailInput" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                < S.button type="button" onClick={verification}> Enviar </S.button >
            </S.Content>
            { erro ? 
        <S.ErrorMsg>Esse email digitado não é válido, tente Novamente</S.ErrorMsg> : ''
    }
        </S.HomeContainer>
    );
}

export default Home;