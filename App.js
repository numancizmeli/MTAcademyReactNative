import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getFilmCharsFromBackEnd } from './api/apiCalls'

export default function App() {
  const [charData, setCharData] = useState([])

  useEffect(() => {
    try {
      const request = getFilmCharsFromBackEnd()

      request
        .then((response) => {
          if (response.status === 200) {
            if (response.data.results !== undefined) {
              setCharData(response.data.results)
            }
          } else alert('sunucudan cevap alamadım')
        })
        .catch((err) => {
          alert(err)
        })
    } catch (err) {
      alert(err)
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(charData)}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
