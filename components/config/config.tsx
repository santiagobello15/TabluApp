import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { Context } from "../../context/AppContext";
import { useContext } from "react";

function ConfigModal() {
  const { configModalActive, setConfigModalActive } = useContext<any>(Context);
  return (
    <View style={styles.overlayModal}>
      <View style={styles.mainModal}>
        <Text>CONFIG</Text>
        <TouchableOpacity
          onPress={() => {
            setConfigModalActive(false);
          }}
          style={styles.closeBtn}
        >
          <Text style={styles.closeBtnTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConfigModal;
