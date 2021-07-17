import React, { useState } from 'react';
import * as S from './styled';

function Home() {
    const [email, setEmail] = useState('');

    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input className="emailInput" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                < S.button type="button"> Enviar </S.button >
            </S.Content>
        </S.HomeContainer>
    );
}

export default Home;