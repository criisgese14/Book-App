import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { API_KEY } from '@env'
import axios from 'axios';

export const SearchBar = ({setBooks}) => {

    const [input, setInput] = useState('');

    const searchBooks = async () => {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${API_KEY}`)
        setBooks(books.data.items)
        setInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
            style = {styles.input}
            placeholder="search book"
            placeholderTextColor="grey"
            value={input} 
            onChangeText={setInput}
            onSubmitEditing={searchBooks}
            />
            <TouchableOpacity onPress={() => searchBooks()}>
                <View style={styles.searchButton}>
                    <Ionicons name='search' size={25}/>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    searchButton: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 50,
    }
    
})