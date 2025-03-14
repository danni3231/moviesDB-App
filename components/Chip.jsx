import { StyleSheet, Text } from 'react-native'

export const Chip = ({ text }) => {
    return (
        <Text style={ styles.chip }>{ text }</Text>
    )
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: '#2098FB',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100,
        color: '#EEEEEE',
        fontWeight: 'bold',
    },
});

