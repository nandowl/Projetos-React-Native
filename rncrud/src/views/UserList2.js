import React, { useContext } from 'react'
import { View, Text, FlatList, Alert, StyleSheet } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

import UsersContext from '../context/UsersContext'

export default props => {
    //console.warn(Object.keys(props))

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja realmente excluir esse usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({ 
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                key={user.id}
                bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: ['#5e5ee9', '#00d4ff'],
                  start: { x: 1, y: 0 },
                  end: { x: 0.2, y: 0 },
                }}
                ViewComponent={LinearGradient}
                >
                <Avatar rounded source={{uri: user.avatarUrl}} />
                    <ListItem.Content>
                        <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{user.name}</ListItem.Title>
                        <ListItem.Subtitle style={{ color: 'white' }}>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text>{getActions(user)}</Text>
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList 
                keyExtractor={users => users.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
