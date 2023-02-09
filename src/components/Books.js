import { Book } from "./Book"
import { FlatList } from "react-native"


export const Books = ({books}) => {
    console.log(books)
    return (         
        <FlatList
            data={books}
            renderItem={({ item }) => (
                    <Book
                    key={item?.id}
                    id={item?.id}
                    name={item?.name}
                    poster={item?.image}
                    author={item?.authors}
                    categories={item?.categories}
                    />
                )}
        />
    )
}