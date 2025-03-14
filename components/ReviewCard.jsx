import { Text, View } from 'react-native'
import { generalStyles } from '../Styles'

export const ReviewCard = ({ review }) => {
    const { content, author } = review
    return (
        <View style={ { gap: 4 } }>
            <Text style={ generalStyles.textBold }>
                { author }
            </Text>
            <Text style={ generalStyles.text }>
                { content }
            </Text>
        </View>
    )
}
