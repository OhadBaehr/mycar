import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Input } from './Input';
import { LinearGradient } from 'expo-linear-gradient';
import logoMyCar from './assets/logo-my-car.png'
import messageSquare from './assets/message-square.png'
import callSquare from './assets/call-square.png'
import RightArrow from './assets/right-arrow.png'

export default function App() {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.container}>
        <Image source={logoMyCar} style={styles.logo} resizeMode="contain" />
        <Text style={styles.headline}>להתחברות לאפליקציית אמדוקס אנא הזינו את מספר הטלפון המייל שלכם</Text>
        <Input source={callSquare} placeholder="מספר טלפון" />
        <Input source={messageSquare} placeholder="כתובת מייל" />
        <View style={{ flexDirection: "row",width:"100%" }}>
          <LinearGradient
            colors={['rgb(208, 52, 112)', 'rgb(226, 94, 104)']}
            style={styles.continue}
          >
            <Image source={RightArrow} style={styles.arrow} resizeMode="contain" />
          </LinearGradient>
          <View>
            <Text style={{ marginTop: 15 }}>צריך עזרה?</Text>
            <Text style={styles.link}>יצירת קשר עם תמיכה</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continue: {
    marginRight:"auto",
    width: 60,
    height: 60,
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  arrow: {
    transform: "scaleX(-1)",
    width: 60,
    height: 20,
  },
  headline: {
    marginTop: 10,
    maxWidth: 280
  },
  link: {
    fontWeight: 600,
    color: "#7c7fc3"
  },
  container: {
    textAlign: "right",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    marginTop: 100,
    marginRight: "auto",
    marginLeft: "auto",
  },
  logo: {
    width: 140,
    height: 40,
  },
});
