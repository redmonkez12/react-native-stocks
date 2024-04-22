import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MonoText } from "./StyledText";

import { Text, View } from "./Themed";
import Colors from "@/constants/Colors";

export type Stock = {
    name: string;
    symbol: string;
    close: string;
    percent_change: string;
};

type Props = {
    stock: Stock;
};

export default function StockListItem({ stock }: Props) {
    const change = Number.parseFloat(stock.percent_change);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.symbol}>
                    {stock.symbol}
                    {" "}
                    <AntDesign name="staro" size={24} color="gray"/>
                </Text>
                <Text style={{ color: "gray" }}>{stock.name}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
                <MonoText>{Number.parseFloat(stock.close).toFixed(1)}</MonoText>
                <MonoText style={{ color: change > 0 ? "green": "red" }}>
                    {change > 0 ? "+" : ""}
                    {change.toFixed(1)}%
                </MonoText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    symbol: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.light.tint,
    },
});