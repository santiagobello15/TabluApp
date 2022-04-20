import { StyleSheet } from "react-native";

const mainColor = "#7b2cbf";

export const styles = StyleSheet.create({
  overlayModal: {
    backgroundColor: "rgba(49, 49, 49, 0.945)",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
  },
  mainModal: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    width: "80%",
    height: "50%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  titleContainer: {
    alignItems: "center",
    position: "absolute",
    top: "7%",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    position: "absolute",
    height: "60%",
    backgroundColor: "#fafafa",
    top: "30%",
    borderRadius: 10,
    borderColor: mainColor,
    borderWidth: 1,
  },
  roundsTitle: { top: "7%", position: "absolute" },
  sliderViewRound: { top: "14%", position: "absolute" },
  roundsCounter: { top: "25%", position: "absolute" },
  timeTitle: { top: "40%", position: "absolute" },
  sliderViewTime: { top: "47%", position: "absolute" },
  timeCounter: { top: "58%", position: "absolute" },
  checkboxContainerMuletillas: {
    top: "75%",
    position: "absolute",
    aspectRatio: 8,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainerInsultos: {
    top: "87%",
    position: "absolute",
    aspectRatio: 8,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxitself: { right: "33%", height: 15, width: 15 },
  checkboxContainerMuletillasTxt: {
    position: "absolute",
    fontSize: 13,
    fontFamily: "MuktaMalar",
    color: "black",
  },
  checkboxContainerInsultosTxt: {
    position: "absolute",
    fontSize: 13,
    fontFamily: "MuktaMalar",
    color: "black",
  },
  closeBtn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
  },
  closeBtnTxt: {
    color: "white",
  },
});
