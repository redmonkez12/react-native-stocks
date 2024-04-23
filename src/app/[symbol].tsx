import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "@/src/components/Themed";
import top5 from "@/assets/data/top5.json";
import StockListItem from "@/src/components/StockListItem";
import Graph from "@/src/components/Graph";

export default function StockDetails() {
    const { symbol } = useLocalSearchParams();

    // @ts-ignore
    const stock = top5[symbol];

    if (!stock) {
        return (
            <Text>Stock with symbol {symbol} not exist.</Text>
        );
    }

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen
                options={{ title: stock.symbol, headerBackTitleVisible: false }}
            />
            <StockListItem stock={stock} />
            <Graph symbol={stock.symbol} />
        </View>
    );
}