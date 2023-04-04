import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  screenLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c7ed6"
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Login: {
    height: "90%",
    width: "90%",
    marginTop: 12,
    paddingBottom: 2,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff"
  },
  LoginScrollView: {
    width: "100%",
    height: "90%",
  },
  LoginImage: {
    alignSelf: "center",
    height: 140,
    width: 140,
  },
  LoginTitle: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: -1
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  LoginContainerInput: {
    alignSelf: "center",
    width: "90%",
  },
  // text above inputs
  LoginInputHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500
  },
  LoginInput: {
    height: 44,
    width: "100%",
    marginTop: 2,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  LoginButtons: {
    height: 44,
    width: "90%",
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1c7ed6"
  },
  textButton: {
    fontSize: 18,
    color: "white",
    fontWeight: 500
  },
  RegisterButton: {
    backgroundColor: "#339af0"
  },
});

export default s;
