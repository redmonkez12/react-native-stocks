import { StyleSheet, FlatList } from 'react-native';

import { View } from "@/src/components/Themed";
import StockListItem from "@/src/components/StockListItem";
import top5 from "@/assets/data/top5.json";

export default function TabOneScreen() {
    const stocks: any[] = Object.values(top5);

    return (
        <View style={styles.container}>
            <FlatList
                data={stocks}
                renderItem={({ item }) => <StockListItem stock={item} />}
                contentContainerStyle={{ gap: 20, padding: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
