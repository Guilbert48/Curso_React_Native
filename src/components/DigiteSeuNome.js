import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default props => {
    const [nome, setNome] = useState('Digite seu nome')

    return(
    <View>
        <Text>{nome}</Text>
        <TextInput
            placeholder=' Digite seu Nome'
            value={nome}
            onChangeText={ nome => setNome(nome)}
        />
    </View>
    )
}