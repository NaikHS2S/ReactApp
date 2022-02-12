
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#f0ffff',
  },
  sectionBody: {
    flex: 1, 
    justifyContent: 'center',
     padding: 20

  },
  logoView: { 
    justifyContent: 'center',
     width: "100%", 
     alignItems: "center"
     },
  logoImage: {
    resizeMode: "cover",
    height: 150,
    width: 150,
    alignContent: "center",
    overflow: 'hidden'
  },
  baseViewTextInput: { 
    justifyContent: 'center',
   width: "100%", 
   alignItems: "center" },
  buttonBaseView: {
    justifyContent: 'center', 
    flexDirection: 'row',
    alignItems: "center",
    resizeMode: "cointain",
    margin: 10

  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    margin:10
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  baseText: {
    fontFamily: "Cochin"
  },
  errorText: {
    fontFamily: "Cochin",
    fontSize: 16,
    marginTop: 5,
    color: "red"
  },
  innerText:{  color: 'blue'},

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },

  TextInput: {
    margin: 10,
    width: "100%"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40
  },
  button: {
    backgroundColor: "#5f9ea0",
    color: "blue",
    width: "100%",
    resizeMode: "cointain",
    marginTop:10,
    padding:10

  }
});
