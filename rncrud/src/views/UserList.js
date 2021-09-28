import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
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
                >
                <Avatar source={{uri: user.avatarUrl}} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
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