import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Books } from "./Books";
import { Searchbar } from "react-native-paper";
import axios from 'axios';
import { API_KEY } from '@env'

export const Home = () => {

    const [books, setBooks] = useState([]);

    const [input, setInput] = useState('');

    const searchBooks = async () => {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${API_KEY}`)
        setBooks(books?.data?.items?.map(item => {
            return {
                id: item?.id,
                name: item?.volumeInfo?.title,
                image: item?.volumeInfo?.imageLinks?.thumbnail,
                authors: item?.volumeInfo?.authors,
                categories: item?.volumeInfo?.categories,
            }
        }))
        setInput('')
    }
    
    return (
        <View style={styles.container}>
            <Searchbar
            placeholder="search book"
            placeholderTextColor="black"
            value={input} 
            onChangeText={setInput}
            onSubmitEditing={() => searchBooks()}
            style={styles.input}
            />
            {books.length ? <Books books = {books}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    input: {
        marginTop: 5,
        marginHorizontal: 5,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
})