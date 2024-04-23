import { ActivityIndicator } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { Text, View } from "@/src/components/Themed";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";
import { gql, useQuery } from "@apollo/client";

const query = gql`
    query MyQuery($symbol: String) {
        quote(symbol: $symbol) {
            name
            symbol
            close
            percent_change
        }
    }
`;

export default function StockDetails() {
    const { symbol } = useLocalSearchParams();

    const { data, loading, error } = useQuery(query, { variables: { symbol } });

    if (loading) {
        return <ActivityIndicator/>;
    }

    if (error) {
        return <Text>Stock with symbol {symbol} could not be found</Text>;
    }

    const stock = data.quote;

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen
                options={{ title: stock.symbol, headerBackTitleVisible: false }}
            />
            <StockListItem stock={stock}/>
            <Graph symbol={stock.symbol}/>
        </View>
    );
}