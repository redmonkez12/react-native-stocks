import { useState } from "react";
import { GraphPoint, LineGraph } from "react-native-graph";

import timeseries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function Graph({ symbol }: { symbol: string }) {
    const [selectedPoint, setSelectedPoint] = useState<GraphPoint>();

    const points: GraphPoint[] = timeseries.values.map((value) => ({
        date: new Date(value.datetime),
        value: Number.parseFloat(value.close),
    }));

    const onPointSelected = (point: GraphPoint) => {
        setSelectedPoint(point);
    };

    return (
        <View>
            <MonoText style={{ fontSize: 20, fontWeight: "bold", color: "#017560" }}>
                ${selectedPoint?.value.toFixed(1)}
            </MonoText>
            <Text style={{ color: "gray" }}>
                {selectedPoint?.date.toDateString()}
            </Text>

            <LineGraph
                style={{ width: '100%', height: 300 }}
                points={points}
                animated={true}
                color="#017560"
                gradientFillColors={['#0175605D', '#7476df00']}
                enablePanGesture
                onPointSelected={onPointSelected}
                enableIndicator
                indicatorPulsating
                enableFadeInMask
            />
        </View>
    );
}