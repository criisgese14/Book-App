import { useState } from "react"
import { View, Text } from "react-native"
import { SearchBar } from "./SearchBar"


export const Home = () => {

    const [books, setBooks] = useState([]);

    return (
        <View>
            <Text>Home Screen</Text>
            <SearchBar setBooks={setBooks}/>
        </View>
    )
}